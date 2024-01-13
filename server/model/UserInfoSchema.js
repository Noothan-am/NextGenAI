const { Schema, model } = require("mongoose");
const userInfoSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
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
  credits: {
    type: String,
    required: true,
  },
});

const UserSchema = model("UserInfoSchema", userInfoSchema);

module.exports = UserSchema;
