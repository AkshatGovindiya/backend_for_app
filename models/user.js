const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    birthdate :{ type: Date },
    gender: { type: String },
    occupation : {type : String},
    bio :{type:String},
    address:{type:String},
    role: { type: String, default: 'member' }, // e.g., 'admin' or 'member'
    profile_picture: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
