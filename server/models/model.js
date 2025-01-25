const mongoose = require("mongoose")

const Schema = mongoose.Schema

const categories_model = new Schema({
    type:{type: String, default: "Investmeny"},
    color: {type:String, default: "red"}
})

const transaction_model = new Schema({
    name:{type: String, default: "Anonymous"},
    type: {type:String, default: "Anonymous"},
    amount:{ type: Number, default:0},
    date:{type:Date, default:Date.now}
})


const Categories = mongoose .model('categories', categories_model)
const Transactions = mongoose .model('transactions', transaction_model)


module.exports = {
    Categories, Transactions
}