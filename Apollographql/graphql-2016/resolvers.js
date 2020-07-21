const mongoose = require('mongoose');
const foodModel = require('./models/food');

const foods = [
    {
        id: 1,
        name: "Tutsi",
        description: "Paletas",
        price: 20,
        quantity: 11,
        sellers: ['Seller 1', "Seller 5"]
    },
    {
        id: 2,
        name: "Bubalo",
        description: "Chicle",
        price: 1.50,
        quantity: 120,
        sellers: ['Seller 2', "Seller 5"]
    },
    {
        id: 3,
        name: "Pica fresa",
        description: "Caramelo",
        price: 0.50,
        quantity: 54,
        sellers: ['Seller 3', "Seller 2", "Seller 4"]
    }
];

const resolvers = {
    Query: {
        foods: (_, {price}) => {
            return foodModel.find({price: price});
        },
        food: (_, {id}) => {
            return foodModel.findOne({id: id});
        }
    },
    Mutation: {
        addFood: (_, {name, description, price, quantity, sellers}) => {
            const food = new foodModel({
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                sellers: sellers
            });

            return food.save();
        },
        deleteFood: (_, {id}) => {
            return foodModel.findOneAndRemove({id: id});
        },
        updateFood: (_, {id, name}) => {
            return foodModel.findOneAndUpdate({id: id}, {name: name});
        }
    }
};

module.exports = resolvers;
