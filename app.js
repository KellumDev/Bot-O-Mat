const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const sk_util = require("./api/routes/skynet");

/* 
mongoose.connect(
    "mongodb://admin:nextel12@ds125293.mlab.com:25293/rx_drugbank_data", {
        useMongoClient: true
    }
);
*/



app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "POST") {
        res.header("Access-Control-Allow-Methods", "POST");
        res.status(200);
        //.json(response);
    }
    if (req.method === "GET") {
        res.header("Access-Control-Allow-Methods", "GET");
        res.status(200);
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        //.json(response);
    }
    next();
});


app.use("/skynet", sk_util);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;