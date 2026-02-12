const express = require('express');
const axios = require('axios');
let books = require("./booksdb.js");

const public_users = express.Router();

/* Get the book list available in the shop */
public_users.get('/', async function (req, res) {
    try {
        const response = await axios.get('http://localhost:5000/books');
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving books" });
    }
});

/* Get book details based on ISBN */
public_users.get('/isbn/:isbn', async function (req, res) {
    const isbn = req.params.isbn;
    try {
        const response = await axios.get(`http://localhost:5000/books/${isbn}`);
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving book by ISBN" });
    }
});

/* Get book details based on author */
public_users.get('/author/:author', async function (req, res) {
    const author = req.params.author;
    try {
        const response = await axios.get(`http://localhost:5000/books/author/${author}`);
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving books by author" });
    }
});

/* Get book details based on title */
public_users.get('/title/:title', async function (req, res) {
    const title = req.params.title;
    try {
        const response = await axios.get(`http://localhost:5000/books/title/${title}`);
        return res.status(200).json(response.data);
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving books by title" });
    }
});

module.exports.general = public_users;
