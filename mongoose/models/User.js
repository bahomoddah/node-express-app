const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    street: String,
    city: String
})

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: 3
    },
    lastName: String,
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    age: {
        type: Number,
        max: 77,
        default: 25,
        validate: {
            validator: v => v >= 13,
            message: props => `You Are Younger your age is ${props.value}`
        }
    },
    createAt: {
        type: Date,
        immutable: true,
        default: () => new Date()
    },
    updateAt: {
        type: Date,
        default: () => new Date()
    },
    address: addressSchema,
    homeTwon:  {
        country: String,
        city: String
    },
    hoppies: [],
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User