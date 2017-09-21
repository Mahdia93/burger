// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);}
  else{
  var connection = mysql.createConnection({
  port: 3306,
  host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "fh58t0nrx1thxxo2",
  password: "dd2o8wfb9785yzp8",
  database: "burgers_db"
    });
  }



// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;