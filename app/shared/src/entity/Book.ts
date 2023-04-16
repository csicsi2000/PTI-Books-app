import { BuyLink } from "./BuyLink";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm";
import { Review } from "./Review";
import { BookList } from "./BookList";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => BookList, bookList => bookList.books)
  book_lists: BookList[];
  
  @OneToMany(() => Review, review => review.book)
  reviews: Review[];

  @OneToMany(() => BuyLink, buyLink => buyLink.book)
  buy_links: BuyLink[];
  
  @Column()
  age_group: string;

  @Column()
  amazon_product_url: string;

  @Column()
  article_chapter_link: string;

  @Column()
  author: string;

  @Column()
  book_image: string;

  @Column()
  book_image_width: number;

  @Column()
  book_image_height: number;

  @Column()
  book_review_link: string;

  @Column()
  contributor: string;

  @Column()
  contributor_note: string;

  @Column()
  created_date: Date;

  @Column()
  description: string;

  @Column()
  first_chapter_link: string;

  @Column()
  price: string;

  @Column()
  primary_isbn10: string;

  @Column()
  primary_isbn13: string;

  @Column()
  book_uri: string;

  @Column()
  publisher: string;

  @Column()
  rank: number;

  @Column()
  rank_last_week: number;

  @Column()
  sunday_review_link: string;

  @Column()
  title: string;

  @Column()
  updated_date: Date;

  @Column()
  weeks_on_list: number;

}
