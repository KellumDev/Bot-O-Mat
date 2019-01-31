var db = require('./db');

var sn_data_operations = {

        display_all_records: function() {
            return new Promise(function(resolve, reject) {
                //selecting all records from the andriod table 
                var sql = "SELECT sn_andriod_name, sn_andriod_type, sn_tasks_completed FROM android ";

                db.query(sql, function(err, result) {
                    if (err) {
                        throw err;
                        reject(console.log(err));
                    } else {
                        console.log("display all records");

                        resolve(result);

                    }
                });
            });
        },

        add_record: function(a_params, b_params, c_params) {

            return new Promise(function(resolve, reject) {

                var records = [
                    [a_params, b_params, c_params]
                ];

                //inserting in the andriod table 
                db.query("INSERT INTO android (sn_andriod_name, sn_andriod_type, sn_tasks_completed ) VALUES ?", [records], function(err, result, fields) {

                    if (err) {
                        throw err;
                        reject(console.log(err));
                    } else {

                        resolve(console.log("record added"));
                    }

                });
            });
        }
    }
    //sn_data_operations.display_all_records();

module.exports = sn_data_operations;