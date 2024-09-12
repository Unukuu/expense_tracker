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
    const { uid, cid, name, amount, transactionType, description } = req.body;
    const newdata =
      await sql`INSERT INTO record (uid, cid, name, amount, transaction_type, description)
VALUES (${uid},${cid}, ${name},${amount}, ${transactionType}, ${description})`;
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
const getInfo = async (req, res) => {
  try {
    const [income, expense] =
      await sql`SELECT transaction_type, SUM(amount) FROM record 
                GROUP BY transaction_type`;
    res.status(200).json({ income, expense });
  } catch (error) {
    res.status(400).json({ message: "failded", error });
  }
};

const getChartData = async (req, res) => {
  try {
    const donutChartData = await sql`
    SELECT SUM(r.amount), c.name cat_name FROM record r 
    INNER JOIN category c ON r.cid=c.id
    WHERE r.transaction_type='EXP'
    GROUP BY cat_name;
    `;
    const barChartData = await sql`
    SELECT TO_CHAR(DATE_TRUNC('month', r.created_at), 'Mon') as sar, 
    SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) as total_exp,
    SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) as total_inc
    FROM record r
    GROUP BY DATE_TRUNC('month', r.created_at) 
    ORDER BY DATE_TRUNC('month', r.created_at);
    `;
    res
      .status(200)
      .json({ message: "success", donut: donutChartData, bar: barChartData });
  } catch (error) {
    res.status(400).json({ message: "failed", error });
  }
};

module.exports = {
  getAllRecord,
  createRecord,
  updateRecord,
  deleteRecord,
  getChartData,
  getInfo,
};
