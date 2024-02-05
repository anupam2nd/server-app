const express = require("express");
const app = express();
const userRouter = require("./router/user-router");

const port = 3000;

app.use(express.json());
app.use(userRouter);

// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to home page</h1>");
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
