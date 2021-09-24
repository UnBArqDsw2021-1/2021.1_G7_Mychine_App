"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/UI/animations/hover.tsx":
/*!*************************************!*\
  !*** ./src/UI/animations/hover.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ripple": () => (/* binding */ ripple),
/* harmony export */   "gradient": () => (/* binding */ gradient),
/* harmony export */   "frameEnter": () => (/* binding */ frameEnter)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @typescript-eslint/no-use-before-define */


const hoverAnimation = ({
  strokeWidth = "3px",
  position = "0px",
  pseudoElement = "after",
  blendMode = "normal"
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["&:hover{&", "{content:\"\";position:absolute;top:", ";left:", ";right:", ";bottom:", ";border-radius:0px;background:linear-gradient( 120deg,#f2ff00,#ff8520,#ef4647,#ff6600,#ffd900 );background-size:300% 300%;mix-blend-mode:", ";clip-path:polygon( 0% 100%,", " 100%,", " ", ",calc(100% - ", ") ", ",calc(100% - ", ") calc(100% - ", "),", " calc(100% - ", "),", " 100%,100% 100%,100% 0%,0% 0% );animation:", " 0.275s forwards ease-in reverse,", " 3s ease-in-out infinite;}}"], `:${pseudoElement}`, position, position, position, position, blendMode, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, frameEnter(strokeWidth), gradient);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hoverAnimation);
const ripple = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["to{transform:scale(4);opacity:0;}"]);
const gradient = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{background-position:15% 0%;}50%{background-position:85% 100%;}100%{background-position:15% 0%;}"]);
const frameEnter = strokeWidth => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["0%{clip-path:polygon( 0% 100%,", " 100%,", " ", ",calc(100% - ", ") ", ",calc(100% - ", ") calc(100% - ", "),", " calc(100% - ", "),", " 100%,100% 100%,100% 0%,0% 0% );}25%{clip-path:polygon( 0% 100%,", " 100%,", " ", ",calc(100% - ", ") ", ",calc(100% - ", ") calc(100% - ", "),calc(100% - ", ") calc(100% - ", "),calc(100% - ", ") 100%,100% 100%,100% 0%,0% 0% );}50%{clip-path:polygon( 0% 100%,", " 100%,", " ", ",calc(100% - ", ") ", ",calc(100% - ", ") ", ",calc(100% - ", ") ", ",calc(100% - ", ") ", ",calc(100% - ", ") ", ",100% 0%,0% 0% );}75%{-webkit-clip-path:polygon( 0% 100%,", " 100%,", " ", ",", " ", ",", " ", ",", " ", ",", " ", ",", " ", ",", " 0%,0% 0% );}100%{-webkit-clip-path:polygon( 0% 100%,", " 100%,", " 100%,", " 100%,", " 100%,", " 100%,", " 100%,", " 100%,", " 100%,0% 100% );}"], strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth, strokeWidth);

/***/ }),

/***/ "./src/UI/animations/index.tsx":
/*!*************************************!*\
  !*** ./src/UI/animations/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hoverAnimation": () => (/* reexport safe */ _hover__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "rippleAnimation": () => (/* reexport safe */ _ripple__WEBPACK_IMPORTED_MODULE_1__.default)
/* harmony export */ });
/* harmony import */ var _hover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hover */ "./src/UI/animations/hover.tsx");
/* harmony import */ var _ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ripple */ "./src/UI/animations/ripple.tsx");



/***/ }),

/***/ "./src/UI/animations/ripple.tsx":
/*!**************************************!*\
  !*** ./src/UI/animations/ripple.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ripple": () => (/* binding */ ripple),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ripple = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["to{transform:scale(4);opacity:0;}"]);

const rippleAnimation = (color = "primary") => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["& .ripple{position:absolute;border-radius:50%;transform:scale(0);animation:", " 0.6s linear;background-color:", ";mix-blend-mode:screen;pointer-events:none;}"], ripple, theme.colors[color]));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rippleAnimation);

/***/ }),

