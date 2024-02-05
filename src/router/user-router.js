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

router.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  //   try {
  //     const [result, field] = await connection.query(
  //       `INSERT INTO Users (Name,Email,Password) VALUES (?,?,?)`,
  //       [name, email, password]
  //     );

  //     if (!result && !field) {
  //       return res.status(400).send("User not created!");
  //     }
  //     res.status(201).send(result);
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).send("Internal Server Error");
  //   }
  try {
    await connection.ping();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
