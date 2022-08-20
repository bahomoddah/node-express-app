const mongoose = require('mongoose');
const User = require('./models/User')

mongoose.connect("mongodb://localhost/myExpressDB", () => {
        console.log("MongoDB connected");
    },
    (e) => {
        console.error(e);
    })

runCode()

async function runCode() {
    try {
        /* ############## Create new user by new model ################################ */
        // const user = new User({
        //     firstName: "Mohammed",
        //     email: "maso@maso.com"
        // })
        // await user.save()
        /* ############## Create new user by create methode ################################ */
        // const user = await User.create({
        //     firstName: "Ahmed",
        //     email: "a@a.com"
        // })
        /* ############## Update user after Create with save methode ################################ */
        // const user = await User.create({
        //     firstName: "Ahmed",
        //     email: "a@a.com",
        //     lastName: "Saeed",
        //     hoppies: ["programming", "playing Football"],
        //     address: {
        //         street: "Main ST"
        //     },
        //     homeTwon: {
        //         country: "Yemen"
        //     }
        // })
        // user.lastName = user.lastName || null
        // user.address.city = user.address.city || "mukalla"
        // await user.save()


        /* ############## use builtin prorties in Schema  ################################ */
        // const user = await User.create({
        //     firstName: "Ahmed",
        //     email: "a@a.com",
        //     lastName: "Saeed",
        //     age: 10
        // })
        
        /* ############## using find method to get data from mongoDB  ################################ */
        const userById = await User.findById("6301049f832d9be768143dbf")
        const userByObject = await User.find({ firstName: "Mohammed"})
        const userexists = await User.exists({ firstName: "Mohammed"})
        console.log("userById", userById);
        console.log("userByObject",userByObject);
        console.log("userexists",userexists);

    } catch (error) {
        console.error(error.message);
    }


}