/***/ "./src/components/Button/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Button/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/components/Button/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["children"];
var _jsxFileName = "/home/pedro/Desktop/2021.1_G7_Mychine_App/src/components/Button/index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Button = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    color = "primary",
    size = "regular",
    icon,
    shadow,
    fullWidth,
    minimal
  } = props;

  const handleClick = event => {
    var _props$onClick, _button$getElementsBy;

    props === null || props === void 0 ? void 0 : (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.call(props, event); // ripple effect

    const button = event.currentTarget;
    const newRipple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    newRipple.style.width = `${diameter}px`;
    newRipple.style.height = `${diameter}px`;
    newRipple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    newRipple.style.top = `${event.clientY - button.offsetTop - radius}px`;
    newRipple.classList.add("ripple"); // remove old ripple

    (_button$getElementsBy = button.getElementsByClassName("ripple")[0]) === null || _button$getElementsBy === void 0 ? void 0 : _button$getElementsBy.remove();
    button.appendChild(newRipple);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_0__.Button, _objectSpread(_objectSpread({
    type: "button",
    color: color,
    size: size,
    icon: icon,
    shadow: shadow,
    fullWidth: fullWidth,
    minimal: minimal
  }, props), {}, {
    onClick: handleClick,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/components/Button/styles.tsx":
/*!******************************************!*\
  !*** ./src/components/Button/styles.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @UI/animations */ "./src/UI/animations/index.tsx");



const buttonStylesModifiers = theme => ({
  size: {
    small: (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:35px;padding:6px 12px;font-size:0.9rem;letter-spacing:0;"]),
    regular: (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:45px;"]),
    large: (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["height:55px;font-size:", ";"], theme.font.sizes.medium)
  },
  shadow: (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["box-shadow:", ";"], theme.shadows.medium),
  fullWidth: (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:100%;"])
});

const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Button",
  componentId: "sc-gcvx4d-0"
})(["", ""], ({
  theme,
  size,
  color,
  shadow,
  fullWidth
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:relative;display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;color:", ";font-size:", ";font-weight:", ";letter-spacing:1px;text-transform:uppercase;border:none;background:", ";cursor:pointer;user-select:none;overflow:hidden;transition:0.25s;", ";", ";", ";", " ", ""], theme.colors.darkGray, theme.font.sizes.base, theme.font.weight.semiBold, theme.colors[color], size && buttonStylesModifiers(theme).size[size], fullWidth && buttonStylesModifiers(theme).fullWidth, shadow && buttonStylesModifiers(theme).shadow, (0,_UI_animations__WEBPACK_IMPORTED_MODULE_1__.rippleAnimation)(color), (0,_UI_animations__WEBPACK_IMPORTED_MODULE_1__.hoverAnimation)({
  strokeWidth: "4px",
  position: "-1px",
  blendMode: "multiply"
})));

/***/ }),

/***/ "./src/components/Hero/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Hero/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_SearchBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/SearchBar */ "./src/components/SearchBar/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/Hero/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/pedro/Desktop/2021.1_G7_Mychine_App/src/components/Hero/index.tsx";




const Hero = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.HeroContainer, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.HeroTextContainer, {
    children: ["Obra Mais que Certa", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      children: "Encontre suas m\xE1quinas de constru\xE7\xE3o."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 26
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.HeroSearchContainer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(components_SearchBar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/Hero/styles.tsx":
/*!****************************************!*\
  !*** ./src/components/Hero/styles.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroContainer": () => (/* binding */ HeroContainer),
/* harmony export */   "HeroTextContainer": () => (/* binding */ HeroTextContainer),
/* harmony export */   "HeroSearchContainer": () => (/* binding */ HeroSearchContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroContainer",
  componentId: "sc-em7ws2-0"
})(["position:relative;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10rem;overflow:hidden;@media (max-width:800px){gap:4rem;}&:before{content:\"\";position:absolute;height:100%;width:100%;left:0;right:0;background-image:url(/img/hero.jpg);background-position:center;background-repeat:no-repeat;background-size:cover;pointer-events:none;z-index:-2;transition:all 45s cubic-bezier(0.25,0.45,0.45,0.95);@supports not ((-webkit-backdrop-filter:none) or (backdrop-filter:none)){filter:blur(8px);}}&:after{content:\"\";position:absolute;width:100%;height:100%;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);pointer-events:none;background-image:radial-gradient( circle,rgba(34,34,34,0.5018382352941176) 40%,rgba(3,3,3,0.7987570028011204) 100% );background-size:cover;z-index:-1;}&:hover{&:before{transform:scale(1.15);transition:all 45s cubic-bezier(0.25,0.45,0.45,0.95);}}"]);
const HeroTextContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
  displayName: "HeroTextContainer",
  componentId: "sc-em7ws2-1"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["position:relative;color:white;font-size:", ";font-weight:", ";text-shadow:1px 1px 3px #222222f0;cursor:default;@media (max-width:800px){max-width:90%;font-size:1.8rem;font-weight:", ";margin-top:100px;}&:before{content:\"\";position:absolute;width:25%;height:1px;left:0;bottom:calc(100%);background-color:white;@media (max-width:800px){bottom:unset;top:3px;}}&:after{content:\"\";position:absolute;width:25%;height:1px;right:0;top:calc(100% + 0.9rem);background-color:white;@media (max-width:800px){top:unset;bottom:3px;}}& span{position:absolute;left:3px;top:calc(100%);color:", ";font-size:", ";font-weight:", ";letter-spacing:0.5px;@media (max-width:800px){font-weight:", ";font-size:", ";}}"], theme.font.sizes.huge, theme.font.weight.black, theme.font.weight.bold, theme.colors.secondary, theme.font.sizes.medium, theme.font.weight.regular, theme.font.weight.regular, theme.font.sizes.small));
const HeroSearchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "HeroSearchContainer",
  componentId: "sc-em7ws2-2"
})(["display:flex;justify-content:center;width:100%;"]);

/***/ }),

/***/ "./src/components/SearchBar/index.tsx":
/*!********************************************!*\
  !*** ./src/components/SearchBar/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/SearchBar/styles.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/pedro/Desktop/2021.1_G7_Mychine_App/src/components/SearchBar/index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const SearchBar = () => {
  const {
    register
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_0__.useForm)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.SearchBar, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("input", _objectSpread(_objectSpread({}, register("search")), {}, {
      placeholder: "",
      autoComplete: "off"
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(components_Button__WEBPACK_IMPORTED_MODULE_1__.default, {
      color: "secondary",
      shadow: true,
      size: "large",
      children: "Buscar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBar);

/***/ }),

/***/ "./src/components/SearchBar/styles.tsx":
/*!*********************************************!*\
  !*** ./src/components/SearchBar/styles.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBar": () => (/* binding */ SearchBar)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SearchBar",
  componentId: "sc-mgy4o8-0"
})(["", ""], ({
  theme
}) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["display:flex;width:50%;background-color:#dddddd30;box-shadow:rgba(0,0,0,0.07) 0px 1px 2px,rgba(0,0,0,0.07) 0px 2px 4px,rgba(0,0,0,0.07) 0px 4px 8px,rgba(0,0,0,0.07) 0px 8px 16px,rgba(0,0,0,0.07) 0px 16px 32px,rgba(0,0,0,0.07) 0px 32px 64px;overflow:hidden;@media (max-width:600px){width:90%;}& input{flex:1;color:white;font-size:", ";padding:0 1rem;background-color:transparent;border:none;outline:none;&:focus{border:2px solid ", ";}@media (max-width:600px){max-width:200px;font-size:", ";}}& button{justify-self:flex-end;margin-left:auto;}"], theme.font.sizes.medium, theme.colors.secondary, theme.font.sizes.base));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Hero */ "./src/components/Hero/index.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/pedro/Desktop/2021.1_G7_Mychine_App/src/pages/index.tsx";



const Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_Hero__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUMsT0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQVhEOztBQWFBLGlFQUFlWixTQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBRU8sTUFBTUEsU0FBUyxHQUFHYix1RUFBSDtBQUFBO0FBQUE7QUFBQSxhQUNsQixDQUFDO0FBQUV2QyxFQUFBQTtBQUFGLENBQUQsS0FBZWIsc0RBQWYsb2lCQWdCZWEsS0FBSyxDQUFDNEMsSUFBTixDQUFXQyxLQUFYLENBQWlCQyxNQWhCaEMsRUF1QndCOUMsS0FBSyxDQUFDQyxNQUFOLENBQWE0RCxTQXZCckMsRUE0QmlCN0QsS0FBSyxDQUFDNEMsSUFBTixDQUFXQyxLQUFYLENBQWlCSSxJQTVCbEMsQ0FEa0IsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlA7OztBQUdBLE1BQU1nQixJQUFjLEdBQUcsbUJBQ3JCO0FBQUEseUJBQ0UsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFNQSxpRUFBZUEsSUFBZjs7Ozs7Ozs7OztBQ1RBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215Y2hpbmUtYXBwLy4vc3JjL1VJL2FuaW1hdGlvbnMvaG92ZXIudHN4Iiwid2VicGFjazovL215Y2hpbmUtYXBwLy4vc3JjL1VJL2FuaW1hdGlvbnMvaW5kZXgudHN4Iiwid2VicGFjazovL215Y2hpbmUtYXBwLy4vc3JjL1VJL2FuaW1hdGlvbnMvcmlwcGxlLnRzeCIsIndlYnBhY2s6Ly9teWNoaW5lLWFwcC8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbXljaGluZS1hcHAvLi9zcmMvY29tcG9uZW50cy9CdXR0b24vc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9teWNoaW5lLWFwcC8uL3NyYy9jb21wb25lbnRzL0hlcm8vaW5kZXgudHN4Iiwid2VicGFjazovL215Y2hpbmUtYXBwLy4vc3JjL2NvbXBvbmVudHMvSGVyby9zdHlsZXMudHN4Iiwid2VicGFjazovL215Y2hpbmUtYXBwLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9teWNoaW5lLWFwcC8uL3NyYy9jb21wb25lbnRzL1NlYXJjaEJhci9zdHlsZXMudHN4Iiwid2VicGFjazovL215Y2hpbmUtYXBwLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9teWNoaW5lLWFwcC9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovL215Y2hpbmUtYXBwL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbXljaGluZS1hcHAvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZSAqL1xuaW1wb3J0IHsgY3NzLCBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJSG92ZXJQcm9wcyB7XG4gIHN0cm9rZVdpZHRoPzogc3RyaW5nO1xuICBwb3NpdGlvbj86IHN0cmluZztcbiAgcHNldWRvRWxlbWVudD86IFwiYmVmb3JlXCIgfCBcImFmdGVyXCI7XG4gIGJsZW5kTW9kZT86IHN0cmluZztcbn1cblxuY29uc3QgaG92ZXJBbmltYXRpb24gPSAoe1xuICBzdHJva2VXaWR0aCA9IFwiM3B4XCIsXG4gIHBvc2l0aW9uID0gXCIwcHhcIixcbiAgcHNldWRvRWxlbWVudCA9IFwiYWZ0ZXJcIixcbiAgYmxlbmRNb2RlID0gXCJub3JtYWxcIixcbn06IElIb3ZlclByb3BzKSA9PiBjc3NgXG4gICY6aG92ZXIge1xuICAgICYke2A6JHtwc2V1ZG9FbGVtZW50fWB9IHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6ICR7cG9zaXRpb259O1xuICAgICAgbGVmdDogJHtwb3NpdGlvbn07XG4gICAgICByaWdodDogJHtwb3NpdGlvbn07XG4gICAgICBib3R0b206ICR7cG9zaXRpb259O1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAxMjBkZWcsXG4gICAgICAgICNmMmZmMDAsXG4gICAgICAgICNmZjg1MjAsXG4gICAgICAgICNlZjQ2NDcsXG4gICAgICAgICNmZjY2MDAsXG4gICAgICAgICNmZmQ5MDBcbiAgICAgICk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMzAwJTtcbiAgICAgIG1peC1ibGVuZC1tb2RlOiAke2JsZW5kTW9kZX07XG4gICAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAgIDAlIDEwMCUsXG4gICAgICAgICR7c3Ryb2tlV2lkdGh9IDEwMCUsXG4gICAgICAgICR7c3Ryb2tlV2lkdGh9ICR7c3Ryb2tlV2lkdGh9LFxuICAgICAgICBjYWxjKDEwMCUgLSAke3N0cm9rZVdpZHRofSkgJHtzdHJva2VXaWR0aH0sXG4gICAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSBjYWxjKDEwMCUgLSAke3N0cm9rZVdpZHRofSksXG4gICAgICAgICR7c3Ryb2tlV2lkdGh9IGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSxcbiAgICAgICAgJHtzdHJva2VXaWR0aH0gMTAwJSxcbiAgICAgICAgMTAwJSAxMDAlLFxuICAgICAgICAxMDAlIDAlLFxuICAgICAgICAwJSAwJVxuICAgICAgKTtcbiAgICAgIGFuaW1hdGlvbjogJHtmcmFtZUVudGVyKHN0cm9rZVdpZHRoKX0gMC4yNzVzIGZvcndhcmRzIGVhc2UtaW4gcmV2ZXJzZSxcbiAgICAgICAgJHtncmFkaWVudH0gM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBob3ZlckFuaW1hdGlvbjtcblxuZXhwb3J0IGNvbnN0IHJpcHBsZSA9IGtleWZyYW1lc2BcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoNCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdyYWRpZW50ID0ga2V5ZnJhbWVzYFxuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUlIDAlO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODUlIDEwMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTUlIDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgZnJhbWVFbnRlciA9IChzdHJva2VXaWR0aDogc3RyaW5nKSA9PiBrZXlmcmFtZXNgXG4gIDAlIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAwJSAxMDAlLFxuICAgICAgJHtzdHJva2VXaWR0aH0gMTAwJSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9ICR7c3Ryb2tlV2lkdGh9LFxuICAgICAgY2FsYygxMDAlIC0gJHtzdHJva2VXaWR0aH0pICR7c3Ryb2tlV2lkdGh9LFxuICAgICAgY2FsYygxMDAlIC0gJHtzdHJva2VXaWR0aH0pIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9IGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9IDEwMCUsXG4gICAgICAxMDAlIDEwMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMCUgMCVcbiAgICApO1xuICB9XG4gIDI1JSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMCUgMTAwJSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9IDEwMCUsXG4gICAgICAke3N0cm9rZVdpZHRofSAke3N0cm9rZVdpZHRofSxcbiAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSAke3N0cm9rZVdpZHRofSxcbiAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSBjYWxjKDEwMCUgLSAke3N0cm9rZVdpZHRofSksXG4gICAgICBjYWxjKDEwMCUgLSAke3N0cm9rZVdpZHRofSkgY2FsYygxMDAlIC0gJHtzdHJva2VXaWR0aH0pLFxuICAgICAgY2FsYygxMDAlIC0gJHtzdHJva2VXaWR0aH0pIDEwMCUsXG4gICAgICAxMDAlIDEwMCUsXG4gICAgICAxMDAlIDAlLFxuICAgICAgMCUgMCVcbiAgICApO1xuICB9XG4gIDUwJSB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgICAgMCUgMTAwJSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9IDEwMCUsXG4gICAgICAke3N0cm9rZVdpZHRofSAke3N0cm9rZVdpZHRofSxcbiAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSAke3N0cm9rZVdpZHRofSxcbiAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSAke3N0cm9rZVdpZHRofSxcbiAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSAke3N0cm9rZVdpZHRofSxcbiAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSAke3N0cm9rZVdpZHRofSxcbiAgICAgIGNhbGMoMTAwJSAtICR7c3Ryb2tlV2lkdGh9KSAke3N0cm9rZVdpZHRofSxcbiAgICAgIDEwMCUgMCUsXG4gICAgICAwJSAwJVxuICAgICk7XG4gIH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcbiAgICAgIDAlIDEwMCUsXG4gICAgICAke3N0cm9rZVdpZHRofSAxMDAlLFxuICAgICAgJHtzdHJva2VXaWR0aH0gJHtzdHJva2VXaWR0aH0sXG4gICAgICAke3N0cm9rZVdpZHRofSAke3N0cm9rZVdpZHRofSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9ICR7c3Ryb2tlV2lkdGh9LFxuICAgICAgJHtzdHJva2VXaWR0aH0gJHtzdHJva2VXaWR0aH0sXG4gICAgICAke3N0cm9rZVdpZHRofSAke3N0cm9rZVdpZHRofSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9ICR7c3Ryb2tlV2lkdGh9LFxuICAgICAgJHtzdHJva2VXaWR0aH0gMCUsXG4gICAgICAwJSAwJVxuICAgICk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgICAwJSAxMDAlLFxuICAgICAgJHtzdHJva2VXaWR0aH0gMTAwJSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9IDEwMCUsXG4gICAgICAke3N0cm9rZVdpZHRofSAxMDAlLFxuICAgICAgJHtzdHJva2VXaWR0aH0gMTAwJSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9IDEwMCUsXG4gICAgICAke3N0cm9rZVdpZHRofSAxMDAlLFxuICAgICAgJHtzdHJva2VXaWR0aH0gMTAwJSxcbiAgICAgICR7c3Ryb2tlV2lkdGh9IDEwMCUsXG4gICAgICAwJSAxMDAlXG4gICAgKTtcbiAgfVxuYDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaG92ZXJBbmltYXRpb24gfSBmcm9tIFwiLi9ob3ZlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByaXBwbGVBbmltYXRpb24gfSBmcm9tIFwiLi9yaXBwbGVcIjtcbiIsImltcG9ydCB7IGNzcywga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCB0eXBlIENvbG9yID0gXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiO1xuXG5leHBvcnQgY29uc3QgcmlwcGxlID0ga2V5ZnJhbWVzYFxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5jb25zdCByaXBwbGVBbmltYXRpb24gPSAoY29sb3I6IENvbG9yID0gXCJwcmltYXJ5XCIpID0+IGNzc2BcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgJiAucmlwcGxlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICBhbmltYXRpb246ICR7cmlwcGxlfSAwLjZzIGxpbmVhcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzW2NvbG9yXX07XG4gICAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICBgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgcmlwcGxlQW5pbWF0aW9uO1xuIiwiaW1wb3J0IHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbnR5cGUgQnV0dG9uVHlwZXMgPSBCdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD47XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJ1dHRvblByb3BzIGV4dGVuZHMgQnV0dG9uVHlwZXMge1xuICBzaXplPzogXCJzbWFsbFwiIHwgXCJyZWd1bGFyXCIgfCBcImxhcmdlXCI7XG4gIGNvbG9yPzogXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiO1xuICBzaGFkb3c/OiBib29sZWFuO1xuICBmdWxsV2lkdGg/OiBib29sZWFuO1xuICBtaW5pbWFsPzogYm9vbGVhbjtcbiAgaWNvbj86IEpTWC5FbGVtZW50O1xuICBhcz86IFJlYWN0LkVsZW1lbnRUeXBlO1xufVxuXG5jb25zdCBCdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfTogSUJ1dHRvblByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb2xvciA9IFwicHJpbWFyeVwiLFxuICAgIHNpemUgPSBcInJlZ3VsYXJcIixcbiAgICBpY29uLFxuICAgIHNoYWRvdyxcbiAgICBmdWxsV2lkdGgsXG4gICAgbWluaW1hbCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgcHJvcHM/Lm9uQ2xpY2s/LihldmVudCk7XG5cbiAgICAvLyByaXBwbGUgZWZmZWN0XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBuZXdSaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBkaWFtZXRlciA9IE1hdGgubWF4KGJ1dHRvbi5jbGllbnRXaWR0aCwgYnV0dG9uLmNsaWVudEhlaWdodCk7XG4gICAgY29uc3QgcmFkaXVzID0gZGlhbWV0ZXIgLyAyO1xuICAgIG5ld1JpcHBsZS5zdHlsZS53aWR0aCA9IGAke2RpYW1ldGVyfXB4YDtcbiAgICBuZXdSaXBwbGUuc3R5bGUuaGVpZ2h0ID0gYCR7ZGlhbWV0ZXJ9cHhgO1xuICAgIG5ld1JpcHBsZS5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WCAtIGJ1dHRvbi5vZmZzZXRMZWZ0IC0gcmFkaXVzfXB4YDtcbiAgICBuZXdSaXBwbGUuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WSAtIGJ1dHRvbi5vZmZzZXRUb3AgLSByYWRpdXN9cHhgO1xuICAgIG5ld1JpcHBsZS5jbGFzc0xpc3QuYWRkKFwicmlwcGxlXCIpO1xuXG4gICAgLy8gcmVtb3ZlIG9sZCByaXBwbGVcbiAgICBidXR0b24uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInJpcHBsZVwiKVswXT8ucmVtb3ZlKCk7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQobmV3UmlwcGxlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTLkJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjb2xvcj17Y29sb3J9XG4gICAgICBzaXplPXtzaXplfVxuICAgICAgaWNvbj17aWNvbn1cbiAgICAgIHNoYWRvdz17c2hhZG93fVxuICAgICAgZnVsbFdpZHRoPXtmdWxsV2lkdGh9XG4gICAgICBtaW5pbWFsPXttaW5pbWFsfVxuICAgICAgey4uLnByb3BzfVxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUy5CdXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcywgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBob3ZlckFuaW1hdGlvbiwgcmlwcGxlQW5pbWF0aW9uIH0gZnJvbSBcIkBVSS9hbmltYXRpb25zXCI7XG5pbXBvcnQgdHlwZSB7IElCdXR0b25Qcm9wcyB9IGZyb20gXCIuXCI7XG5cbmV4cG9ydCB0eXBlIElCdXR0b25TdHlsZVByb3BzID0gSUJ1dHRvblByb3BzO1xuXG5jb25zdCBidXR0b25TdHlsZXNNb2RpZmllcnMgPSAodGhlbWU6IERlZmF1bHRUaGVtZSkgPT4gKHtcbiAgc2l6ZToge1xuICAgIHNtYWxsOiBjc3NgXG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgYCxcbiAgICByZWd1bGFyOiBjc3NgXG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYCxcbiAgICBsYXJnZTogY3NzYFxuICAgICAgaGVpZ2h0OiA1NXB4O1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMubWVkaXVtfTtcbiAgICBgLFxuICB9LFxuICBzaGFkb3c6IGNzc2BcbiAgICBib3gtc2hhZG93OiAke3RoZW1lLnNoYWRvd3MubWVkaXVtfTtcbiAgYCxcbiAgZnVsbFdpZHRoOiBjc3NgXG4gICAgd2lkdGg6IDEwMCU7XG4gIGAsXG59KTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b248SUJ1dHRvblN0eWxlUHJvcHM+YFxuICAkeyh7IHRoZW1lLCBzaXplLCBjb2xvciwgc2hhZG93LCBmdWxsV2lkdGggfSkgPT4gY3NzYFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMjRweDtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZGFya0dyYXl9O1xuICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLmJhc2V9O1xuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnQud2VpZ2h0LnNlbWlCb2xkfTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuY29sb3JzW2NvbG9yXX07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XG5cbiAgICAke3NpemUgJiYgYnV0dG9uU3R5bGVzTW9kaWZpZXJzKHRoZW1lKS5zaXplW3NpemVdfTtcbiAgICAke2Z1bGxXaWR0aCAmJiBidXR0b25TdHlsZXNNb2RpZmllcnModGhlbWUpLmZ1bGxXaWR0aH07XG4gICAgJHtzaGFkb3cgJiYgYnV0dG9uU3R5bGVzTW9kaWZpZXJzKHRoZW1lKS5zaGFkb3d9O1xuXG4gICAgJHtyaXBwbGVBbmltYXRpb24oY29sb3IpfVxuICAgICR7aG92ZXJBbmltYXRpb24oe1xuICAgICAgc3Ryb2tlV2lkdGg6IFwiNHB4XCIsXG4gICAgICBwb3NpdGlvbjogXCItMXB4XCIsXG4gICAgICBibGVuZE1vZGU6IFwibXVsdGlwbHlcIixcbiAgICB9KX1cbiAgYH1cbmA7XG4iLCJpbXBvcnQgU2VhcmNoQmFyIGZyb20gXCJjb21wb25lbnRzL1NlYXJjaEJhclwiO1xuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgSGVybyA9ICgpID0+IChcbiAgPFMuSGVyb0NvbnRhaW5lcj5cbiAgICA8Uy5IZXJvVGV4dENvbnRhaW5lcj5cbiAgICAgIE9icmEgTWFpcyBxdWUgQ2VydGE8c3Bhbj5FbmNvbnRyZSBzdWFzIG3DoXF1aW5hcyBkZSBjb25zdHJ1w6fDo28uPC9zcGFuPlxuICAgIDwvUy5IZXJvVGV4dENvbnRhaW5lcj5cbiAgICA8Uy5IZXJvU2VhcmNoQ29udGFpbmVyPlxuICAgICAgPFNlYXJjaEJhciAvPlxuICAgIDwvUy5IZXJvU2VhcmNoQ29udGFpbmVyPlxuICA8L1MuSGVyb0NvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm87XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSGVyb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyAqL1xuICBnYXA6IDEwcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIGdhcDogNHJlbTtcbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2ltZy9oZXJvLmpwZyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB6LWluZGV4OiAtMjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ1LCAwLjQ1LCAwLjk1KTtcblxuICAgIEBzdXBwb3J0cyBub3QgKCgtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogbm9uZSkgb3IgKGJhY2tkcm9wLWZpbHRlcjogbm9uZSkpIHtcbiAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xuICAgIH1cbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChcbiAgICAgIGNpcmNsZSxcbiAgICAgIHJnYmEoMzQsIDM0LCAzNCwgMC41MDE4MzgyMzUyOTQxMTc2KSA0MCUsXG4gICAgICByZ2JhKDMsIDMsIDMsIDAuNzk4NzU3MDAyODAxMTIwNCkgMTAwJVxuICAgICk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgICY6YmVmb3JlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgNDVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ1LCAwLjQ1LCAwLjk1KTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIZXJvVGV4dENvbnRhaW5lciA9IHN0eWxlZC5oMWBcbiAgJHsoeyB0aGVtZSB9KSA9PiBjc3NgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5odWdlfTtcbiAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250LndlaWdodC5ibGFja307XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMyMjIyMjJmMDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIG1heC13aWR0aDogOTAlO1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250LndlaWdodC5ib2xkfTtcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4OyAvLyB+IG5hdmJhciBoZWlnaHRcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogY2FsYygxMDAlKTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgYm90dG9tOiB1bnNldDtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IGNhbGMoMTAwJSArIDAuOXJlbSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIGJvdHRvbTogM3B4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYgc3BhbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAzcHg7XG4gICAgICB0b3A6IGNhbGMoMTAwJSk7XG4gICAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuc2Vjb25kYXJ5fTtcbiAgICAgIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250LnNpemVzLm1lZGl1bX07XG4gICAgICBmb250LXdlaWdodDogJHt0aGVtZS5mb250LndlaWdodC5yZWd1bGFyfTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lLmZvbnQud2VpZ2h0LnJlZ3VsYXJ9O1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5zbWFsbH07XG4gICAgICB9XG4gICAgfVxuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEhlcm9TZWFyY2hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuIiwiaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcImNvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oKTtcblxuICByZXR1cm4gKFxuICAgIDxTLlNlYXJjaEJhcj5cbiAgICAgIDxpbnB1dCB7Li4ucmVnaXN0ZXIoXCJzZWFyY2hcIil9IHBsYWNlaG9sZGVyPVwiXCIgYXV0b0NvbXBsZXRlPVwib2ZmXCIgLz5cbiAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiBzaGFkb3cgc2l6ZT1cImxhcmdlXCI+XG4gICAgICAgIEJ1c2NhclxuICAgICAgPC9CdXR0b24+XG4gICAgPC9TLlNlYXJjaEJhcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjtcbiIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hCYXIgPSBzdHlsZWQuZGl2YFxuICAkeyh7IHRoZW1lIH0pID0+IGNzc2BcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDMwO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDFweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDJweCA0cHgsXG4gICAgICByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCA0cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDcpIDBweCA4cHggMTZweCxcbiAgICAgIHJnYmEoMCwgMCwgMCwgMC4wNykgMHB4IDE2cHggMzJweCwgcmdiYSgwLCAwLCAwLCAwLjA3KSAwcHggMzJweCA2NHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgJiBpbnB1dCB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMubWVkaXVtfTtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICR7dGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgICAgICBmb250LXNpemU6ICR7dGhlbWUuZm9udC5zaXplcy5iYXNlfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIGJ1dHRvbiB7XG4gICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgfVxuICBgfVxuYDtcbiIsImltcG9ydCBIZXJvIGZyb20gXCJjb21wb25lbnRzL0hlcm9cIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVybyAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ob29rLWZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJuYW1lcyI6WyJjc3MiLCJrZXlmcmFtZXMiLCJob3ZlckFuaW1hdGlvbiIsInN0cm9rZVdpZHRoIiwicG9zaXRpb24iLCJwc2V1ZG9FbGVtZW50IiwiYmxlbmRNb2RlIiwiZnJhbWVFbnRlciIsImdyYWRpZW50IiwicmlwcGxlIiwiZGVmYXVsdCIsInJpcHBsZUFuaW1hdGlvbiIsImNvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJTIiwiQnV0dG9uIiwiY2hpbGRyZW4iLCJwcm9wcyIsInNpemUiLCJpY29uIiwic2hhZG93IiwiZnVsbFdpZHRoIiwibWluaW1hbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJvbkNsaWNrIiwiYnV0dG9uIiwiY3VycmVudFRhcmdldCIsIm5ld1JpcHBsZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpYW1ldGVyIiwiTWF0aCIsIm1heCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmFkaXVzIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJjbGllbnRYIiwib2Zmc2V0TGVmdCIsInRvcCIsImNsaWVudFkiLCJvZmZzZXRUb3AiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZWQiLCJidXR0b25TdHlsZXNNb2RpZmllcnMiLCJzbWFsbCIsInJlZ3VsYXIiLCJsYXJnZSIsImZvbnQiLCJzaXplcyIsIm1lZGl1bSIsInNoYWRvd3MiLCJkYXJrR3JheSIsImJhc2UiLCJ3ZWlnaHQiLCJzZW1pQm9sZCIsIlNlYXJjaEJhciIsIkhlcm8iLCJIZXJvQ29udGFpbmVyIiwiZGl2IiwiSGVyb1RleHRDb250YWluZXIiLCJoMSIsImh1Z2UiLCJibGFjayIsImJvbGQiLCJzZWNvbmRhcnkiLCJIZXJvU2VhcmNoQ29udGFpbmVyIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=