const express = require('express');
const Razorpay = require('razorpay');
const app = express();
const router = require("./router/router")
const expressLayouts = require("express-ejs-layouts")
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({extended : false}))
app.use(expressLayouts)
app.set("view engine","ejs")
app.use("/checkout",router)




PORT = 5000
app.listen(PORT, ()=>{
	console.log("Server is Listening on Port ", PORT);
});
