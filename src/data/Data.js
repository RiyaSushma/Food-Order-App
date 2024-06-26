
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// mongoose.connect('mongodb+srv://riyag0105:<password>@cluster0.fniq23r.mongodb.net/')

// const foodItemsSchema = new Schema({
//     CategoryName: {
//         type: String,
//         required: [true, 'The Food Item Category is mandatory'],
//         unique: true,
//         select: true,
//     },
//     name: {
//         type: String,
//         required: [true, 'Food Item name is mandatory'],
//         unique: true,
//         select: true,
//     },
//     img: {
//         type: String,
//         required: [true, 'Image is required'],
//         unique: true, 
//         select: true,
//     },
//     options: {
//         type: [{
//             type: {
//                 type: String,
//                 enum: ['Half', 'Full', 'Regular', 'Medium', 'Large'],
//                 required: true,
//             },
//             price: {
//                 type: Number, 
//                 required: true,
//             },
//         }],
//         required: true,
//         select: [true, 'Price is mandatory'],
//     },
//     description: {
//         type: String,
//         select: true,
//         required: false,
//     },
// });

// const FoodItemList = mongoose.model('FoodItemList', foodItemsSchema);

// module.exports = FoodItemList;