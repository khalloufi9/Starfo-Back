const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
  },
  imagePath: {
    type: String,
  },
  profilePictureName: {
    type: String,
  },
});
module.exports = User = mongoose.model("user", UserSchema);
