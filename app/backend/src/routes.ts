import express from "express";
import { login, register } from "./controllers/auth-controller";
import { book } from "./controllers/book-controller";

export function startExpress() {
  const app: express.Application = express();
  app.use(express.json());

  app.post("/login", login);
  app.post("/register", register);
  app.post("/book", book);
  app.listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
}
