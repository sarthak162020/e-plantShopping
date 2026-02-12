/* Get book details based on author */
public_users.get('/author/:author', async function (req, res) {
    const author = req.params.author;

    try {
        const response = await axios.get(`http://localhost:5000/books`);
        const books = response.data;

        // Filter books by author
        const filteredBooks = Object.entries(books)
            .filter(([isbn, book]) => book.author === author)
            .reduce((acc, [isbn, book]) => {
                acc[isbn] = book;
                return acc;
            }, {});

        // If no books found, return 404
        if (Object.keys(filteredBooks).length === 0) {
            return res.status(404).json({ message: "Author not found" });
        }

        return res.status(200).json(filteredBooks);

    } catch (error) {
        return res.status(500).json({ message: "Error retrieving books by author" });
    }
});
