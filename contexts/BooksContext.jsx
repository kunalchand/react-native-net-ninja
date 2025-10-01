import { createContext, useState } from "react";

import { getEnv } from "../utils/env";

const { APPWRITE_DATABASE_ID } = getEnv();

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchBookById(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function createBook(data) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
