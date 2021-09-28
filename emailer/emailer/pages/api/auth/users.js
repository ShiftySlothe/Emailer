import nextConnect from 'next-connect';
import auth from '@/middleware/auth';
import { createUser, findUserByUsername } from '@/lib/db';
import argon2 from 'argon2';
const handler = nextConnect();

handler.use(auth).post(async (req, res) => {
  const { username, password, firstName, lastName, email } = req.body;
  if (!username || !password || !firstName || !lastName || !email) {
    return res.status(400).send('Missing fields');
  }
  // Here you check if the username has already been used
  const usernameExisted = !!findUserByUsername(req, username);
  if (usernameExisted) {
    return res.status(409).send('The username has already been used');
  }
  // Security-wise, you must hash the password before saving it
  const hashedPass = await argon2.hash(password);
  const user = { username, password: hashedPass, firstName, lastName, email };
  try {
    await createUser(req, user);
  } catch {
    res.status(500).send('Failed to create user');
  }

  req.logIn(user, (err) => {
    if (err) throw err;
    // Log the signed up user in
    res.status(201).json({
      user,
    });
  });
});

export default handler;
