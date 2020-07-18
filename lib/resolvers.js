const connectDB = require('./db')
const { ObjectID } = require('mongodb')


module.exports = {
    Query: {
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
        user: (root, args) => async() => {
            let db, user = []
            try {
                db = await connectDB()
                user = await db.collection('users').findOne({ _id: ObjectID("5f124cec9a9652cf4cb89b13") })
            } catch (error) {
                console.log(error)
            }
            console.log(user)
            return user
        }
    }
}