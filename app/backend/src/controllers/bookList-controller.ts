import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import express from "express";
import { User } from "shared-component";
import { BookList } from "shared-component/dist/entity/BookList";
import { Book } from "shared-component/dist/entity/Book";
import { book } from "./book-controller";

export class BookListCalls {
  constructor(app: express.Application) {
    app.get("/users/:userId/booklists", this.getUserBookLists);
    app.get("/users/:userId/booklists/:booklistId", this.getBookList);
    app.post(
      "/users/:userId/booklists/:booklistId/books",
      this.insertBookIntoList
    );
    app.delete(
      "/users/:userId/booklists/:booklistId/books/:bookId",
      this.deleteBookFromList
    );
  }

  getUserBookLists = async (req: Request, res: Response) => {
    const { userId } = req.params;

    let userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    return res.send(user.bookLists);
  };

  getBookList = async (req: Request, res: Response) => {
    const { userId, booklistId } = req.params;
    let bookListRepository = AppDataSource.getRepository(BookList);

    const booklist = await bookListRepository.findOne(booklistId);

    if (!booklist || booklist.user.id !== Number(userId)) {
      return res.status(404).send("Booklist not found");
    }

    return res.send(booklist);
  };

  insertBookIntoList = async (req, res) => {
    const { userId, booklistId } = req.params;
    const insertedBook = req.body.book as Book;

    let bookListRepository = AppDataSource.getRepository(BookList);

    const booklist = await bookListRepository.findOne(booklistId);

    if (!booklist || booklist.user.id !== Number(userId)) {
      return res.status(404).send("Booklist not found");
    }

    let bookRepository = AppDataSource.getRepository(Book);

    let book = await bookRepository.findOne({
      where: { title: insertedBook.title },
    });

    if (!book) {
      await bookRepository.save(insertedBook);
    }

    const existingBookListBook = booklist.books.find(
      (blb) => blb.title === book.title
    );

    if (existingBookListBook) {
      return res.status(400).send("Book already exists in booklist");
    }

    return res.send("Insert Successful");
  };

  deleteBookFromList = async (req, res) => {
    const { userId, booklistId, bookId } = req.params;
    let bookListRepository = AppDataSource.getRepository(BookList);

    const booklist = await bookListRepository.findOne(booklistId);

    if (!booklist || booklist.user.id !== Number(userId)) {
      return res.status(404).send("Booklist not found");
    }

    const foundBook = booklist.books.find(
      (blb) => blb.id === Number(bookId)
    );

    if (!foundBook) {
      return res.status(404).send("Book not found in booklist");
    }

    const index = booklist.books.indexOf(foundBook, 0);
    if (index > -1) {
        booklist.books.splice(index, 1);
    }
    
    await AppDataSource.createQueryBuilder().update(BookList).where({
        id: booklist.id
    }).set({
        books: booklist.books
    });

    return res.send("Book removed from booklist");
  };
}
