const { Schema, model } = require("mongoose");
const UserData = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserSchema = model("UserData", UserData);

module.exports = UserSchema;
