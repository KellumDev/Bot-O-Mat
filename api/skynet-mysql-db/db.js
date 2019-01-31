var mysql = require('mysql');
var settings = require('./settings.json');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function(err) {
            if (!err) {
                console.log('Skynet database connected!');
            } else {
                console.log('Skynet database not connected, error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();