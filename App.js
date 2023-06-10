const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose");
const CategoriesModule = require("./modules/categories.module");
const ItemModule = require("./modules/item.module");
const StudentModule = require("./modules/student.moudule");

const app = express();
app.use(express.json());

const mongooseLink = "mongodb+srv://ahmadqwader2017:Aa192815963211@cluster0.tjwns2g.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});

app.get("/app", (req, res) => {
    res.status(200).json({
        resturant: "shnezl"
    });
});

app.post("/creatNewItem", (req, res) => {
    const { name, picture, id, price, amount } = req?.body

    ItemModule.create({
        name,
        price,
        amount,
        picture,
        id,

    }).then((response) => {
        res.status(200).json({
            message: "done",
        });
    });
});


app.post("/creatStudent", (req, res) => {
    const { name, id, phone } = req?.body

    if (!name || !id || !phone) {
        return res.status(403).json({
            message: "cannot create student , please make sure you have filled all the student details "
        })
    }

    StudentModule.create({
        name: req.body.name,
        id: req.body.id,
        phone: req.body.phone
    })
        .then((response) => {
            res.status(200).json({
                message: "done",
                createUserRes: response
            });
        });
});

app.get('/getAllUsers', (req, res) => {
    StudentModule.dele({ id: "7" })
        .then(dbRes => {
            res.status(200).json({
                students: dbRes
            })
        })
})

app.get('/getItem', (req, res) => {
    ItemModule.find()
        .then(dbRes => {
            res.status(200).json({
                Itemes: dbRes
            })
        })
});

app.post("/createNewCategories", (req, res) => {
    const { picture, name,id } = req?.body
    CategoriesModule.create({
      picture,
      name,
      id,
    }).then((response)=>{
        res.status(200).json({
            message:"done",
        });
    });
});

app.get("/getCategories",(req,res)=>{
    CategoriesModule.find()
    .then(dbRes=>{
        res.status(200).json({
            Itemes:dbRes
        })
    })
})



module.exports = app;