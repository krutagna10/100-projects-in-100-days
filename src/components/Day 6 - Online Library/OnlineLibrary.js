import AddBookForm from "./AddBookForm";
import BooksList from "./BooksList";
import { useState } from "react";

const INITIAL_BOOKS = [
  {
    id: crypto.randomUUID(),
    name: "Game of Thrones",
    author: "George .R. Martin",
    pages: 900,
  },
  {
    id: crypto.randomUUID(),
    name: "Lord of the Rings",
    author: "J.R.R Tolkien",
    pages: 400,
  },
  {
    id: crypto.randomUUID(),
    name: "Harry Potter",
    author: "JK Rowling",
    pages: 300,
  },
];

const OnlineLibrary = () => {
  const [books, setBooks] = useState(INITIAL_BOOKS);

  const handleAddBook = ({ name, author, pages }) => {
    const newBook = {
      id: crypto.randomUUID(),
      name: name,
      author: author,
      pages: Number(pages),
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleDelete = (deleteId) => {
    setBooks((prevBooks) => {
      const updatedBooks = prevBooks.filter((book) => deleteId !== book.id);
      return updatedBooks;
    });
  };

  return (
    <div className="library">
      <AddBookForm onAddBook={handleAddBook} />
      <BooksList books={books} onDelete={handleDelete} />
    </div>
  );
};

export default OnlineLibrary;
