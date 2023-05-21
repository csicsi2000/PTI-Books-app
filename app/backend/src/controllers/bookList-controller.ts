import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import express from "express";
import { BookList } from "shared-component/dist/entity/BookList";
import { Book } from "shared-component/dist/entity/Book";
import { verify } from "./auth-controller";
import { User } from "shared-component/dist/entity/User";

export class BookListCalls {
  constructor(app: express.Application) {
    // Get the book lists
    app.get("/users/:userId/booklists", this.getUserBookLists);
    // Get the book list
    app.get("/users/:userId/booklists/:booklistId", this.getBookList);
    // Create a new booklist for the user
    app.post("/users/:userId/booklists", this.createBookList);
    // Insert a book to a booklist
    app.post(
      "/users/:userId/booklists/:booklistId/books",
      this.insertBookIntoList
    );
    // Delete a book from a book list
    app.delete(
      "/users/:userId/booklists/:booklistId/books/:bookId",
      this.deleteBookFromList
    );
  }

  getUserBookLists = async (req: Request, res: Response) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }
    verify(token);

    const { userId } = req.params;

    let userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: { id: userId },
      relations: {
        bookLists: true,
      },
    });

    if (!user) {
      return res.status(404).send("User not found");
    }

    console.log(user);
    return res.send(user.bookLists);
  };

  getBookList = async (req: Request, res: Response) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }
    verify(token);

    const { userId, booklistId } = req.params;
    let bookListRepository = AppDataSource.getRepository(BookList);

    const booklist = await bookListRepository.findOne({
      where: { id: booklistId },
      relations: { user: true, books:true },
    });

    if (!booklist || booklist.user.id !== Number(userId)) {
      return res.status(404).send("Booklist not found");
    }

    return res.send(booklist);
  };

  createBookList = async (req: Request, res: Response) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }
    verify(token);

    const { userId } = req.params;
    const listName = req.body.name;

    let userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { id: userId } });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const bookListRepository = AppDataSource.getRepository(BookList);

    // Check if the user already has a booklist with the same name
    const existingBookList = user.bookLists?.find((bl) => bl.name == listName);

    if (existingBookList) {
      return res.status(400).send("Booklist with same name already exists");
    }

    // Set the user for the new booklist

    let bookListObj = new BookList();
    bookListObj.name = listName;
    bookListObj.user = userId;

    // Save the new booklist
    console.log(bookListObj);
    await bookListRepository.save(bookListObj);
    console.log("Booklist created successfully");
    return res.send("Booklist created successfully");
  };

  insertBookIntoList = async (req, res) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }
    verify(token);

    const { userId, booklistId } = req.params;
    const insertedBook = req.body.book as Book;
    insertedBook.book_lists ??= [];

    let bookListRepository = AppDataSource.getRepository(BookList);

    const booklist = await bookListRepository.findOne({
      where: { id: booklistId },
      relations: { user: true, books: true },
    });

    if (!booklist || booklist.user.id !== Number(userId)) {
      return res.status(404).send("Booklist not found");
    }

    let bookRepository = AppDataSource.getRepository(Book);

    let book = await bookRepository.findOne({
      where: { title: insertedBook.title },
    });

    // If book not found in database, insert a new book
    if (!book) {
      book = bookRepository.create(insertedBook);
      await bookRepository.save(book);
    }
  
    // Insert the relationship between book and booklist
    booklist.books.push(book);
    await bookListRepository.save(booklist);

    const existingBookListBook = booklist.books.find(
      (blb) => blb.title === book.title
    );

    if (existingBookListBook) {
      return res.status(400).send("Book already exists in booklist");
    }

    return res.send("Insert Successful");
  };

  deleteBookFromList = async (req, res) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ message: "Authentication token missing" });
    }
    verify(token);

    const { userId, booklistId, bookId } = req.params;
    let bookListRepository = AppDataSource.getRepository(BookList);

    const booklist = await bookListRepository.findOne({
      where: { id: booklistId },
      relations: {user:true, books:true}
    });

    if (!booklist || booklist.user.id !== Number(userId)) {
      return res.status(404).send("Booklist not found");
    }

    const foundBook = booklist.books.find((blb) => blb.id === Number(bookId));

    if (!foundBook) {
      return res.status(404).send("Book not found in booklist");
    }

    const index = booklist.books.indexOf(foundBook, 0);
    if (index > -1) {
      booklist.books.splice(index, 1);
    }

    await bookListRepository
    .createQueryBuilder()
    .relation(BookList, "books")
    .of(booklist.id)
    .remove(foundBook.id);
  

    return res.send("Book removed from booklist");
  };
}
