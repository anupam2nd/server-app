const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

router.get("/", (req, res) => {
  res.send("This from server");
});

// router.get("/users", (req, res) => {
//   connection.query("SELECT * FROM Users", (err, result, field) => {
//     if (err) {
//       console.log(err);
//       return res.send(500).send("Internal Server Error");
//     }

//     res.send({ result });
//   });
// });

// router.post("/users", (req, res) => {
//   const { name, email, password } = req.body;

//   connection.query(
//     `INSERT INTO Users (Name,Email,Password) VALUES (${name}, ${email}, ${password})`,
//     (err, result, field) => {
//       if (err) {
//         console.log(err);
//         return res.status(401).send("User not created!");
//       }

//       res.send({ result });
//     }
//   );
// });

module.exports = router;
