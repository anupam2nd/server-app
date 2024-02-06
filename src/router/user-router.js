const express = require("express");
const router = express.Router();
const connection = require("../db/connection");

router.get("/", (req, res) => {
  res.send("This from server");
});

router.get("/users", (req, res) => {
  connection.query("SELECT * FROM Users", (err, result, field) => {
    if (err) {
      console.log(err);
      return res.send(500).send("Internal Server Error");
    }

    res.send({ result });
  });
});

// ---------register user--------------------
router.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  connection.query(
    `INSERT INTO Users (Name,Email,Password) VALUES (?,?,?)`,
    [name, email, password],
    (err, result, field) => {
      if (err) {
        console.log(err);
        return res.status(400).send("query not implemented!");
      }

      if (result) {
        res.send({ msg: "Sent data success", result });
      }
    }
  );

  //   if (!result && !field) {
  //     return res.status(400).send("User not created!");
  //   }
  //   res.status(201).send(result);

  //   console.log(err);
  //   res.status(500).send("Internal Server Error");
  // }
});

// login user----------------------------------
router.post("/users/login", (req, res) => {
  const queryToMatchUser = "SELECT * FROM Users WHERE Email=? AND password=?";
  const { email, password } = req.body;

  connection.query(
    queryToMatchUser,
    [email, password],
    (err, result, fields) => {
      if (err) {
        return res.status(500).send("Internal Server Error!");
      }

      if (result.length == 0) {
        return res.status(404).send("Login Failed");
      }

      res.send("success");
    }
  );
});

// Get User By Id---------------------------
router.get("/users/:id", (req, res) => {
  const query = "SELECT * FROM Users where UserId=?";

  connection.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Bad Request");
    }

    res.send(result);
  });
});

// Delete User by Id--------------------------------
router.delete("/users/:id", (req, res) => {
  const query = "DELETE FROM Users WHERE UserId=?";
  connection.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).send("Bad Request");
    }

    res.status(200).send(result[0]);
  });
});

// update user---------------------------------
router.patch("/users/:id", (req, res) => {
  const { name, email, password } = req.body;
  const userId = req.params.id;
  const query = "UPDATE Users SET Name=?, Email=?, password=? WHERE UserId=?";

  connection.query(query, [name, email, password, userId], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Query not executed!");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("User not found.");
    }

    res.status(200).send({ msg: "Data Updated", result });
  });
});

module.exports = router;
