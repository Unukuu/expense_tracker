const { Router } = require("express");
const {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category-controller");

const router = Router();

router
  .route("/")
  .get((req, res, next) => {
    if (!req.headers.authorization) {
      res.status(401).json({ message: "nevterldee" });
    }
    next();
  }, getAllCategory)
  .post(createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
