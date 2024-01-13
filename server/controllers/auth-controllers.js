const userInfo = require("../model/UserInfoSchema");
const TransactionSchema = require("../model/TransactionSchema");

const userLogin = async (req, res) => {
  try {
    const data = req.body;
    const { email, password } = data;
    const user = await userInfo.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    if (!(password === user.password)) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    return res.status(200).send({
      userId: user.user_id,
      userName: user.name,
      coins: user.current_coins,
      image: user.image,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

const getLogin = async (req, res) => {};

module.exports = { userLogin, getLogin };
