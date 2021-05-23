var express = require("express");
var router = express.Router();
const { signout } = require("../controllers/auth")


// const signout = (req, res) => {
//     res.json({
//         message: "The user signed success"
//     })
//   }

router.get("/signout", signout);

module.exports = router;
