const router = require("../utils/router-instance");
const { signUp, getLogin } = require("../controllers/auth-controllers");

router.post("/sign-up", signUp);
router.post("/login", getLogin);

module.exports = router;
