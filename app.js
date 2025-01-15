const express = require("express");
const app = express();
const userRoutes = require("./routes/user.js");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use("/user", userRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

