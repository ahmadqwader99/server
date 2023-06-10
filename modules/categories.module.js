const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
    picture:String,
    name:String,
    id: String,
});

const CategoriesModule = mongoose.model("CaregoriesModule", CategoriesSchema);

module.exports = CategoriesModule