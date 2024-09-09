const sql = require("../config/db");

const getCurrentUser = async (req, res) => {
  const { id } = req.getCurrentUser;
  try {
    const [data] = await sql`SELECT * FROM users WHERE id = ${id};`;
    console.log("get current data", data);
    res.status(200).json({ message: "success", user: data });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};

const getAllUser = async (req, res) => {
  const data = await sql`SELECT * FROM users`;
  console.log("DATA", data);
  res.status(200).json({ message: "success", user: data });
};
const createUser = async (req, res) => {
  try {
    const { email, name, password, profile_image } = req.body;
    const newdata =
      await sql`INSERT INTO users (email, name, password, profile_image)
VALUES (${email}, ${name}, ${password}, ${profile_image})`;
    res.status(201).json({ message: "created", user: newdata });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};
const updateUser = async (req, res) => {
  try {
    const values = req.body;
    const updateddata =
      await sql`UPDATE users SET ${values} WHERE id = ${req.params.id}`;
    res.status(201).json({ message: "updated", user: updateddata });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};
const deleteUser = async (req, res) => {
  try {
    const deleteData = await sql`DELETE FROM users where id = ${req.params.id}`;
    res.status(201).json({ message: "deleted", user: deleteData });
  } catch (error) {
    res.status(404).json({ message: "error delete", user: error });
  }
};

module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getCurrentUser,
};
