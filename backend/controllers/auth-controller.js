const sql = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const signUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = await sql`INSERT INTO users (email, name, password)
    VALUES (${email}, ${name}, ${hashedPassword})`;
    res.status(201).json({ message: "amjilttai burtgegdlee", user: data });
  } catch (error) {
    res.status(404).json({ message: "error", user: error });
  }
};
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [user] = await sql`
    SELECT * FROM users WHERE email = ${email}`;
    console.log("user", user);
    if (!user) {
      res.status(404).json({ message: "burtgeltei hereglegch oldsongui" });
    } else {
      const isCheck = bcrypt.compareSync(password, user.password);
      console.log("ischeck", isCheck);
      if (!isCheck) {
        res
          .status(400)
          .json({ message: "hereglegchiin email esvel nuuts ug buruu baina" });
      } else {
        const token = jwt.sign({ id: user.id }, "JWT_TOKEN_PASS@123", {
          expiresIn: "1h",
        });
        res.status(200).json({ message: "success", user: token });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "error", user: error });
  }
};
module.exports = { signIn, signUp };
