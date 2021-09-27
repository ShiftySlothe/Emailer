import passport from "passport";
import LocalStrategy from "passport-local";
import { findUserByUsername, validatePassword } from "./db";
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

passport.serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user.username);
});

passport.deserializeUser(function (req, id, done) {
  // deserialize the username back into user object
  const user = findUserByUsername(req, id);
  done(null, user);
});

passport.use(
  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      // Here you lookup the user in your DB and compare the password/hashed password
      const user = findUserByUsername(req, username);
      // Security-wise, if you hashed the password earlier, you must verify it
      // if (!user || await argon2.verify(user.password, password))
      if (!user || !validatePassword(user, password)) {
        done(null, null);
      } else {
        done(null, user);
      }
    }
  )
);

const User = mongoose.model("User");

// Inform passport of the oAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    // Set up logic for when strategy is triggered
    async (accessToken, refreshToken, profile, done) => {
      // Check if user exists
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      // Add user to the DB
      const user = await new User({ googleID: profile.id }).save();
      done(null, user);
    }
  )
);

export default passport;
