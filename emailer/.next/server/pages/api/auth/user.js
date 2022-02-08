"use strict";
(() => {
var exports = {};
exports.id = "pages/api/auth/user";
exports.ids = ["pages/api/auth/user"];
exports.modules = {

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLoginSession": () => (/* binding */ createLoginSession),
/* harmony export */   "getLoginSession": () => (/* binding */ getLoginSession)
/* harmony export */ });
/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/iron */ "@hapi/iron");
/* harmony import */ var _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_iron__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function createLoginSession(session, secret) {
  const createdAt = Date.now();

  const obj = _objectSpread(_objectSpread({}, session), {}, {
    createdAt
  });

  const token = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().seal(obj, secret, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));
  return token;
}
async function getLoginSession(token, secret) {
  const session = await _hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().unseal(token, secret, (_hapi_iron__WEBPACK_IMPORTED_MODULE_0___default().defaults));
  const expiresAt = session.createdAt + session.maxAge * 1000; // Validate the expiration date of the session

  if (session.maxAge && Date.now() > expiresAt) {
    throw new Error('Session expired');
  }

  return session;
}

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUser": () => (/* binding */ createUser),
/* harmony export */   "findUserByUsername": () => (/* binding */ findUserByUsername),
/* harmony export */   "updateUserByUsername": () => (/* binding */ updateUserByUsername),
/* harmony export */   "deleteUser": () => (/* binding */ deleteUser),
/* harmony export */   "validatePassword": () => (/* binding */ validatePassword)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./models/user.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_user__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dbConnect */ "./lib/dbConnect.js");




async function createUser(req, {
  username,
  password,
  firstName,
  lastName,
  email
}) {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_3__.default)();
  const salt = crypto__WEBPACK_IMPORTED_MODULE_0___default().randomBytes(16).toString('hex');
  const hash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  await new (_models_user__WEBPACK_IMPORTED_MODULE_2___default())({
    userID: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(),
    username,
    firstName,
    lastName,
    email,
    hash,
    salt
  });
}
async function findUserByUsername(req, username) {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_3__.default)(); // Here you find the user based on id/username in the database

  const user = await _models_user__WEBPACK_IMPORTED_MODULE_2___default().fineOne({
    username
  });
  return user;
}
async function updateUserByUsername(req, username, update) {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_3__.default)(); // Here you update the user based on id/username in the database

  const user = _models_user__WEBPACK_IMPORTED_MODULE_2___default().findOneAndUpdate(username, {
    username: update
  });
  return user;
}
async function deleteUser(username) {
  await (0,_dbConnect__WEBPACK_IMPORTED_MODULE_3__.default)(); // Here you should delete the user in the database

  await _models_user__WEBPACK_IMPORTED_MODULE_2___default().deleteOne(username);
} // Compare the password of an already fetched user (using `findUserByUsername`) and compare the
// password for a potential match

function validatePassword(user, inputPassword) {
  const inputHash = crypto__WEBPACK_IMPORTED_MODULE_0___default().pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512').toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
}

/***/ }),

/***/ "./lib/dbConnect.js":
/*!**************************!*\
  !*** ./lib/dbConnect.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null
  };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useFindAndModify: true,
      useCreateIndex: true
    };
    cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then(mongoose => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);

/***/ }),

/***/ "./lib/passport.js":
/*!*************************!*\
  !*** ./lib/passport.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport */ "passport");
/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport-local */ "passport-local");
/* harmony import */ var passport_local__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport_local__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ "./lib/db.js");




const GoogleStrategy = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20").Strategy;

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

passport__WEBPACK_IMPORTED_MODULE_0___default().serializeUser(function (user, done) {
  // serialize the username into session
  done(null, user.username);
});
passport__WEBPACK_IMPORTED_MODULE_0___default().deserializeUser(function (req, id, done) {
  // deserialize the username back into user object
  const user = (0,_db__WEBPACK_IMPORTED_MODULE_2__.findUserByUsername)(req, id);
  done(null, user);
});
passport__WEBPACK_IMPORTED_MODULE_0___default().use(new (passport_local__WEBPACK_IMPORTED_MODULE_1___default())({
  passReqToCallback: true
}, (req, username, password, done) => {
  // Here you lookup the user in your DB and compare the password/hashed password
  const user = (0,_db__WEBPACK_IMPORTED_MODULE_2__.findUserByUsername)(req, username); // Security-wise, if you hashed the password earlier, you must verify it
  // if (!user || await argon2.verify(user.password, password))

  if (!user || !(0,_db__WEBPACK_IMPORTED_MODULE_2__.validatePassword)(user, password)) {
    done(null, null);
  } else {
    done(null, user);
  }
}));
const User = mongoose.model('User'); // Inform passport of the oAuth strategy

