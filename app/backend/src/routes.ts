import express from "express";
import { login, register } from "./controllers/auth-controller";
import { BookListCalls } from "./controllers/bookList-controller";
import { BookCalls } from "./controllers/book-controller";
import cors from "cors";

export function startExpress() {
  const app: express.Application = express();
  app.use(express.json());

  app.use(cors( {credentials: true,origin: true}));




  app.post("/login", login);
  app.post("/register", register);
  
   // Add the following middleware to set the CORS headers
  //  app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // replace with the domain of your web application
  //   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  //   next();
  // });


  new BookCalls(app);
  new BookListCalls(app);

  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
  
}
