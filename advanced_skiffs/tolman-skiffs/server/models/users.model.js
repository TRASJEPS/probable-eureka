const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
















);

const User = mongoose.model("User", UserSchema);
module.exports = User;