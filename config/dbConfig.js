const mongoose = require('mongoose')


const dbConnection = async () => {
    try {
        const connect = mongoose.connect(process.env.MONGODBURL)
        const database = mongoose.connection;

        database.on("err", () => {
            console.log("database connection error")
        })

        database.once("connected", () => {
            console.log("database connection successful")
        })
    } catch (err) {
        console.log("not connected " + err.message)
    }
}
module.exports = dbConnection;