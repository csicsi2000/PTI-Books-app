import express from "express";
import { login, register, updateUser, deleteUser } from "./controllers/auth-controller";
import { BookListCalls } from "./controllers/bookList-controller";
import { BookCalls } from "./controllers/book-controller";

export function startExpress() {
  const app: express.Application = express();
  app.use(express.json());

   // Add the following middleware to set the CORS headers
   app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // replace with the domain of your web application
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });


  app.post("/login", login);
  app.post("/register", register);
  app.put("/users/:id", updateUser);
  app.delete("/users/:id", deleteUser);

  
  new BookCalls(app);
  new BookListCalls(app);

  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
  
}
