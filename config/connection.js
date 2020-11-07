var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
      host: "lblonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      port: 3306,
      user: "e6ka3cy1aiesihwf",
      password: "aup3mu238wu1i92w",
      database: "vygdg78d3w23b2kx"
});
};

// Make connection.
connection.connect();
  module.exports = connection;