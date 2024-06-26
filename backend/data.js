const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mongoDb = async() => {
    try {
        await mongoose.connect('mongodb+srv://riyag0105:CSE_2019!%40%23@cluster0.fniq23r.mongodb.net/GoFoodData?retryWrites=true&w=majority');
        console.log('Connected')
        const fetched_data = mongoose.connection.db.collection('FoodItemsList');
        const data = await fetched_data.find({}).toArray();
        const foodCategorydata = mongoose.connection.db.collection('FoodCategory')
        const categorydata = await foodCategorydata.find({}).toArray()
        global.food_items = data;
        global.foodCategory = categorydata;
        // console.log('data fetched: ', global.food_items)
        // console.log('categories data: ', global.foodCategory)
        // global.food_items = data
        // const data = await fetched_data.find({}).toArray()
        // console.log(food_items)
    } catch(err) {
        console.log(err)
    }
};

console.log("Done")

module.exports = mongoDb;
