const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId: String, // if user authentication is used
    type: { type: String, enum: ['Home', 'Office', 'Friends & Family'] },
    houseNo: String,
    area: String,
    location: {
        lat: Number,
        lng: Number,
    },
    favorite: { type: Boolean, default: false },
});

module.exports = mongoose.model('Address', addressSchema);
