const connectDB = require('./db')
const { ObjectID } = require('mongodb')

module.exports = {
    users: async() => {
        let db, users = []
        try {
            db = await connectDB()
            users = await db.collection('users').find().toArray()
        } catch (error) {
            console.log(error)
        }
        return users
    },
    user: async(root, args) => {
        let db, user = []
        try {
            db = await connectDB()
            user = await db.collection('users').findOne({ _id: ObjectID(args.id) })
        } catch (error) {
            console.log(error)
        }
        return user
    }
}