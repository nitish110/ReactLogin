const express = require("express");
const User1 = require("../controllers/UserRegistration");
const r = express.Router();
r.post("/User", User1.insertUser);
r.get("/User", User1.getUser);
module.exports = r;
