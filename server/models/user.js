import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

let schema = mongoose.Schema;

const userSchema = new schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created: Date
});

userSchema.methods.hashPassword = function () {
    const hashedPassword = bcrypt.hashSync(this.password, 10);
    this.password = hashedPassword;
}

userSchema.pre('save', function(next){
    this.created = new Date();
    next();
});

const User = mongoose.model('User', userSchema);

export default User;