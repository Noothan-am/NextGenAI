const UserData = require("../model/UserInfoSchema");
const bcrypt = require("bcryptjs");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ Message: "enter all input fields!!" });
  }
  try {
    const checkUser = await UserData.findOne({ email });
    if (checkUser) {
      const isValid = await bcrypt.compare(password, checkUser.password);
      if (isValid) {
        const token = await checkUser.generateToken();
        res.cookie("jsonweb", token);
        return res.status(200).send({ message: "this is token" });
      }
      return res.status(401).json({ message: "invalid credentials" });
    }
    return res.status(401).json({ message: "No user found" });
  } catch (error) {
    return res.status(401).json({ message: error });
  }
};

const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    console.log(email);
    return res.status(401).json({ message: "Enter all input fields!!" });
  }
  try {
    const userExists = await UserData.findOne({ email });
    if (userExists) {
      return res
        .status(401)
        .json({ message: "Email already exists. Please enter a new one!" });
    } else {
      const bcryptPassword = await bcrypt.hash(req.body.password, 8);
      const userRegistered = new UserData({
        email,
        password: bcryptPassword,
        name,
      });
      if (!userRegistered) {
        return res.status(401).json({
          message: "user unable to register due to some internal errors!",
        });
      }
      await userRegistered.save();
      return res.status(200).json({ message: "User registered" });
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signUp, userLogin };
