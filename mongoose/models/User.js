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

// added custom methods to User model
userSchema.methods.sayHi = function () {
    console.log(`Hi I'm ${this.firstName}, my Age is ${this.age}`);
}

// added custom functions to User Model
userSchema.statics.findByEmail = function (email) {
    return this.find({email: new RegExp(email, 'i') })
}

// added custom Queries to filter User Model like where()
userSchema.query.byEmail = function (email) {
    return this.where({email: new RegExp(email, 'i') })
}

// Added custom key value without put it in DB
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`
})

// Middleware before save model function
userSchema.pre('save', function (next) {
    this.updateAt = new Date()
    if (this.age > 60) {
        throw Error("age must be less then 60 ")
    }
    next()
})
// Middleware after save model function
userSchema.post('save', function (doc, next) {
    doc.sayHi()
    // next()
})

const User = mongoose.model("User", userSchema)
module.exports = User