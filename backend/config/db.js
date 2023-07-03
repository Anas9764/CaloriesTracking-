require("dotenv").config();
const mongoose = require("mongoose");

const connection = mongoose.connect(process.env.MONGODB_URL)
console.log(process.env.MONGODB_URL)

module.exports = connection;



// {    "name": "apple",
//    " quantity": "2",
//    " calories": "145",
//     "carbs": "455",
//     "fat": "555",
//     "protein": "4",
//     "sodium": "585",
//     "sugar": "55"
//     }