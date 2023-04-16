import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import * as jwt from 'jsonwebtoken';
import { Book } from 'shared-component/dist/entity/Book';

export const book = async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.bookId, 10);
  
    // Find the book in the database
    const bookRepository = AppDataSource.getRepository(Book);
    const book = await bookRepository.findOne({where: {id: bookId}});
    if (!book) {
      return res.status(404).send({ message: 'Book not found' });
    }
  
    // Send the reviews back to the client
    res.send(book);
  }