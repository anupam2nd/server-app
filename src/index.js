const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("./router/user-router");

const port = 3000;

app.use(cors());
app.use(express.json());
app.use(userRouter);

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to home page</h1>");
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
