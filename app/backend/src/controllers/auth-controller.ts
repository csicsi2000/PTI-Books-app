import { Request, Response } from 'express';
import { AppDataSource } from "../data-source";
import * as jwt from 'jsonwebtoken';
import { User } from 'shared-component/dist/entity/User';
import { Session } from '../entity/Session';
import * as bcrypt from 'bcryptjs';


interface LoginRequestBody {
  email: string;
  password: string;
}

const secretKey = 'custom';

export const login = async (req: Request<{}, {}, LoginRequestBody>, res: Response) => {
  const { email, password } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email: email } });

  let result:boolean = bcrypt.compare(password, user.password)

  console.log(user.password);
  if (!user || !result) {
    console.warn("Login Fail! User:"+user.email );

    return res.status(401).json({ message: 'Invalid username or password' });
  }

  console.log("Login successful! User:"+user.email );

  // Generate a JWT token
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '12h' });

  // Save the session to the database
  const sessionRepository = AppDataSource.getRepository(Session);
  const session = new Session();
  session.token = token;
  session.user = user;
  await sessionRepository.save(session);

  let id = user.id;

  // Send the token back to the client
  res.send({ token,user });
};

export const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName, age } = req.body;

  console.log("Login attempt: " + email);

  // Check if the user already exists
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email: email } });
  if(user != null){
    console.log(user);
    return res.status(401).json({ message: 'User already exists!' });
  }
  const hashedPassword:string  = await bcrypt.hash(password,10);

  // Create a new user object
  const newUser = new User();
  newUser.password = hashedPassword;
  newUser.firstName = firstName;
  newUser.lastName = lastName;
  newUser.email = email;
  newUser.age = age;

  // Save the user to the database
  await userRepository.save(newUser);
  console.log(newUser);

  // Generate a JWT token
  const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '12h' });

  // Save the session to the database
  const sessionRepository = AppDataSource.getRepository(Session);
  const session = new Session();
  session.token = token;
  session.user = newUser;
  await sessionRepository.save(session);

  const createdUser = await userRepository.findOne({ where: { email: email } });

  // Send the token back to the client
  res.send({ token,createdUser });
}


export const deleteUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }
  let verifiedUserID = await verify(token);

  console.log(verifiedUserID + "  " +  userId)
  if(userId != verifiedUserID){
    return res.status(401).json({ message: "Unauthorized user deletion" });
  }

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  
  const sessionRepository = AppDataSource.getRepository(Session);
  await sessionRepository.delete({ user: user });
  // Delete the user from the database
  await userRepository.remove(user);

  res.json({ message: 'User deleted successfully' });
};


export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Authentication token missing" });
  }
  let verifiedUserID = await verify(token);
  console.log(verifiedUserID + "  " +  userId)

  if(userId != verifiedUserID){
    return res.status(401).json({ message: "Unauthorized user update" });
  }
  const { email, password, firstName, lastName, age } = req.body;

  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: userId } });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user object with new values
  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;

  if (password) {
    // If a new password is provided, hash it and update the user's password
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
  }

  // Save the updated user to the database
  await userRepository.save(user);

  res.json({ message: 'User updated successfully', user });
};


export const verify =async (token: string) => {
    try {
    const sessionRepository = AppDataSource.getRepository(Session);
    const session = await sessionRepository.findOne({where: {token: token}});
    if (!session || !session.token) {
      console.warn('Invalid session');
      return null;
    }
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
