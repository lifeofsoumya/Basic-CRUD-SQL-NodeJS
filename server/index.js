import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.SQL_RT_PW,
  database: "test"
});

app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => { // adding a book with body
  console.log(req.body);
  const query = "INSERT INTO books (`title`, `desc`, `author`) VALUES (?)";
  const values = [req.body.title, req.body.desc, req.body.author];
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/books/:id", (req, res) => { // getting a book with id
  const { id } = req.params;
  const query = "SELECT * FROM books WHERE id = ?";
  db.query(query, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/books/:id", (req, res) => { // updating a book with id
  const { id } = req.params;
  const { title, desc, author } = req.body;
  const query =
    "UPDATE books SET title = ?, `desc` = ?, author = ? WHERE id = ?";
  db.query(query, [title, desc, author, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => { // deleting a book with id
    const { id } = req.params;
    const query = "DELETE FROM books WHERE id = ?";
    db.query(query, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