passport__WEBPACK_IMPORTED_MODULE_0___default().use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback',
  proxy: true
}, // Set up logic for when strategy is triggered
async (accessToken, refreshToken, profile, done) => {
  // Check if user exists
  const existingUser = await User.findOne({
    googleID: profile.id
  });

  if (existingUser) {
    return done(null, existingUser);
  } // Add user to the DB


  const user = await new User({
    googleID: profile.id
  }).save();
  done(null, user);
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((passport__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./lib/session.js":
/*!************************!*\
  !*** ./lib/session.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ session)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./lib/auth.js");



function parseCookies(req) {
  var _req$headers;

  // For API Routes we don't need to parse the cookies.
  if (req.cookies) return req.cookies; // For pages we do need to parse the cookies.

  const cookie = (_req$headers = req.headers) === null || _req$headers === void 0 ? void 0 : _req$headers.cookie;
  return (0,cookie__WEBPACK_IMPORTED_MODULE_0__.parse)(cookie || '');
}

function session({
  name,
  secret,
  cookie: cookieOpts
}) {
  return async (req, res, next) => {
    const cookies = parseCookies(req);
    const token = cookies[name];
    let unsealed = {};

    if (token) {
      try {
        // the cookie needs to be unsealed using the password `secret`
        unsealed = await (0,_auth__WEBPACK_IMPORTED_MODULE_1__.getLoginSession)(token, secret);
      } catch (e) {// The cookie is invalid
      }
    }

    req.session = unsealed; // We are proxying res.end to commit the session cookie

    const oldEnd = res.end;

    res.end = async function resEndProxy(...args) {
      if (res.finished || res.writableEnded || res.headersSent) return;

      if (cookieOpts.maxAge) {
        req.session.maxAge = cookieOpts.maxAge;
      }

      const token = await (0,_auth__WEBPACK_IMPORTED_MODULE_1__.createLoginSession)(req.session, secret);
      res.setHeader('Set-Cookie', (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)(name, token, cookieOpts));
      oldEnd.apply(this, args);
    };

    next();
  };
}

/***/ }),

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/passport */ "./lib/passport.js");
/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/session */ "./lib/session.js");



const auth = next_connect__WEBPACK_IMPORTED_MODULE_0___default()().use((0,_lib_session__WEBPACK_IMPORTED_MODULE_2__.default)({
  name: "sess",
  secret: process.env.TOKEN_SECRET,
  cookie: {
    maxAge: 60 * 60 * 8,
    // 8 hours,
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "lax"
  }
})).use((req, res, next) => {
  // Initialize mocked database
  // Remove this after you add your own database
  req.session.users = req.session.users || [];
  next();
}).use(_lib_passport__WEBPACK_IMPORTED_MODULE_1__.default.initialize()).use(_lib_passport__WEBPACK_IMPORTED_MODULE_1__.default.session());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);

/***/ }),

/***/ "./models/user.js":
/*!************************!*\
  !*** ./models/user.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ "mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const UserSchema = new Schema({
  userID: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  hash: String,
  salt: String,
  credits: {
    type: Number,
    default: 0
  }
});
module.exports = _mongoose.default.models.User || _mongoose.default.model('User', UserSchema);

/***/ }),

