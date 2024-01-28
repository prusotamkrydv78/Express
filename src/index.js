const express = require("express");

const app = express();
const Port = 8000;
app.get("/", (req, res) => {
  res.status(200).send("<h1> Welcome to my first express app");
});
app.get("/about", (req, res) => {
  res
    .status(200)
    .send("<h1> Welcome to my first express app. It is about page");
});
app.get("/contact", (req, res) => {
  res
    .status(200)
    .send("<h1> Welcome to my first express app. It is Contact page");
});

app.listen(Port, () => {
  console.log("our server is running on port " + Port);
});
