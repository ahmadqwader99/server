const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemShema = new Schema({
  name: String,
  price:String,
  amount:String,
  picture: String,
  id: String,


});

const ItemModule = mongoose.model("ItemModule", ItemShema);

module.exports = ItemModule