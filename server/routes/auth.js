import express from 'express';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';
import jasnoWebToken from 'jsonwebtoken';
import config from '../config';

//import { validateInput } from '../shared/validations/login';

//model
import User from '../models/user';

let router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then((user) => {
            if (user) {
                const hashedPassword = bcrypt.hashSync(password, 10);

                if (bcrypt.compareSync(password, user.get('password'))) {
                    const token = jasnoWebToken.sign({
                        id: user.get('_id'),
                        email: user.get('email')
                    }, config.jwtSecret);

                    res.json({ token });
                }
                else {
                    res.status(401).json({ errors: { form: 'Invalid Credentials' } });
                }
            }
            else {
                res.status(401).json({ errors: { form: 'Invalid Credentials' } });
            }
        });

});

export default router;