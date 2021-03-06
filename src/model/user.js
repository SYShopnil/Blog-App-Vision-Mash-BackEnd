const mongoose  = require('mongoose');
const Schema = mongoose.Schema 

const userSchema = new Schema ({
    userId: String,
    email: {
        type: String,
        unique: true
    },
    userType: {
        type: String,
        enum: ["admin", "client"]
    }
},
{
    timestamps: true
})
module.exports = mongoose.model ("User", userSchema)