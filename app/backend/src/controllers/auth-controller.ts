import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import * as jwt from 'jsonwebtoken';
import { User } from 'shared-component/dist/entity/User';


interface LoginRequestBody {
  email: string;
  password: string;
}

const secretKey = 'custom';

export const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email: email } });

  if (!user || user.password !== password) {
  console.warn("Login Fail! User:"+user.email );

    return res.status(401).json({ message: 'Invalid username or password' });
  }
console.log("Login successful! User:"+user.email );
  // TODO: generate a JWT token and return it in the response
  // Generate a JWT token
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '12h' });

  // Send the token back to the client
  res.send({ token });
};

export const register = async (req: Request, res: Response) => {
    const { email, password, firstName, lastName, age } = req.body;
  
    console.log("Login attempt: " + email);
    
    // Create a new user object
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email: email } });
    if(user != null){
      console.log(user);
      return res.status(401).json({ message: 'User already exists!' });
    }
    const newUser = new User();
    newUser.password = password;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    newUser.age = age;
  
    // Save the user to the database
    await userRepository.save(newUser);
  
    // Generate a JWT token
    const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '12h' });
  
    // Send the token back to the client
    res.send({ token });
}

export const verify =async (token: string) => {
    try {
        const decoded = jwt.verify(token, secretKey);
        const userId = decoded.userId;
        // Do something with the user ID
        console.log(`Hello user ${userId}`);
        return userId;
      } catch (err) {
        console.warn('Invalid token' );
        return null;
      }
}
