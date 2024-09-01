const sql = require("../config/db");

const getAllCategory = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM category`;
    console.log("DATA", data);
    res.status(200).json({ message: "success", user: data });
  } catch (error) {
    res.status(404).json({ message: "error", user: data });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, description, category_img } = req.body;
    const createCategorydata =
      await sql`INSERT INTO category (name, description, category_image)
VALUES (${name}, ${description}, ${category_img})`;
    console.log("DATA", createCategorydata);
    res.status(200).json({ message: "success", user: createCategorydata });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};
const updateCategory = async (req, res) => {
  try {
    const { name, description, category_img } = req.body;
    const { id } = req.params;
    console.log("id hevleh", id);
    const updateCategorydata =
      await sql`UPDATE category SET name=${name},description=${description},category_image=${category_img} WHERE id = ${id}`;
    console.log("DATA", updateCategorydata);
    res.status(200).json({ message: "success", user: updateCategorydata });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};
const deleteCategory = async (req, res) => {};

module.exports = {
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
