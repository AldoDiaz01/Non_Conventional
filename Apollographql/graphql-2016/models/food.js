const mongoose = require('mongoose');
const uuid = require('node-uuid');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    id: {type: String, default: uuid.v1},
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    sellers: [String]
});

const model = mongoose.model('food', foodSchema);

module.exports = model;
