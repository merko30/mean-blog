const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Post = require('./post');


const userSchema = new schema({
    username: { type: String, unique: true, required: true },
    name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true }
})

userSchema.pre('save', function (next) {
    var user = this

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        })
    })
});

userSchema.methods.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}




const User = module.exports = mongoose.model('User', userSchema, 'users');
