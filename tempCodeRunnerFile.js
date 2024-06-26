/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.


const database = 'GoFoodData';
const { Schema, model } = mongoose;
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;
// const dotenv = require('dotenv')

use(database);
// const collection = FoodItemList;
// db.createCollection('FoodItemsList');

const FoodItemListSchema = Schema({ 
    CategoryName: {
        type: String,
        required: [true, 'The Food Item Category is mandatory'],
        unique: true,
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
});


// db.FoodItemsList.insert(FoodItemList)

const FoodItemsListModel = model('FoodItemsList', FoodItemListSchema)

// db.FoodItemsList.insertMany('src/foodCategory.json')

// The current database to use.






// Create a new collection.


// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
