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
        // const userById = await User.findById("6301049f832d9be768143dbf")
        // const userByObject = await User.find({ firstName: "Mohammed"})
        // const userexists = await User.exists({ firstName: "Mohammed"})
        // const userexists = await User.findOne({ firstName: "Ahmed"})
        // console.log("userById", userById);
        // console.log("userByObject",userByObject);
        // console.log("userexists",userexists);

        /* ############## Deleting data from mongoDB  ################################ */
        // const userDeleted = await User.deleteOne({ firstName: "Ahmed"})
        // // const userDeleted = await User.deleteMany({ firstName: "Mohammed"})
        // const userIdDeleted = await User.findByIdAndDelete("6301049f832d9be768143dbf")
        // console.log("userDeleted", userDeleted);
        // console.log("userIdDeleted", userIdDeleted);

        /* ############## Using Queries (where..) filter data  ################################ */
        // await User.create({
        //     firstName: "kamal",
        //     email: "a@aa.com",
        //     lastName: "Saeed",
        //     age: 19
        // })
        // await User.create({
        //     firstName: "fahed",
        //     email: "f@aa.com",
        //     lastName: "Saeed",
        //     age: 32
        // })
        // await User.create({
        //     firstName: "Ahmed",
        //     email: "Ahmed@Ahmed.com",
        //     lastName: "Saeed",
        //     age: 20
        // })
        // const user3 = await User.where("firstName").equals("Ahmed").limit(3)
        // const user = await User.where("firstName").equals("Ahmed").where("age").gt(18).lt(21)
        // const userAges = await User.where("age").gt(18).lt(21).select("age")
        // console.log("user", user);
        // console.log("user3", user3);
        // console.log("userAges", userAges);

        /* ############## Using Queries to show all related objectId feilds data  ################################ */
        // await User.create({
        //     firstName: "maso",
        //     email: "a@aa.com",
        //     age: 33,
        //     bestFriend: "6300f4d7cd1b5ed9f9690545"
        // })

        // const userWithId = await User.where("age").equals(33)
        // const userWithAllData = await User.where("age").equals(33).populate("bestFriend")
        // console.log("userWithId", userWithId);
        // console.log("userWithAllData", userWithAllData);

        /* ############## Using custom (methods-functions-Queries) for Model  ################################ */
        
        const userMethods = await User.where("age").equals(33)
        userMethods.sayHi()
        const userStatices = await User.findByEmail("maso@maso.com")
        console.log("userStatices", userStatices);
        const userQueries = await User.find().byEmail("maso@maso.com")
        console.log("userQueries", userQueries);

        /* ############## added virtual property to Model not to DB  ################################ */
        
        const user = await User.where("age").equals(33)
        console.log("user", user);
        console.log("user", user.fullName);
    } catch (error) {
        console.error(error.message);
    }


}