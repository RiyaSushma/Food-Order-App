const mongoose = require('mongoose')
const {Schema} = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is mandatory'],
        unique: true,
        select: true,
    },
    location: {
        type: String,
        required: [true, 'Location is mandatory'],
        select: true,
        unique: false
    },
    EmailId: {
        type: String,
        required: [true, 'Email Id is mandatory'],
        unique: true, 
        select: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Password is mandatory'],
        select: [true],
        encrypt: {
            // keyId: [UUID("bffb361b-30d3-42c0-b7a4-d24a272b72e3")],
            // algorithm : "AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic",
            bsonType : "string"
        }
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

// UserSchema.pre('save', function(next) {
//     this.location.unique = false;
//     next();
// })

module.exports = mongoose.model('user', UserSchema)