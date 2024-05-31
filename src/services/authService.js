import dotenv from 'dotenv';
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
dotenv.config();

export async function register({ username, password, email }) {
  const userExist = await User.findOne({ where: { email } });
  if (userExist) throw new Error("User already exists");

  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const user = new User({ username, password: hashedPassword, email });
  await user.save();
  return "User registered successfully";
}

export async function login({ email, password }) {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error("Email or password is wrong");

  const validPass = await compare(password, user.password);
  if (!validPass) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET
  );
  return token;
}

export async function getProfile(userId) {
  const user = await User.findByPk(userId);
  if (!user) throw new Error("User not found");
  else user.password=undefined;
  return user;
}

export default {register,login,getProfile};