const sql = require("../config/db");

const getAllRecord = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM record`;
    console.log("DATA", data);
    res.status(200).json({ message: "success", user: data });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};
const createRecord = async (req, res) => {
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
const updateRecord = async (req, res) => {
  try {
    const values = req.body;
    const updateddata =
      await sql`UPDATE users SET ${values} WHERE id = ${req.params.id}`;
    res.status(201).json({ message: "updated", user: updateddata });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};
const deleteRecord = async (req, res) => {
  try {
    const deleteData = await sql`DELETE FROM users where id = ${req.params.id}`;
    res.status(201).json({ message: "deleted", user: deleteData });
  } catch (error) {
    res.status(404).json({ message: "error delete", user: error });
  }
};

module.exports = { getAllRecord, createRecord, updateRecord, deleteRecord };
