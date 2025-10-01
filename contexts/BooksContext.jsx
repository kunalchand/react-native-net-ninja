import { createContext, useEffect, useState } from "react";

import { getEnv } from "../utils/env";
import { tablesdb, client } from "../lib/appwrite";
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
    let unsubscribe;
    const channel = `databases.${APPWRITE_DATABASE_ID}.tables.${APPWRITE_BOOKS_TABLE_ID}.rows`;

    if (user) {
      fetchBooks();
      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;

        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}
