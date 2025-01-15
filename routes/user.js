const e = require("express");
const express = require("express");
const router = express.Router();

router.get("/signin", (req, res) => {
    res.render("../views/User/signin.ejs");
});

module.exports = router;