const { Router } = require("express");
const {
  getAllRecord,
  createRecord,
  deleteRecord,
  updateRecord,
  getInfo,
  getChartData,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/info").get(getInfo);
router.route("/chart").get(getChartData);
router.route("/").post(createRecord);
router.route("/").get(auth, getAllRecord);
router.route("/:id").put(updateRecord).delete(deleteRecord);

module.exports = router;
