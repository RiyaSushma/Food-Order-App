const mongoose = require('mongoose');
const {Schema} = mongoose;
const cartSchema = new Schema({
    emailId: {
        type: String,
        required: true,
        select: true,
        unique: true,
    },
    cart: [{
        foodItemsList: { type: Object, required: true },
        options: { type: Object, required: true },
        totalPrice: { type: Number, required: true },
        option: {type: Number, required: true},
        count: {type: Number, required: true}
    }]  
});

module.exports = mongoose.model('cartItem', cartSchema)