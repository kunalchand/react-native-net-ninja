import { createContext, useEffect, useState } from "react";

import { getEnv } from "../utils/env";
import { tablesdb } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const { APPWRITE_DATABASE_ID, APPWRITE_BOOKS_TABLE_ID } = getEnv();

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await tablesdb.listRows(
        APPWRITE_DATABASE_ID,
        APPWRITE_BOOKS_TABLE_ID,
        [Query.equal("userid", [user.$id])]
      );

      setBooks(response.rows);
      console.log("response.rows", response.rows);
    } catch (error) {
      throw Error(error?.message ?? "Error fetching books");
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
      const newBook = await tablesdb.createRow(
        APPWRITE_DATABASE_ID,
        APPWRITE_BOOKS_TABLE_ID,
        ID.unique(),
        { ...data, userid: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      throw Error(error?.message ?? "Error creating book");
    }
  }

  async function deleteBook(id) {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      fetchBooks();
    } else {
      setBooks([]);
    }
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
