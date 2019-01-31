const express = require("express");
const router = express.Router();

const sk = require("../utilites/skynet-operations");
const skdb = require("../skynet-mysql-db/skynet-data");

var init_json = {};

router.post("/bot-production-line", (req, res, next) => {
    try {
        var production_bot = {
            robot_name: req.body.robot_name,
            robot_type: req.body.robot_type,
            robot_tasks: sk.main_skynet_operation()
        };

        // init_json = production_bot;

        console.log(production_bot);
        res.status(200).json(production_bot);
    } catch (err) {
        console.log("bad stuff");
    }


});


router.post("/new-production-model", (req, res, next) => {

    console.log('*****' + JSON.stringify(req.body) + '******');
    // skdb.add_record(a_params, b_params, c_params).then(function(results) {

    //     console.log("bot was created!");
    // }).catch(function(err) {
    //     console.log(err);
    //     res.status(404).json({
    //         message: 'error displaying records',
    //         error: err
    //     });
    // });

});

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