/***/ "./pages/api/auth/user.js":
/*!********************************!*\
  !*** ./pages/api/auth/user.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/db */ "./lib/db.js");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__.default).get((req, res) => {
  // You do not generally want to return the whole user object
  // because it may contain sensitive field such as !!password!! Only return what needed
  // const { name, username, favoriteColor } = req.user
  // res.json({ user: { name, username, favoriteColor } })
  res.json({
    user: req.user
  });
}).post((req, res) => {
  const {
    username,
    password,
    name
  } = req.body;
  (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.createUser)(req, {
    username,
    password,
    name
  });
  res.status(200).json({
    success: true,
    message: 'created new user'
  });
}).use((req, res, next) => {
  // handlers after this (PUT, DELETE) all require an authenticated user
  // This middleware to check if user is authenticated before continuing
  if (!req.user) {
    res.status(401).send('unauthenticated');
  } else {
    next();
  }
}).put((req, res) => {
  const {
    name
  } = req.body;
  const user = (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.updateUserByUsername)(req, req.user.username, {
    name
  });
  res.json({
    user
  });
}).delete((req, res) => {
  (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.deleteUser)(req.user.username);
  req.logOut();
  res.status(204).end();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "@hapi/iron":
/*!*****************************!*\
  !*** external "@hapi/iron" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@hapi/iron");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/user.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFKLENBQVM7QUFBRS9GLElBQUFBO0FBQUYsR0FBVDtBQUNELENBM0JILEVBNEJHdUcsTUE1QkgsQ0E0QlUsQ0FBQ3BILEdBQUQsRUFBTTBFLEdBQU4sS0FBYztBQUNwQnhELEVBQUFBLG1EQUFVLENBQUNsQixHQUFHLENBQUNhLElBQUosQ0FBU1osUUFBVixDQUFWO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ3FILE1BQUo7QUFDQTNDLEVBQUFBLEdBQUcsQ0FBQ3FDLE1BQUosQ0FBVyxHQUFYLEVBQWdCaEMsR0FBaEI7QUFDRCxDQWhDSDtBQWtDQSxpRUFBZTJCLE9BQWY7Ozs7Ozs7Ozs7QUN4Q0E7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1haWxlci8uL2xpYi9hdXRoLmpzIiwid2VicGFjazovL2VtYWlsZXIvLi9saWIvZGIuanMiLCJ3ZWJwYWNrOi8vZW1haWxlci8uL2xpYi9kYkNvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vZW1haWxlci8uL2xpYi9wYXNzcG9ydC5qcyIsIndlYnBhY2s6Ly9lbWFpbGVyLy4vbGliL3Nlc3Npb24uanMiLCJ3ZWJwYWNrOi8vZW1haWxlci8uL21pZGRsZXdhcmUvYXV0aC5qcyIsIndlYnBhY2s6Ly9lbWFpbGVyLy4vbW9kZWxzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZW1haWxlci8uL3BhZ2VzL2FwaS9hdXRoL3VzZXIuanMiLCJ3ZWJwYWNrOi8vZW1haWxlci9leHRlcm5hbCBcIkBoYXBpL2lyb25cIiIsIndlYnBhY2s6Ly9lbWFpbGVyL2V4dGVybmFsIFwiY29va2llXCIiLCJ3ZWJwYWNrOi8vZW1haWxlci9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovL2VtYWlsZXIvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2VtYWlsZXIvZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly9lbWFpbGVyL2V4dGVybmFsIFwicGFzc3BvcnRcIiIsIndlYnBhY2s6Ly9lbWFpbGVyL2V4dGVybmFsIFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjBcIiIsIndlYnBhY2s6Ly9lbWFpbGVyL2V4dGVybmFsIFwicGFzc3BvcnQtbG9jYWxcIiIsIndlYnBhY2s6Ly9lbWFpbGVyL2V4dGVybmFsIFwidXVpZFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJcm9uIGZyb20gJ0BoYXBpL2lyb24nXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlTG9naW5TZXNzaW9uKHNlc3Npb24sIHNlY3JldCkge1xyXG4gIGNvbnN0IGNyZWF0ZWRBdCA9IERhdGUubm93KClcclxuICBjb25zdCBvYmogPSB7IC4uLnNlc3Npb24sIGNyZWF0ZWRBdCB9XHJcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBJcm9uLnNlYWwob2JqLCBzZWNyZXQsIElyb24uZGVmYXVsdHMpXHJcblxyXG4gIHJldHVybiB0b2tlblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9naW5TZXNzaW9uKHRva2VuLCBzZWNyZXQpIHtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgSXJvbi51bnNlYWwodG9rZW4sIHNlY3JldCwgSXJvbi5kZWZhdWx0cylcclxuICBjb25zdCBleHBpcmVzQXQgPSBzZXNzaW9uLmNyZWF0ZWRBdCArIHNlc3Npb24ubWF4QWdlICogMTAwMFxyXG5cclxuICAvLyBWYWxpZGF0ZSB0aGUgZXhwaXJhdGlvbiBkYXRlIG9mIHRoZSBzZXNzaW9uXHJcbiAgaWYgKHNlc3Npb24ubWF4QWdlICYmIERhdGUubm93KCkgPiBleHBpcmVzQXQpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignU2Vzc2lvbiBleHBpcmVkJylcclxuICB9XHJcblxyXG4gIHJldHVybiBzZXNzaW9uXHJcbn1cclxuIiwiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL3VzZXInO1xyXG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJy4vZGJDb25uZWN0JztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyKFxyXG4gIHJlcSxcclxuICB7IHVzZXJuYW1lLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwgfVxyXG4pIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuXHJcbiAgY29uc3Qgc2FsdCA9IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpO1xyXG4gIGNvbnN0IGhhc2ggPSBjcnlwdG9cclxuICAgIC5wYmtkZjJTeW5jKHBhc3N3b3JkLCBzYWx0LCAxMDAwLCA2NCwgJ3NoYTUxMicpXHJcbiAgICAudG9TdHJpbmcoJ2hleCcpO1xyXG5cclxuICBhd2FpdCBuZXcgVXNlcih7XHJcbiAgICB1c2VySUQ6IHV1aWR2NCgpLFxyXG4gICAgdXNlcm5hbWUsXHJcbiAgICBmaXJzdE5hbWUsXHJcbiAgICBsYXN0TmFtZSxcclxuICAgIGVtYWlsLFxyXG4gICAgaGFzaCxcclxuICAgIHNhbHQsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmaW5kVXNlckJ5VXNlcm5hbWUocmVxLCB1c2VybmFtZSkge1xyXG4gIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gIC8vIEhlcmUgeW91IGZpbmQgdGhlIHVzZXIgYmFzZWQgb24gaWQvdXNlcm5hbWUgaW4gdGhlIGRhdGFiYXNlXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZU9uZSh7IHVzZXJuYW1lIH0pO1xyXG4gIHJldHVybiB1c2VyO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlckJ5VXNlcm5hbWUocmVxLCB1c2VybmFtZSwgdXBkYXRlKSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgLy8gSGVyZSB5b3UgdXBkYXRlIHRoZSB1c2VyIGJhc2VkIG9uIGlkL3VzZXJuYW1lIGluIHRoZSBkYXRhYmFzZVxyXG4gIGNvbnN0IHVzZXIgPSBVc2VyLmZpbmRPbmVBbmRVcGRhdGUodXNlcm5hbWUsIHsgdXNlcm5hbWU6IHVwZGF0ZSB9KTtcclxuICByZXR1cm4gdXNlcjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcm5hbWUpIHtcclxuICBhd2FpdCBkYkNvbm5lY3QoKTtcclxuICAvLyBIZXJlIHlvdSBzaG91bGQgZGVsZXRlIHRoZSB1c2VyIGluIHRoZSBkYXRhYmFzZVxyXG4gIGF3YWl0IFVzZXIuZGVsZXRlT25lKHVzZXJuYW1lKTtcclxufVxyXG5cclxuLy8gQ29tcGFyZSB0aGUgcGFzc3dvcmQgb2YgYW4gYWxyZWFkeSBmZXRjaGVkIHVzZXIgKHVzaW5nIGBmaW5kVXNlckJ5VXNlcm5hbWVgKSBhbmQgY29tcGFyZSB0aGVcclxuLy8gcGFzc3dvcmQgZm9yIGEgcG90ZW50aWFsIG1hdGNoXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHVzZXIsIGlucHV0UGFzc3dvcmQpIHtcclxuICBjb25zdCBpbnB1dEhhc2ggPSBjcnlwdG9cclxuICAgIC5wYmtkZjJTeW5jKGlucHV0UGFzc3dvcmQsIHVzZXIuc2FsdCwgMTAwMCwgNjQsICdzaGE1MTInKVxyXG4gICAgLnRvU3RyaW5nKCdoZXgnKTtcclxuICBjb25zdCBwYXNzd29yZHNNYXRjaCA9IHVzZXIuaGFzaCA9PT0gaW5wdXRIYXNoO1xyXG4gIHJldHVybiBwYXNzd29yZHNNYXRjaDtcclxufVxyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcclxuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XHJcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXHJcbiAqL1xyXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xyXG5cclxuaWYgKCFjYWNoZWQpIHtcclxuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xyXG4gIGlmIChjYWNoZWQuY29ubikge1xyXG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xyXG4gICAgY29uc3Qgb3B0cyA9IHtcclxuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUsXHJcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcclxuICAgICAgYnVmZmVyTWF4RW50cmllczogMCxcclxuICAgICAgdXNlRmluZEFuZE1vZGlmeTogdHJ1ZSxcclxuICAgICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiIsImltcG9ydCBwYXNzcG9ydCBmcm9tICdwYXNzcG9ydCc7XHJcbmltcG9ydCBMb2NhbFN0cmF0ZWd5IGZyb20gJ3Bhc3Nwb3J0LWxvY2FsJztcclxuaW1wb3J0IHsgZmluZFVzZXJCeVVzZXJuYW1lLCB2YWxpZGF0ZVBhc3N3b3JkIH0gZnJvbSAnLi9kYic7XHJcbmNvbnN0IEdvb2dsZVN0cmF0ZWd5ID0gcmVxdWlyZSgncGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjAnKS5TdHJhdGVneTtcclxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5cclxucGFzc3BvcnQuc2VyaWFsaXplVXNlcihmdW5jdGlvbiAodXNlciwgZG9uZSkge1xyXG4gIC8vIHNlcmlhbGl6ZSB0aGUgdXNlcm5hbWUgaW50byBzZXNzaW9uXHJcbiAgZG9uZShudWxsLCB1c2VyLnVzZXJuYW1lKTtcclxufSk7XHJcblxyXG5wYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoZnVuY3Rpb24gKHJlcSwgaWQsIGRvbmUpIHtcclxuICAvLyBkZXNlcmlhbGl6ZSB0aGUgdXNlcm5hbWUgYmFjayBpbnRvIHVzZXIgb2JqZWN0XHJcbiAgY29uc3QgdXNlciA9IGZpbmRVc2VyQnlVc2VybmFtZShyZXEsIGlkKTtcclxuICBkb25lKG51bGwsIHVzZXIpO1xyXG59KTtcclxuXHJcbnBhc3Nwb3J0LnVzZShcclxuICBuZXcgTG9jYWxTdHJhdGVneShcclxuICAgIHsgcGFzc1JlcVRvQ2FsbGJhY2s6IHRydWUgfSxcclxuICAgIChyZXEsIHVzZXJuYW1lLCBwYXNzd29yZCwgZG9uZSkgPT4ge1xyXG4gICAgICAvLyBIZXJlIHlvdSBsb29rdXAgdGhlIHVzZXIgaW4geW91ciBEQiBhbmQgY29tcGFyZSB0aGUgcGFzc3dvcmQvaGFzaGVkIHBhc3N3b3JkXHJcbiAgICAgIGNvbnN0IHVzZXIgPSBmaW5kVXNlckJ5VXNlcm5hbWUocmVxLCB1c2VybmFtZSk7XHJcbiAgICAgIC8vIFNlY3VyaXR5LXdpc2UsIGlmIHlvdSBoYXNoZWQgdGhlIHBhc3N3b3JkIGVhcmxpZXIsIHlvdSBtdXN0IHZlcmlmeSBpdFxyXG4gICAgICAvLyBpZiAoIXVzZXIgfHwgYXdhaXQgYXJnb24yLnZlcmlmeSh1c2VyLnBhc3N3b3JkLCBwYXNzd29yZCkpXHJcbiAgICAgIGlmICghdXNlciB8fCAhdmFsaWRhdGVQYXNzd29yZCh1c2VyLCBwYXNzd29yZCkpIHtcclxuICAgICAgICBkb25lKG51bGwsIG51bGwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApXHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInKTtcclxuXHJcbi8vIEluZm9ybSBwYXNzcG9ydCBvZiB0aGUgb0F1dGggc3RyYXRlZ3lcclxucGFzc3BvcnQudXNlKFxyXG4gIG5ldyBHb29nbGVTdHJhdGVneShcclxuICAgIHtcclxuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXHJcbiAgICAgIGNhbGxiYWNrVVJMOiAnL2F1dGgvZ29vZ2xlL2NhbGxiYWNrJyxcclxuICAgICAgcHJveHk6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgLy8gU2V0IHVwIGxvZ2ljIGZvciB3aGVuIHN0cmF0ZWd5IGlzIHRyaWdnZXJlZFxyXG4gICAgYXN5bmMgKGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGRvbmUpID0+IHtcclxuICAgICAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHNcclxuICAgICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZ29vZ2xlSUQ6IHByb2ZpbGUuaWQgfSk7XHJcbiAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICByZXR1cm4gZG9uZShudWxsLCBleGlzdGluZ1VzZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIEFkZCB1c2VyIHRvIHRoZSBEQlxyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgbmV3IFVzZXIoeyBnb29nbGVJRDogcHJvZmlsZS5pZCB9KS5zYXZlKCk7XHJcbiAgICAgIGRvbmUobnVsbCwgdXNlcik7XHJcbiAgICB9XHJcbiAgKVxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFzc3BvcnQ7XHJcbiIsImltcG9ydCB7IHBhcnNlLCBzZXJpYWxpemUgfSBmcm9tICdjb29raWUnXHJcbmltcG9ydCB7IGNyZWF0ZUxvZ2luU2Vzc2lvbiwgZ2V0TG9naW5TZXNzaW9uIH0gZnJvbSAnLi9hdXRoJ1xyXG5cclxuZnVuY3Rpb24gcGFyc2VDb29raWVzKHJlcSkge1xyXG4gIC8vIEZvciBBUEkgUm91dGVzIHdlIGRvbid0IG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXHJcbiAgaWYgKHJlcS5jb29raWVzKSByZXR1cm4gcmVxLmNvb2tpZXNcclxuXHJcbiAgLy8gRm9yIHBhZ2VzIHdlIGRvIG5lZWQgdG8gcGFyc2UgdGhlIGNvb2tpZXMuXHJcbiAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnM/LmNvb2tpZVxyXG4gIHJldHVybiBwYXJzZShjb29raWUgfHwgJycpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlc3Npb24oeyBuYW1lLCBzZWNyZXQsIGNvb2tpZTogY29va2llT3B0cyB9KSB7XHJcbiAgcmV0dXJuIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhyZXEpXHJcbiAgICBjb25zdCB0b2tlbiA9IGNvb2tpZXNbbmFtZV1cclxuICAgIGxldCB1bnNlYWxlZCA9IHt9XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gdGhlIGNvb2tpZSBuZWVkcyB0byBiZSB1bnNlYWxlZCB1c2luZyB0aGUgcGFzc3dvcmQgYHNlY3JldGBcclxuICAgICAgICB1bnNlYWxlZCA9IGF3YWl0IGdldExvZ2luU2Vzc2lvbih0b2tlbiwgc2VjcmV0KVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gVGhlIGNvb2tpZSBpcyBpbnZhbGlkXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXEuc2Vzc2lvbiA9IHVuc2VhbGVkXHJcblxyXG4gICAgLy8gV2UgYXJlIHByb3h5aW5nIHJlcy5lbmQgdG8gY29tbWl0IHRoZSBzZXNzaW9uIGNvb2tpZVxyXG4gICAgY29uc3Qgb2xkRW5kID0gcmVzLmVuZFxyXG4gICAgcmVzLmVuZCA9IGFzeW5jIGZ1bmN0aW9uIHJlc0VuZFByb3h5KC4uLmFyZ3MpIHtcclxuICAgICAgaWYgKHJlcy5maW5pc2hlZCB8fCByZXMud3JpdGFibGVFbmRlZCB8fCByZXMuaGVhZGVyc1NlbnQpIHJldHVyblxyXG4gICAgICBpZiAoY29va2llT3B0cy5tYXhBZ2UpIHtcclxuICAgICAgICByZXEuc2Vzc2lvbi5tYXhBZ2UgPSBjb29raWVPcHRzLm1heEFnZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGNyZWF0ZUxvZ2luU2Vzc2lvbihyZXEuc2Vzc2lvbiwgc2VjcmV0KVxyXG5cclxuICAgICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIHNlcmlhbGl6ZShuYW1lLCB0b2tlbiwgY29va2llT3B0cykpXHJcbiAgICAgIG9sZEVuZC5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xyXG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcIi4uL2xpYi9wYXNzcG9ydFwiO1xyXG5pbXBvcnQgc2Vzc2lvbiBmcm9tIFwiLi4vbGliL3Nlc3Npb25cIjtcclxuXHJcbmNvbnN0IGF1dGggPSBuZXh0Q29ubmVjdCgpXHJcbiAgLnVzZShcclxuICAgIHNlc3Npb24oe1xyXG4gICAgICBuYW1lOiBcInNlc3NcIixcclxuICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQsXHJcbiAgICAgIGNvb2tpZToge1xyXG4gICAgICAgIG1heEFnZTogNjAgKiA2MCAqIDgsIC8vIDggaG91cnMsXHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXHJcbiAgICAgICAgcGF0aDogXCIvXCIsXHJcbiAgICAgICAgc2FtZVNpdGU6IFwibGF4XCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIClcclxuICAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBtb2NrZWQgZGF0YWJhc2VcclxuICAgIC8vIFJlbW92ZSB0aGlzIGFmdGVyIHlvdSBhZGQgeW91ciBvd24gZGF0YWJhc2VcclxuICAgIHJlcS5zZXNzaW9uLnVzZXJzID0gcmVxLnNlc3Npb24udXNlcnMgfHwgW107XHJcbiAgICBuZXh0KCk7XHJcbiAgfSlcclxuICAudXNlKHBhc3Nwb3J0LmluaXRpYWxpemUoKSlcclxuICAudXNlKHBhc3Nwb3J0LnNlc3Npb24oKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoO1xyXG4iLCJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgdXNlcklEOiBTdHJpbmcsXHJcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXHJcbiAgdXNlcm5hbWU6IFN0cmluZyxcclxuICBmaXJzdE5hbWU6IFN0cmluZyxcclxuICBsYXN0TmFtZTogU3RyaW5nLFxyXG4gIGVtYWlsOiBTdHJpbmcsXHJcbiAgaGFzaDogU3RyaW5nLFxyXG4gIHNhbHQ6IFN0cmluZyxcclxuICBjcmVkaXRzOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG59KTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBVc2VyU2NoZW1hKTtcclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL21pZGRsZXdhcmUvYXV0aCc7XHJcbmltcG9ydCB7IGRlbGV0ZVVzZXIsIGNyZWF0ZVVzZXIsIHVwZGF0ZVVzZXJCeVVzZXJuYW1lIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RiJztcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpO1xyXG5cclxuaGFuZGxlclxyXG4gIC51c2UoYXV0aClcclxuICAuZ2V0KChyZXEsIHJlcykgPT4ge1xyXG4gICAgLy8gWW91IGRvIG5vdCBnZW5lcmFsbHkgd2FudCB0byByZXR1cm4gdGhlIHdob2xlIHVzZXIgb2JqZWN0XHJcbiAgICAvLyBiZWNhdXNlIGl0IG1heSBjb250YWluIHNlbnNpdGl2ZSBmaWVsZCBzdWNoIGFzICEhcGFzc3dvcmQhISBPbmx5IHJldHVybiB3aGF0IG5lZWRlZFxyXG4gICAgLy8gY29uc3QgeyBuYW1lLCB1c2VybmFtZSwgZmF2b3JpdGVDb2xvciB9ID0gcmVxLnVzZXJcclxuICAgIC8vIHJlcy5qc29uKHsgdXNlcjogeyBuYW1lLCB1c2VybmFtZSwgZmF2b3JpdGVDb2xvciB9IH0pXHJcbiAgICByZXMuanNvbih7IHVzZXI6IHJlcS51c2VyIH0pO1xyXG4gIH0pXHJcbiAgLnBvc3QoKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgbmFtZSB9ID0gcmVxLmJvZHk7XHJcbiAgICBjcmVhdGVVc2VyKHJlcSwgeyB1c2VybmFtZSwgcGFzc3dvcmQsIG5hbWUgfSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdjcmVhdGVkIG5ldyB1c2VyJyB9KTtcclxuICB9KVxyXG4gIC51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgICAvLyBoYW5kbGVycyBhZnRlciB0aGlzIChQVVQsIERFTEVURSkgYWxsIHJlcXVpcmUgYW4gYXV0aGVudGljYXRlZCB1c2VyXHJcbiAgICAvLyBUaGlzIG1pZGRsZXdhcmUgdG8gY2hlY2sgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkIGJlZm9yZSBjb250aW51aW5nXHJcbiAgICBpZiAoIXJlcS51c2VyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCd1bmF1dGhlbnRpY2F0ZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5leHQoKTtcclxuICAgIH1cclxuICB9KVxyXG4gIC5wdXQoKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUgfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgdXNlciA9IHVwZGF0ZVVzZXJCeVVzZXJuYW1lKHJlcSwgcmVxLnVzZXIudXNlcm5hbWUsIHsgbmFtZSB9KTtcclxuICAgIHJlcy5qc29uKHsgdXNlciB9KTtcclxuICB9KVxyXG4gIC5kZWxldGUoKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBkZWxldGVVc2VyKHJlcS51c2VyLnVzZXJuYW1lKTtcclxuICAgIHJlcS5sb2dPdXQoKTtcclxuICAgIHJlcy5zdGF0dXMoMjA0KS5lbmQoKTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoYXBpL2lyb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtbG9jYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiXSwibmFtZXMiOlsiSXJvbiIsImNyZWF0ZUxvZ2luU2Vzc2lvbiIsInNlc3Npb24iLCJzZWNyZXQiLCJjcmVhdGVkQXQiLCJEYXRlIiwibm93Iiwib2JqIiwidG9rZW4iLCJzZWFsIiwiZGVmYXVsdHMiLCJnZXRMb2dpblNlc3Npb24iLCJ1bnNlYWwiLCJleHBpcmVzQXQiLCJtYXhBZ2UiLCJFcnJvciIsImNyeXB0byIsInY0IiwidXVpZHY0IiwiVXNlciIsImRiQ29ubmVjdCIsImNyZWF0ZVVzZXIiLCJyZXEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInNhbHQiLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwiaGFzaCIsInBia2RmMlN5bmMiLCJ1c2VySUQiLCJmaW5kVXNlckJ5VXNlcm5hbWUiLCJ1c2VyIiwiZmluZU9uZSIsInVwZGF0ZVVzZXJCeVVzZXJuYW1lIiwidXBkYXRlIiwiZmluZE9uZUFuZFVwZGF0ZSIsImRlbGV0ZVVzZXIiLCJkZWxldGVPbmUiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwiaW5wdXRQYXNzd29yZCIsImlucHV0SGFzaCIsInBhc3N3b3Jkc01hdGNoIiwibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJidWZmZXJDb21tYW5kcyIsImJ1ZmZlck1heEVudHJpZXMiLCJ1c2VGaW5kQW5kTW9kaWZ5IiwidXNlQ3JlYXRlSW5kZXgiLCJjb25uZWN0IiwidGhlbiIsInBhc3Nwb3J0IiwiTG9jYWxTdHJhdGVneSIsIkdvb2dsZVN0cmF0ZWd5IiwicmVxdWlyZSIsIlN0cmF0ZWd5Iiwic2VyaWFsaXplVXNlciIsImRvbmUiLCJkZXNlcmlhbGl6ZVVzZXIiLCJpZCIsInVzZSIsInBhc3NSZXFUb0NhbGxiYWNrIiwibW9kZWwiLCJjbGllbnRJRCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImNhbGxiYWNrVVJMIiwicHJveHkiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hUb2tlbiIsInByb2ZpbGUiLCJleGlzdGluZ1VzZXIiLCJmaW5kT25lIiwiZ29vZ2xlSUQiLCJzYXZlIiwicGFyc2UiLCJzZXJpYWxpemUiLCJwYXJzZUNvb2tpZXMiLCJjb29raWVzIiwiY29va2llIiwiaGVhZGVycyIsIm5hbWUiLCJjb29raWVPcHRzIiwicmVzIiwibmV4dCIsInVuc2VhbGVkIiwiZSIsIm9sZEVuZCIsImVuZCIsInJlc0VuZFByb3h5IiwiYXJncyIsImZpbmlzaGVkIiwid3JpdGFibGVFbmRlZCIsImhlYWRlcnNTZW50Iiwic2V0SGVhZGVyIiwiYXBwbHkiLCJuZXh0Q29ubmVjdCIsImF1dGgiLCJUT0tFTl9TRUNSRVQiLCJodHRwT25seSIsInNlY3VyZSIsInBhdGgiLCJzYW1lU2l0ZSIsInVzZXJzIiwiaW5pdGlhbGl6ZSIsIlNjaGVtYSIsIlVzZXJTY2hlbWEiLCJTdHJpbmciLCJ0eXBlIiwiZGVmYXVsdCIsImNyZWRpdHMiLCJOdW1iZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiaGFuZGxlciIsImdldCIsImpzb24iLCJwb3N0IiwiYm9keSIsInN0YXR1cyIsInN1Y2Nlc3MiLCJtZXNzYWdlIiwic2VuZCIsInB1dCIsImRlbGV0ZSIsImxvZ091dCJdLCJzb3VyY2VSb290IjoiIn0=