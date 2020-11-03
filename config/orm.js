
var connection = require("../config/connection.js");
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {

    //seclectAll()
    all: function (tableInput, cb) {
        var queryAll = "select * from " + tableInput + ";";
        connection.query(queryAll, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    //insertOne()
    create: function (table, cols, vals, cb) {
        var queryAdd = "insert into " + table;

        queryAdd += " (";
        queryAdd += cols.toString();
        queryAdd += ") ";
        queryAdd += "values (";
        queryAdd += printQuestionMarks(vals.length);
        queryAdd += ") ";

        console.log(queryAdd);

        connection.query(queryAdd, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    //updateOne()
    update: function (table, objColVals, condition, cb) {
        var queryUpdate = "update " + table;

        queryUpdate += " set ";
        queryUpdate += objToSql(objColVals);
        queryUpdate += " where ";
        queryUpdate += condition;

        console.log(queryUpdate);
        connection.query(queryUpdate, function (err, res) {
            if (err) {
                throw err;
            }
            console.log(res);
            cb(res);
        });
    }
};

module.exports = orm;