import express from 'express';
import isEmpty from 'lodash/isEmpty';

import { validateInput } from '../shared/validations/signup';

//model
import User from '../models/user';

let router = express.Router();

//add validation for existing user
function fullValidation(data, validateInput) {
    let { errors } = validateInput(data);

    return User.find({ email: data.email })
        .exec()
        .then((user) => {
          
            if (user.length > 0) {
                errors.email = "Email is already in use!";
            }

            return {
                errors,
                isValid: isEmpty(errors)
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

router.post('/', (req, res) => {
    fullValidation(req.body, validateInput).then(({ errors, isValid }) => {
        if (isValid) {
            const { email, password } = req.body;

            const newUser = new User({
                email,
                password
            });

            newUser.hashPassword();

            newUser.save(function (err, user) {
                if (err) {
                    throw err;
                }
                console.log("New user has been added to db", user);
            });

            res.status(200).json({ success: true });
        } else {
            res.status(400).json(errors);
        }
    });
});

export default router;