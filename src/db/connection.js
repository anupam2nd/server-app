const mysql = require("mysql2/promise");

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

// connectToDatabase()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

module.exports = connection;
