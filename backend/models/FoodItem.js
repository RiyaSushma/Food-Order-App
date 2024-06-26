const mongoose = require('mongoose')
const {Schema} = mongoose;
const foodItemsSchema = new Schema({
    CategoryName: {
        type: String,
        required: [true, 'The Food Item Category is mandatory'],
        unique: false,
        select: true,
    },
    name: {
        type: String,
        required: [true, 'Food Item name is mandatory'],
        unique: true,
        select: true,
    },
    img: {
        type: String,
        required: [true, 'Image is required'],
        unique: true, 
        select: true,
    },
    options: {
        type: [{
            type: {
                type: String,
                enum: ['Half', 'Full', 'Regular', 'Medium', 'Large'],
                required: true,
            },
            price: {
                type: Number, 
                required: true,
            },
        }],
        required: true,
        select: [true, 'Price is mandatory'],
    },
    description: {
        type: String,
        select: true,
        required: false,
    },
}, {collection: 'FoodItemsList'});

module.exports = mongoose.model('FoodItems_List', foodItemsSchema);
