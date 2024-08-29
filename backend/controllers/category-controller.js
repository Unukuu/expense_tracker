const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  const data = await sql`SELECT * FROM category`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};

const createCategory = () => {};
const updateCategory = () => {};
const deleteCategory = () => {};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
