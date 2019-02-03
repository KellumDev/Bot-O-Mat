const express = require("express");
const router = express.Router();

const sk = require("../utilites/skynet-operations");
const skdb = require("../skynet-mysql-db/skynet-data");

var init_json = {};

//route for adding a new bot to the database
router.post("/new-production-model", (req, res, next) => {

    bot_obj = req.body;    
     
    skdb.add_record( bot_obj.robot_name,  bot_obj.robot_type,  bot_obj.task_completed).then(
         
        function(results) {

            res.status(200).send({
            message: 'bot added to database',
           
        });

    }).catch(function(err) {
        console.log(err);
        res.status(404).json({
            message: 'error displaying records',
            error: err
        });
     });

});

//route to display all records of bots
router.get("/top-performers", (req, res, next) => {

    skdb.display_all_records().then(function(results) {

        res.status(200).json(results);

    }).catch(function(err) {
        console.log(err);
        res.status(404).json({
            message: 'error displaying records',
            error: err
        });
    });



});

module.exports = router;