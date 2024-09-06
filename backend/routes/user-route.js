const { Router } = require("express");
const {
  getAllUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../controllers/user-controller");
const auth = require("../middlewares/auth");
const router = Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);

module.exports = router;
