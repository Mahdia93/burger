// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);}
  else{
  var connection = mysql.createConnection({
  port: 3306,
  host: "xq7t6tasopo9xxbs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "wl32qlo1w49ax8xu",
  password: "xp1oqpemd9a5gp9a",
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