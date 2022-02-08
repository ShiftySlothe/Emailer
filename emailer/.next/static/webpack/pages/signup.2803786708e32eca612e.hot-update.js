"use strict";
self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./page-components/Signup/SignupForm.js":
/*!**********************************************!*\
  !*** ./page-components/Signup/SignupForm.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignupForm; }
/* harmony export */ });
/* harmony import */ var C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/hooks */ "./lib/hooks.jsx");
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/layout */ "./node_modules/@chakra-ui/layout/dist/esm/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\dev\\Polish\\emailer\\emailer-1\\emailer\\page-components\\Signup\\SignupForm.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var formValdiationSchema = yup__WEBPACK_IMPORTED_MODULE_9__.object({
  firstName: yup__WEBPACK_IMPORTED_MODULE_9__.string().max(15, 'Must be 20 characters or less.').required('Required.'),
  lastName: yup__WEBPACK_IMPORTED_MODULE_9__.string().max(20, 'Must be 20 characters or less.').required('Required.'),
  email: yup__WEBPACK_IMPORTED_MODULE_9__.string().email('Invalid email address.').required('Required.'),
  username: yup__WEBPACK_IMPORTED_MODULE_9__.string().max(20, 'Must be 20 characters or less.').required('Required.'),
  password: yup__WEBPACK_IMPORTED_MODULE_9__.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#.?!@$%^&*-]).{8,}$/, 'Must contain lowercase, uppercase, a number and a special character.').required('Required.'),
  rpassword: yup__WEBPACK_IMPORTED_MODULE_9__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_9__.ref('password'), null], 'Passwords must match.')
});
var formInitialValues = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  rpassword: ''
};
function SignupForm() {
  _s();

  var _this = this;

  var _useUser = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_7__.useUser)(),
      _useUser2 = (0,C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useUser, 2),
      user = _useUser2[0],
      mutate = _useUser2[1].mutate;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      errorMsg = _useState[0],
      setErrorMsg = _useState[1];

  function onSubmit(_x, _x2) {
    return _onSubmit.apply(this, arguments);
  }

  function _onSubmit() {
    _onSubmit = (0,C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(values, _ref) {
      var setSubmitting, res, userObj;
      return C_dev_Polish_emailer_emailer_1_emailer_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSubmitting = _ref.setSubmitting;
              _context.next = 3;
              return fetch('/api/users', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
              });

            case 3:
              res = _context.sent;

              if (!(res.status === 201)) {
                _context.next = 11;
                break;
              }

              _context.next = 7;
              return res.json();

            case 7:
              userObj = _context.sent;
              // set user to useSWR state
              mutate(userObj);
              _context.next = 16;
              break;

            case 11:
              _context.t0 = setErrorMsg;
              _context.next = 14;
              return res.text();

            case 14:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 16:
              setSubmitting(false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSubmit.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    // redirect to home if user is authenticated
    if (user) next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
  }, [user]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [errorMsg && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("p", {
      className: "error",
      children: errorMsg
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 20
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Formik, {
      initialValues: formInitialValues,
      validationSchema: formValdiationSchema,
      onSubmit: onSubmit,
      children: function children(formik) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Form, {
          onSubmit: formik.handleSubmit,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_11__.Box, {
            width: "66vw",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "firstName",
              children: function children(_ref2) {
                var field = _ref2.field,
                    form = _ref2.form;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
                  isRequired: true,
                  isInvalid: form.errors.firstName && form.touched.firstName,
                  mt: 2,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormLabel, {
                    htmlFor: "firstName",
                    children: "First name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Input, _objectSpread(_objectSpread({}, field), {}, {
                    id: "firstName",
                    placeholder: "First name"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 95,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormErrorMessage, {
                    children: form.errors.firstName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "lastName",
              children: function children(_ref3) {
                var field = _ref3.field,
                    form = _ref3.form;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
                  isRequired: true,
                  isInvalid: form.errors.lastName && form.touched.lastName,
                  mt: 2,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormLabel, {
                    htmlFor: "lastName",
                    children: "Last name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Input, _objectSpread(_objectSpread({}, field), {}, {
                    id: "lastName",
                    placeholder: "Last name"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormErrorMessage, {
                    children: form.errors.lastName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "email",
              children: function children(_ref4) {
                var field = _ref4.field,
                    form = _ref4.form;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
                  isRequired: true,
                  isInvalid: form.errors.email && form.touched.email,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormLabel, {
                    htmlFor: "email",
                    children: "Email address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Input, _objectSpread(_objectSpread({}, field), {}, {
                    id: "email",
                    placeholder: "e@mail.io"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormHelperText, {
                    children: "We'll never share your email."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormErrorMessage, {
                    children: form.errors.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "username",
              children: function children(_ref5) {
                var field = _ref5.field,
                    form = _ref5.form;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
                  isRequired: true,
                  isInvalid: form.errors.username && form.touched.username,
                  mt: 2,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormLabel, {
                    htmlFor: "username",
                    children: "Username"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 135,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Input, _objectSpread(_objectSpread({}, field), {}, {
                    id: "username",
                    placeholder: "Username"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormErrorMessage, {
                    children: form.errors.username
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "password",
              children: function children(_ref6) {
                var field = _ref6.field,
                    form = _ref6.form;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
                  isRequired: true,
                  isInvalid: form.errors.password && form.touched.password,
                  mt: 2,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormLabel, {
                    htmlFor: "password",
                    children: "Password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Input, _objectSpread(_objectSpread({}, field), {}, {
                    id: "password",
                    placeholder: "Password"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormErrorMessage, {
                    children: form.errors.password
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 150,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_8__.Field, {
              name: "rpassword",
              children: function children(_ref7) {
                var field = _ref7.field,
                    form = _ref7.form;
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormControl, {
                  isRequired: true,
                  isInvalid: form.errors.rpassword && form.touched.rpassword,
                  mt: 2,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormLabel, {
                    htmlFor: "rpassword",
                    children: "Repeat password"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Input, _objectSpread(_objectSpread({}, field), {}, {
                    id: "rpassword",
                    placeholder: "Password"
                  }), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.FormErrorMessage, {
                    children: form.errors.rpassword
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_11__.Flex, {
              flexDirection: "column",
              mt: 3,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.Button, {
                type: "submit",
                mb: 3,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_11__.Center, {
                  children: "Sign up"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                href: "/login",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_11__.Center, {
                  children: "I already have an account"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(SignupForm, "i1Cem6MqZbtOUnIa8oYR8FIMclY=", false, function () {
  return [_lib_hooks__WEBPACK_IMPORTED_MODULE_7__.useUser];
});

_c = SignupForm;

var _c;

$RefreshReg$(_c, "SignupForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjI4MDM3ODY3MDhlMzJlY2E2MTJlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBU0EsSUFBTWtCLG9CQUFvQixHQUFHUCx1Q0FBQSxDQUFXO0FBQ3RDUyxFQUFBQSxTQUFTLEVBQUVULHVDQUFBLEdBQ1JXLEdBRFEsQ0FDSixFQURJLEVBQ0EsZ0NBREEsRUFFUkMsUUFGUSxDQUVDLFdBRkQsQ0FEMkI7QUFJdENDLEVBQUFBLFFBQVEsRUFBRWIsdUNBQUEsR0FDUFcsR0FETyxDQUNILEVBREcsRUFDQyxnQ0FERCxFQUVQQyxRQUZPLENBRUUsV0FGRixDQUo0QjtBQU90Q0UsRUFBQUEsS0FBSyxFQUFFZCx1Q0FBQSxHQUFhYyxLQUFiLENBQW1CLHdCQUFuQixFQUE2Q0YsUUFBN0MsQ0FBc0QsV0FBdEQsQ0FQK0I7QUFRdENHLEVBQUFBLFFBQVEsRUFBRWYsdUNBQUEsR0FDUFcsR0FETyxDQUNILEVBREcsRUFDQyxnQ0FERCxFQUVQQyxRQUZPLENBRUUsV0FGRixDQVI0QjtBQVd0Q0ksRUFBQUEsUUFBUSxFQUFFaEIsdUNBQUEsR0FDUGlCLE9BRE8sQ0FFTixpRUFGTSxFQUdOLHNFQUhNLEVBS1BMLFFBTE8sQ0FLRSxXQUxGLENBWDRCO0FBaUJ0Q00sRUFBQUEsU0FBUyxFQUFFbEIsdUNBQUEsR0FBYW1CLEtBQWIsQ0FDVCxDQUFDbkIsb0NBQUEsQ0FBUSxVQUFSLENBQUQsRUFBc0IsSUFBdEIsQ0FEUyxFQUVULHVCQUZTO0FBakIyQixDQUFYLENBQTdCO0FBdUJBLElBQU1xQixpQkFBaUIsR0FBRztBQUN4QlosRUFBQUEsU0FBUyxFQUFFLEVBRGE7QUFFeEJJLEVBQUFBLFFBQVEsRUFBRSxFQUZjO0FBR3hCQyxFQUFBQSxLQUFLLEVBQUUsRUFIaUI7QUFJeEJDLEVBQUFBLFFBQVEsRUFBRSxFQUpjO0FBS3hCQyxFQUFBQSxRQUFRLEVBQUUsRUFMYztBQU14QkUsRUFBQUEsU0FBUyxFQUFFO0FBTmEsQ0FBMUI7QUFTZSxTQUFTSSxVQUFULEdBQXNCO0FBQUE7O0FBQUE7O0FBQ25DLGlCQUEyQjdCLG1EQUFPLEVBQWxDO0FBQUE7QUFBQSxNQUFPOEIsSUFBUDtBQUFBLE1BQWVDLE1BQWYsZ0JBQWVBLE1BQWY7O0FBQ0Esa0JBQWdDbkMsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQUEsTUFBT29DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRm1DLFdBSXBCQyxRQUpvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvVUFJbkMsaUJBQXdCQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0NDLGNBQUFBLGFBQWxDLFFBQWtDQSxhQUFsQztBQUFBO0FBQUEscUJBQ29CQyxLQUFLLENBQUMsWUFBRCxFQUFlO0FBQ3BDQyxnQkFBQUEsTUFBTSxFQUFFLE1BRDRCO0FBRXBDQyxnQkFBQUEsT0FBTyxFQUFFO0FBQUUsa0NBQWdCO0FBQWxCLGlCQUYyQjtBQUdwQ0MsZ0JBQUFBLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLE1BQWY7QUFIOEIsZUFBZixDQUR6Qjs7QUFBQTtBQUNRUSxjQUFBQSxHQURSOztBQUFBLG9CQU9NQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQVByQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHFCQVEwQkQsR0FBRyxDQUFDRSxJQUFKLEVBUjFCOztBQUFBO0FBUVVDLGNBQUFBLE9BUlY7QUFTSTtBQUNBZixjQUFBQSxNQUFNLENBQUNlLE9BQUQsQ0FBTjtBQVZKO0FBQUE7O0FBQUE7QUFBQSw0QkFZSWIsV0FaSjtBQUFBO0FBQUEscUJBWXNCVSxHQUFHLENBQUNJLElBQUosRUFadEI7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBY0VYLGNBQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7O0FBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKbUM7QUFBQTtBQUFBOztBQXFCbkN2QyxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZDtBQUNBLFFBQUlpQyxJQUFKLEVBQVVoQyx1REFBQSxDQUFZLEdBQVo7QUFDWCxHQUhRLEVBR04sQ0FBQ2dDLElBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0U7QUFBQSxlQUNHRSxRQUFRLGlCQUFJO0FBQUcsZUFBUyxFQUFDLE9BQWI7QUFBQSxnQkFBc0JBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEZixlQUVFLCtEQUFDLDBDQUFEO0FBQ0UsbUJBQWEsRUFBRUosaUJBRGpCO0FBRUUsc0JBQWdCLEVBQUVkLG9CQUZwQjtBQUdFLGNBQVEsRUFBRW9CLFFBSFo7QUFBQSxnQkFLRyxrQkFBQ2UsTUFBRDtBQUFBLDRCQUNDLCtEQUFDLHdDQUFEO0FBQU0sa0JBQVEsRUFBRUEsTUFBTSxDQUFDQyxZQUF2QjtBQUFBLGlDQUNFLCtEQUFDLG1EQUFEO0FBQUssaUJBQUssRUFBQyxNQUFYO0FBQUEsb0NBQ0UsK0RBQUMseUNBQUQ7QUFBTyxrQkFBSSxFQUFDLFdBQVo7QUFBQSx3QkFDRztBQUFBLG9CQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSxvQkFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsb0NBQ0MsK0RBQUMsMERBQUQ7QUFDRSw0QkFBVSxNQURaO0FBRUUsMkJBQVMsRUFBRUEsSUFBSSxDQUFDQyxNQUFMLENBQVlyQyxTQUFaLElBQXlCb0MsSUFBSSxDQUFDRSxPQUFMLENBQWF0QyxTQUZuRDtBQUdFLG9CQUFFLEVBQUUsQ0FITjtBQUFBLDBDQUtFLCtEQUFDLHdEQUFEO0FBQVcsMkJBQU8sRUFBQyxXQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRixlQU1FLCtEQUFDLG9EQUFELGtDQUFXbUMsS0FBWDtBQUFrQixzQkFBRSxFQUFDLFdBQXJCO0FBQWlDLCtCQUFXLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFORixlQU9FLCtEQUFDLCtEQUFEO0FBQUEsOEJBQW1CQyxJQUFJLENBQUNDLE1BQUwsQ0FBWXJDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBY0UsK0RBQUMseUNBQUQ7QUFBTyxrQkFBSSxFQUFDLFVBQVo7QUFBQSx3QkFDRztBQUFBLG9CQUFHbUMsS0FBSCxTQUFHQSxLQUFIO0FBQUEsb0JBQVVDLElBQVYsU0FBVUEsSUFBVjtBQUFBLG9DQUNDLCtEQUFDLDBEQUFEO0FBQ0UsNEJBQVUsTUFEWjtBQUVFLDJCQUFTLEVBQUVBLElBQUksQ0FBQ0MsTUFBTCxDQUFZakMsUUFBWixJQUF3QmdDLElBQUksQ0FBQ0UsT0FBTCxDQUFhbEMsUUFGbEQ7QUFHRSxvQkFBRSxFQUFFLENBSE47QUFBQSwwQ0FLRSwrREFBQyx3REFBRDtBQUFXLDJCQUFPLEVBQUMsVUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEYsZUFNRSwrREFBQyxvREFBRCxrQ0FBVytCLEtBQVg7QUFBa0Isc0JBQUUsRUFBQyxVQUFyQjtBQUFnQywrQkFBVyxFQUFDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkYsZUFPRSwrREFBQywrREFBRDtBQUFBLDhCQUFtQkMsSUFBSSxDQUFDQyxNQUFMLENBQVlqQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERDtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkRixlQTJCRSwrREFBQyx5Q0FBRDtBQUFPLGtCQUFJLEVBQUMsT0FBWjtBQUFBLHdCQUNHO0FBQUEsb0JBQUcrQixLQUFILFNBQUdBLEtBQUg7QUFBQSxvQkFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsb0NBQ0MsK0RBQUMsMERBQUQ7QUFDRSw0QkFBVSxNQURaO0FBRUUsMkJBQVMsRUFBRUEsSUFBSSxDQUFDQyxNQUFMLENBQVloQyxLQUFaLElBQXFCK0IsSUFBSSxDQUFDRSxPQUFMLENBQWFqQyxLQUYvQztBQUFBLDBDQUlFLCtEQUFDLHdEQUFEO0FBQVcsMkJBQU8sRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFKRixlQUtFLCtEQUFDLG9EQUFELGtDQUFXOEIsS0FBWDtBQUFrQixzQkFBRSxFQUFDLE9BQXJCO0FBQTZCLCtCQUFXLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRixlQU1FLCtEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLGVBU0UsK0RBQUMsK0RBQUQ7QUFBQSw4QkFBbUJDLElBQUksQ0FBQ0MsTUFBTCxDQUFZaEM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBM0JGLGVBMENFLCtEQUFDLHlDQUFEO0FBQU8sa0JBQUksRUFBQyxVQUFaO0FBQUEsd0JBQ0c7QUFBQSxvQkFBRzhCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLG9CQUFVQyxJQUFWLFNBQVVBLElBQVY7QUFBQSxvQ0FDQywrREFBQywwREFBRDtBQUNFLDRCQUFVLE1BRFo7QUFFRSwyQkFBUyxFQUFFQSxJQUFJLENBQUNDLE1BQUwsQ0FBWS9CLFFBQVosSUFBd0I4QixJQUFJLENBQUNFLE9BQUwsQ0FBYWhDLFFBRmxEO0FBR0Usb0JBQUUsRUFBRSxDQUhOO0FBQUEsMENBS0UsK0RBQUMsd0RBQUQ7QUFBVywyQkFBTyxFQUFDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBTUUsK0RBQUMsb0RBQUQsa0NBQVc2QixLQUFYO0FBQWtCLHNCQUFFLEVBQUMsVUFBckI7QUFBZ0MsK0JBQVcsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLGVBT0UsK0RBQUMsK0RBQUQ7QUFBQSw4QkFBbUJDLElBQUksQ0FBQ0MsTUFBTCxDQUFZL0I7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMUNGLGVBdURFLCtEQUFDLHlDQUFEO0FBQU8sa0JBQUksRUFBQyxVQUFaO0FBQUEsd0JBQ0c7QUFBQSxvQkFBRzZCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLG9CQUFVQyxJQUFWLFNBQVVBLElBQVY7QUFBQSxvQ0FDQywrREFBQywwREFBRDtBQUNFLDRCQUFVLE1BRFo7QUFFRSwyQkFBUyxFQUFFQSxJQUFJLENBQUNDLE1BQUwsQ0FBWTlCLFFBQVosSUFBd0I2QixJQUFJLENBQUNFLE9BQUwsQ0FBYS9CLFFBRmxEO0FBR0Usb0JBQUUsRUFBRSxDQUhOO0FBQUEsMENBS0UsK0RBQUMsd0RBQUQ7QUFBVywyQkFBTyxFQUFDLFVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBTUUsK0RBQUMsb0RBQUQsa0NBQVc0QixLQUFYO0FBQWtCLHNCQUFFLEVBQUMsVUFBckI7QUFBZ0MsK0JBQVcsRUFBQztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLGVBT0UsK0RBQUMsK0RBQUQ7QUFBQSw4QkFBbUJDLElBQUksQ0FBQ0MsTUFBTCxDQUFZOUI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdkRGLGVBb0VFLCtEQUFDLHlDQUFEO0FBQU8sa0JBQUksRUFBQyxXQUFaO0FBQUEsd0JBQ0c7QUFBQSxvQkFBRzRCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLG9CQUFVQyxJQUFWLFNBQVVBLElBQVY7QUFBQSxvQ0FDQywrREFBQywwREFBRDtBQUNFLDRCQUFVLE1BRFo7QUFFRSwyQkFBUyxFQUFFQSxJQUFJLENBQUNDLE1BQUwsQ0FBWTVCLFNBQVosSUFBeUIyQixJQUFJLENBQUNFLE9BQUwsQ0FBYTdCLFNBRm5EO0FBR0Usb0JBQUUsRUFBRSxDQUhOO0FBQUEsMENBS0UsK0RBQUMsd0RBQUQ7QUFBVywyQkFBTyxFQUFDLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBTUUsK0RBQUMsb0RBQUQsa0NBQVcwQixLQUFYO0FBQWtCLHNCQUFFLEVBQUMsV0FBckI7QUFBaUMsK0JBQVcsRUFBQztBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLGVBT0UsK0RBQUMsK0RBQUQ7QUFBQSw4QkFBbUJDLElBQUksQ0FBQ0MsTUFBTCxDQUFZNUI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEVGLGVBaUZFLCtEQUFDLG9EQUFEO0FBQU0sMkJBQWEsRUFBQyxRQUFwQjtBQUE2QixnQkFBRSxFQUFFLENBQWpDO0FBQUEsc0NBQ0UsK0RBQUMscURBQUQ7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFBc0Isa0JBQUUsRUFBRSxDQUExQjtBQUFBLHVDQUNFLCtEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFLCtEQUFDLGtEQUFEO0FBQU0sb0JBQUksRUFBQyxRQUFYO0FBQUEsdUNBQ0UsK0RBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQUFBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUF5R0Q7O0dBbkl1Qkk7VUFDSzdCOzs7S0FETDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2UtY29tcG9uZW50cy9TaWdudXAvU2lnbnVwRm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uLy4uL2xpYi9ob29rcyc7XHJcbmltcG9ydCB7IENlbnRlciwgRmxleCwgQm94IH0gZnJvbSAnQGNoYWtyYS11aS9sYXlvdXQnO1xyXG5pbXBvcnQgeyBGb3JtaWssIEZvcm0sIEZpZWxkIH0gZnJvbSAnZm9ybWlrJztcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEZvcm1Db250cm9sLFxyXG4gIEZvcm1MYWJlbCxcclxuICBGb3JtSGVscGVyVGV4dCxcclxuICBGb3JtRXJyb3JNZXNzYWdlLFxyXG4gIElucHV0LFxyXG4gIEJ1dHRvbixcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuXHJcbmNvbnN0IGZvcm1WYWxkaWF0aW9uU2NoZW1hID0gWXVwLm9iamVjdCh7XHJcbiAgZmlyc3ROYW1lOiBZdXAuc3RyaW5nKClcclxuICAgIC5tYXgoMTUsICdNdXN0IGJlIDIwIGNoYXJhY3RlcnMgb3IgbGVzcy4nKVxyXG4gICAgLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICBsYXN0TmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAubWF4KDIwLCAnTXVzdCBiZSAyMCBjaGFyYWN0ZXJzIG9yIGxlc3MuJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgZW1haWw6IFl1cC5zdHJpbmcoKS5lbWFpbCgnSW52YWxpZCBlbWFpbCBhZGRyZXNzLicpLnJlcXVpcmVkKCdSZXF1aXJlZC4nKSxcclxuICB1c2VybmFtZTogWXVwLnN0cmluZygpXHJcbiAgICAubWF4KDIwLCAnTXVzdCBiZSAyMCBjaGFyYWN0ZXJzIG9yIGxlc3MuJylcclxuICAgIC5yZXF1aXJlZCgnUmVxdWlyZWQuJyksXHJcbiAgcGFzc3dvcmQ6IFl1cC5zdHJpbmcoKVxyXG4gICAgLm1hdGNoZXMoXHJcbiAgICAgIC9eKD89Lio/W0EtWl0pKD89Lio/W2Etel0pKD89Lio/WzAtOV0pKD89Lio/WyMuPyFAJCVeJiotXSkuezgsfSQvLFxyXG4gICAgICAnTXVzdCBjb250YWluIGxvd2VyY2FzZSwgdXBwZXJjYXNlLCBhIG51bWJlciBhbmQgYSBzcGVjaWFsIGNoYXJhY3Rlci4nXHJcbiAgICApXHJcbiAgICAucmVxdWlyZWQoJ1JlcXVpcmVkLicpLFxyXG4gIHJwYXNzd29yZDogWXVwLnN0cmluZygpLm9uZU9mKFxyXG4gICAgW1l1cC5yZWYoJ3Bhc3N3b3JkJyksIG51bGxdLFxyXG4gICAgJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoLidcclxuICApLFxyXG59KTtcclxuXHJcbmNvbnN0IGZvcm1Jbml0aWFsVmFsdWVzID0ge1xyXG4gIGZpcnN0TmFtZTogJycsXHJcbiAgbGFzdE5hbWU6ICcnLFxyXG4gIGVtYWlsOiAnJyxcclxuICB1c2VybmFtZTogJycsXHJcbiAgcGFzc3dvcmQ6ICcnLFxyXG4gIHJwYXNzd29yZDogJycsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXBGb3JtKCkge1xyXG4gIGNvbnN0IFt1c2VyLCB7IG11dGF0ZSB9XSA9IHVzZVVzZXIoKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQodmFsdWVzLCB7IHNldFN1Ym1pdHRpbmcgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodmFsdWVzKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgY29uc3QgdXNlck9iaiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIC8vIHNldCB1c2VyIHRvIHVzZVNXUiBzdGF0ZVxyXG4gICAgICBtdXRhdGUodXNlck9iaik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRFcnJvck1zZyhhd2FpdCByZXMudGV4dCgpKTtcclxuICAgIH1cclxuICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIHJlZGlyZWN0IHRvIGhvbWUgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkXHJcbiAgICBpZiAodXNlcikgUm91dGVyLnB1c2goJy8nKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2Vycm9yTXNnICYmIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+e2Vycm9yTXNnfTwvcD59XHJcbiAgICAgIDxGb3JtaWtcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXtmb3JtSW5pdGlhbFZhbHVlc31cclxuICAgICAgICB2YWxpZGF0aW9uU2NoZW1hPXtmb3JtVmFsZGlhdGlvblNjaGVtYX1cclxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgID5cclxuICAgICAgICB7KGZvcm1paykgPT4gKFxyXG4gICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8Qm94IHdpZHRoPVwiNjZ2d1wiPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwiZmlyc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5maXJzdE5hbWUgJiYgZm9ybS50b3VjaGVkLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBtdD17Mn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IG5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLmZpZWxkfSBpZD1cImZpcnN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLmZpcnN0TmFtZX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJsYXN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMubGFzdE5hbWUgJiYgZm9ybS50b3VjaGVkLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG10PXsyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibGFzdE5hbWVcIj5MYXN0IG5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLmZpZWxkfSBpZD1cImxhc3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5sYXN0TmFtZX08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgeyh7IGZpZWxkLCBmb3JtIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17Zm9ybS5lcnJvcnMuZW1haWwgJiYgZm9ybS50b3VjaGVkLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbCBhZGRyZXNzPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZUBtYWlsLmlvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlbHBlclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICBXZSZhcG9zO2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMuZW1haWx9PC9Gb3JtRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgIDxGaWVsZCBuYW1lPVwidXNlcm5hbWVcIj5cclxuICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzLnVzZXJuYW1lICYmIGZvcm0udG91Y2hlZC51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBtdD17Mn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgey4uLmZpZWxkfSBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvck1lc3NhZ2U+e2Zvcm0uZXJyb3JzLnVzZXJuYW1lfTwvRm9ybUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICA8RmllbGQgbmFtZT1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICB7KHsgZmllbGQsIGZvcm0gfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtmb3JtLmVycm9ycy5wYXNzd29yZCAmJiBmb3JtLnRvdWNoZWQucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgbXQ9ezJ9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3JNZXNzYWdlPntmb3JtLmVycm9ycy5wYXNzd29yZH08L0Zvcm1FcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvRmllbGQ+XHJcbiAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJycGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIHsoeyBmaWVsZCwgZm9ybSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBpc0ludmFsaWQ9e2Zvcm0uZXJyb3JzLnJwYXNzd29yZCAmJiBmb3JtLnRvdWNoZWQucnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG10PXsyfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwicnBhc3N3b3JkXCI+UmVwZWF0IHBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0IHsuLi5maWVsZH0gaWQ9XCJycGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yTWVzc2FnZT57Zm9ybS5lcnJvcnMucnBhc3N3b3JkfTwvRm9ybUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbXQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbWI9ezN9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2VudGVyPlNpZ24gdXA8L0NlbnRlcj5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2VudGVyPkkgYWxyZWFkeSBoYXZlIGFuIGFjY291bnQ8L0NlbnRlcj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJMaW5rIiwidXNlVXNlciIsIkNlbnRlciIsIkZsZXgiLCJCb3giLCJGb3JtaWsiLCJGb3JtIiwiRmllbGQiLCJZdXAiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkZvcm1IZWxwZXJUZXh0IiwiRm9ybUVycm9yTWVzc2FnZSIsIklucHV0IiwiQnV0dG9uIiwiZm9ybVZhbGRpYXRpb25TY2hlbWEiLCJvYmplY3QiLCJmaXJzdE5hbWUiLCJzdHJpbmciLCJtYXgiLCJyZXF1aXJlZCIsImxhc3ROYW1lIiwiZW1haWwiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWF0Y2hlcyIsInJwYXNzd29yZCIsIm9uZU9mIiwicmVmIiwiZm9ybUluaXRpYWxWYWx1ZXMiLCJTaWdudXBGb3JtIiwidXNlciIsIm11dGF0ZSIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJvblN1Ym1pdCIsInZhbHVlcyIsInNldFN1Ym1pdHRpbmciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJ1c2VyT2JqIiwidGV4dCIsInB1c2giLCJmb3JtaWsiLCJoYW5kbGVTdWJtaXQiLCJmaWVsZCIsImZvcm0iLCJlcnJvcnMiLCJ0b3VjaGVkIl0sInNvdXJjZVJvb3QiOiIifQ==