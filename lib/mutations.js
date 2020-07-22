const connectDB = require('./db')

module.exports = {
    createUser: async(root, args) => {
        let db, user = []
        try {
            db = await connectDB()
            user = await db.collection('users').insertOne(args.input)
            user._id = user.insertedId
        } catch (error) {
            console.log(error)
        }
        return user
    }
}