import express from 'express';
import { login, register } from './controllers/auth-controller';

const app = express();
app.use(express.json());

app.post('/login', login);
app.post('/register', register);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});