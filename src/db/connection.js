const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "new_db",
});

// const connectToDatabase = async () => {
//   try {
//     await connection.connect();
//     console.log("Db connected successfully!");
//   } catch (err) {
//     console.error("Error in connecting", err);
//     throw err;
//   }
// };

connection.connect((err) => {
  if (err) {
    console.log("Connection Failed! Error: ", err);
  } else {
    console.log("Connection Established!");
  }
});

// connectToDatabase()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

module.exports = connection;
