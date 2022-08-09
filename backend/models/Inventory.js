const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let invSchema = new Schema(
    {
        category: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number, min: [0.0, 'Cannot be a negative number'],
            required: true
        }
    },
    {
        collection: 'inventory'
    }
)

module.exports = mongoose.model('Inventory', invSchema);