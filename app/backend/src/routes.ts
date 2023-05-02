import express from "express";
import { login, register } from "./controllers/auth-controller";
import { BookListCalls } from "./controllers/bookList-controller";
import { BookCalls } from "./controllers/book-controller";

export function startExpress() {
  const app: express.Application = express();
  app.use(express.json());

  app.post("/login", login);
  app.post("/register", register);
  
  new BookCalls(app);
  new BookListCalls(app);

  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
  
}
