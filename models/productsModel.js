const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Esquema 
const productsSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
    ,
    category: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

//Export
// name collection in mongo = products
module.exports = mongoose.model('products', productsSchema);