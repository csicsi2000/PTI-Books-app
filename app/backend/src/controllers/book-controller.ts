import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import { Book } from 'shared-component/dist/entity/Book';
import { Review } from 'shared-component/dist/entity/Review';
import { verify } from './auth-controller';
import { User } from 'shared-component';
import express from "express";

export class BookCalls {
  constructor(app: express.Application) {
    app.get("/books/:bookId", getBook);
    app.post("/books/:userId/reviews", postReview);
    app.delete("/books/:bookId/reviews/:reviewId",deleteReview);
  }

}

  export const getBook = async (req: Request, res: Response) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }
  
    verify(token);
  
    const { bookId } = req.params;
  
    const bookRepository = AppDataSource.getRepository(Book);
    const book = await bookRepository.findOne({
      where: { primary_isbn13: bookId },
      relations: ["reviews","reviews.user","buy_links"]
    });
  
    if (!book) {
      return res.status(404).send('Book not found');
    }
  
    return res.send(book);
  };
  
  export const postReview = async (req: Request, res: Response) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }
  
    verify(token);
  
    const { userId } = req.params;
    const { book, comment, rating } = req.body;
    console.log(req.body);
    console.log("comment: " +comment)
    let reviewedBook: Book = book;
  
    const userRepository = AppDataSource.getRepository(User);
    const bookRepository = AppDataSource.getRepository(Book);
    const reviewRepository = AppDataSource.getRepository(Review);
  
    const user = await userRepository.findOne({where: {id: userId}});
    let existingBook = await bookRepository.findOne({where: {primary_isbn13: reviewedBook.primary_isbn13}});
  
    if (!user) {
      return res.status(404).send('User not found');
    }
  
    if(!existingBook){
      console.log("Book does not exist");
      existingBook = reviewedBook;
      bookRepository.save(existingBook);
    }

    const review = new Review();
    review.user = user;
    review.book = existingBook;
    review.comment = comment;
    review.rating = rating;
    review.date = new Date();
  
    console.log(review);
    await reviewRepository.save(review);
  
    return res.send('Review added successfully');
  };
  
  export const deleteReview = async (req: Request, res: Response) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
  
    if (!token) {
      return res.status(401).json({ message: 'Authentication token missing' });
    }
  
    verify(token);
  
    const { reviewId } = req.params;
  
    const reviewRepository = AppDataSource.getRepository(Review);
    const review = await reviewRepository.findOne({ where: {id:reviewId}});
  
    if (!review) {
      return res.status(404).send('Review not found');
    }
  
    await reviewRepository.remove(review);
  
    return res.send('Review deleted successfully');
  };
  