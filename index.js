const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Home page");
  console.log("home page is working");
});

app.get("/about", (req, res) => {
  res.json("About me I am developer and laziest person on the earth");
  console.log("about page is working");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The app is running on port ${port}`);
});
