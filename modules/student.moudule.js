const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: String,
    id: {type:Number , require:true},
    phone: String,
});

const StudentModule = mongoose.model("Student", StudentSchema);

module.exports = StudentModule