const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js");
const path = require("path");
const ejsMate = require("ejs-mate");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

