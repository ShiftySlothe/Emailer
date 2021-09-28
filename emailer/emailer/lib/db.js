import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import User from '../models/user';
import dbConnect from './dbConnect';

export async function createUser(
  req,
  { username, password, firstName, lastName, email }
) {
  await dbConnect();

  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');

  await new User({
    userID: uuidv4(),
    username,
    firstName,
    lastName,
    email,
    hash,
    salt,
  });
}

export async function findUserByUsername(req, username) {
  await dbConnect();
  // Here you find the user based on id/username in the database
  const user = await User.fineOne({ username });
  return user;
}

export async function updateUserByUsername(req, username, update) {
  await dbConnect();
  // Here you update the user based on id/username in the database
  const user = User.findOneAndUpdate(username, { username: update });
  return user;
}

export async function deleteUser(username) {
  await dbConnect();
  // Here you should delete the user in the database
  await User.deleteOne(username);
}

// Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}
