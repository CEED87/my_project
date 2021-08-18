/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addZero.js":
/*!***********************************!*\
  !*** ./src/components/addZero.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCount\": () => (/* binding */ setCount),\n/* harmony export */   \"arrows\": () => (/* binding */ arrows),\n/* harmony export */   \"arrowRight\": () => (/* binding */ arrowRight),\n/* harmony export */   \"arrowLeft\": () => (/* binding */ arrowLeft),\n/* harmony export */   \"total\": () => (/* binding */ total),\n/* harmony export */   \"imgSlide\": () => (/* binding */ imgSlide),\n/* harmony export */   \"offerSlide\": () => (/* binding */ offerSlide),\n/* harmony export */   \"current\": () => (/* binding */ current),\n/* harmony export */   \"tabheaderItem\": () => (/* binding */ tabheaderItem),\n/* harmony export */   \"tabContent\": () => (/* binding */ tabContent)\n/* harmony export */ });\nvar arrows = document.querySelector('.offer__slider-counter');\nvar arrowRight = document.querySelector('img[alt=\"next\"]');\nvar arrowLeft = document.querySelector('img[alt=\"prev\"]');\nvar total = arrows.querySelector('#total');\nvar imgSlide = document.querySelector('.mini').children;\nvar offerSlide = document.querySelector('.offer__slide').firstElementChild;\nvar current = arrows.querySelector('#current');\nvar tabheaderItem = document.querySelector('.tabheader__items');\nvar tabContent = document.querySelector('.tabcontent');\n\nfunction setCount(par, par2) {\n  if (par < 10) {\n    par2.textContent = \"0\".concat(par);\n  } else {\n    par2.textContent = \"\".concat(par);\n  }\n}\n\n\n\n//# sourceURL=webpack://webpack_start/./src/components/addZero.js?");

/***/ }),

/***/ "./src/components/colculator.js":
/*!**************************************!*\
  !*** ./src/components/colculator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateActive\": () => (/* binding */ calculateActive),\n/* harmony export */   \"calculateCalories\": () => (/* binding */ calculateCalories),\n/* harmony export */   \"parameters\": () => (/* binding */ parameters)\n/* harmony export */ });\n// const gend = document.querySelector('#gender');\n// const activity = document.querySelector('.calculating__choose_big');\n// const showCalculator = document.querySelector('#show_calc');\n// const calculator = document.querySelector('.calculating__field');\nvar calculateCalories = function calculateCalories() {\n  var gender = document.querySelector('.calculating__choose-item_active').dataset.gender;\n  var height = document.querySelector('#height');\n  var weight = document.querySelector('#weight');\n  var age = document.querySelector('#age');\n  var active = document.getElementsByClassName('calculating__choose-item_active')[1].dataset.active;\n  var result = document.querySelector('.calculating__result').firstElementChild;\n  var sum = Number(gender) + Number(height.value) + Number(weight.value) + Number(age.value) + Number(active);\n  result.textContent = \"\".concat(sum, \"00\");\n};\n\nvar calculateActive = function calculateActive(event, parEl) {\n  var target = event.target;\n  var actGend = parEl.querySelector('.calculating__choose-item_active');\n\n  if (target.className === 'calculating__choose-item') {\n    actGend.classList.remove('calculating__choose-item_active');\n    target.classList.add('calculating__choose-item_active');\n  }\n\n  calculateCalories();\n};\n\nvar parameters = function parameters() {\n  var param = document.querySelector('.calculating__choose_medium').childNodes;\n  param.forEach(function (inp) {\n    inp.addEventListener('change', function () {\n      calculateCalories();\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack_start/./src/components/colculator.js?");

/***/ }),

/***/ "./src/components/feedBack.js":
/*!************************************!*\
  !*** ./src/components/feedBack.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal),\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"modelInCard\": () => (/* binding */ modelInCard),\n/* harmony export */   \"closeM\": () => (/* binding */ closeM),\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"answer\": () => (/* binding */ answer),\n/* harmony export */   \"modalCloseBtn\": () => (/* binding */ modalCloseBtn),\n/* harmony export */   \"addCardBtn\": () => (/* binding */ addCardBtn),\n/* harmony export */   \"order\": () => (/* binding */ order),\n/* harmony export */   \"firstName\": () => (/* binding */ firstName),\n/* harmony export */   \"phone\": () => (/* binding */ phone),\n/* harmony export */   \"modalTrigger\": () => (/* binding */ modalTrigger)\n/* harmony export */ });\n/* harmony import */ var _utils_postDataLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/postDataLocal */ \"./src/utils/postDataLocal.js\");\n\nvar addCard = document.querySelector('[data-card]');\nvar modal = document.querySelector('[data-user]');\nvar answer = document.querySelector('.answer');\nvar modalCloseBtn = document.querySelectorAll('[data-close]');\nvar addCardBtn = document.querySelector('[href=\"#\"]');\nvar order = document.querySelector('.order');\nvar firstName = document.querySelector('input[name=\"name\"]');\nvar phone = document.querySelector('input[name=\"phone\"]');\nvar modalTrigger = document.querySelector('button[data-modal]');\n\nvar closeModal = function closeModal(wind) {\n  wind.classList.add('hide');\n  wind.classList.remove('show');\n  document.body.style.overflow = '';\n};\n\nvar openModal = function openModal(wind, addPhone) {\n  wind.classList.add('show');\n  wind.classList.remove('hide');\n  document.body.style.overflow = 'hidden';\n  addPhone.addEventListener('click', function () {\n    (0,_utils_postDataLocal__WEBPACK_IMPORTED_MODULE_0__.addUserPhone)(addPhone);\n  });\n};\n\nvar closeM = function closeM(wind) {\n  wind.addEventListener('click', function (e) {\n    if (e.target === wind) {\n      closeModal(wind);\n    }\n  });\n};\n\nvar modelInCard = function modelInCard() {\n  var modalTrigger = document.querySelector('button[data-modal]');\n  var modal = document.querySelector('[data-user]');\n  var modalCloseBtn = document.querySelectorAll('[data-close]');\n  var btnAddUserPhone = document.querySelector('#btnThree');\n  modalTrigger.addEventListener('click', function () {\n    openModal(modal, btnAddUserPhone);\n  });\n  modalCloseBtn.forEach(function (el) {\n    el.addEventListener('click', function () {\n      closeModal(modal);\n      closeModal(addCard);\n    });\n  });\n  modal.addEventListener('click', function (e) {\n    if (e.target === modal) {\n      closeModal(modal);\n    }\n  });\n  document.addEventListener('keydown', function (e) {\n    if (e.code === \"Escape\" && modal.classList.contains('show')) {\n      closeModal(modal);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack_start/./src/components/feedBack.js?");

/***/ }),

/***/ "./src/components/timer.js":
/*!*********************************!*\
  !*** ./src/components/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myDate\": () => (/* binding */ myDate),\n/* harmony export */   \"setClock\": () => (/* binding */ setClock)\n/* harmony export */ });\nvar myDate = '2021-08-19';\n\nvar getTame = function getTame(arg) {\n  var t = Date.parse(myDate) - Date.parse(new Date()),\n      days = Math.floor(t / (1000 * 60 * 60 * 24)),\n      hours = Math.floor(t / (1000 * 60 * 60) % 24),\n      minutes = Math.floor(t / (1000 * 60) % 60),\n      seconds = Math.floor(t / 1000 % 60);\n  return {\n    'total': t,\n    'days': days,\n    'hours': hours,\n    'minuts': minutes,\n    'seconds': seconds\n  };\n};\n\nvar getZiro = function getZiro(num) {\n  if (num >= 0 && num < 10) {\n    return \"0\".concat(num);\n  } else {\n    return num;\n  }\n};\n\nvar setClock = function setClock(selektor, idishen) {\n  var timer = document.querySelector(selektor),\n      days = timer.querySelector('#days'),\n      hours = timer.querySelector('#hours'),\n      minutes = timer.querySelector('#minutes'),\n      seconds = timer.querySelector('#seconds'),\n      timeInterval = setInterval(updateClock, 1000);\n  updateClock();\n\n  function updateClock() {\n    var t = getTame(idishen);\n    days.innerHTML = getZiro(t.days);\n    hours.innerHTML = getZiro(t.hours);\n    minutes.innerHTML = getZiro(t.minuts);\n    seconds.innerHTML = getZiro(t.seconds);\n\n    if (t.total === 0) {\n      clearInterval(timeInterval);\n    }\n  }\n};\n\n\n\n//# sourceURL=webpack://webpack_start/./src/components/timer.js?");

/***/ }),

/***/ "./src/components/variables.js":
/*!*************************************!*\
  !*** ./src/components/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gend\": () => (/* binding */ gend),\n/* harmony export */   \"activity\": () => (/* binding */ activity),\n/* harmony export */   \"showCalculator\": () => (/* binding */ showCalculator),\n/* harmony export */   \"calculator\": () => (/* binding */ calculator)\n/* harmony export */ });\n// calculator variables\nvar gend = document.querySelector('#gender');\nvar activity = document.querySelector('.calculating__choose_big');\nvar showCalculator = document.querySelector('#show_calc');\nvar calculator = document.querySelector('.calculating__field'); // modal variables\n// const modal = document.querySelector('[data-user]');\n// const answer = document.querySelector('.answer');\n// const modalCloseBtn = document.querySelectorAll('[data-close]');\n// const addCardBtn = document.querySelector('[href=\"#\"]');\n// const order = document.querySelector('.order');\n// const firstName = document.querySelector('input[name=\"name\"]');\n// const phone = document.querySelector('input[name=\"phone\"]');\n// const modalTrigger = document.querySelector('button[data-modal]');\n// Tabe_menu && slider variables\n// const arrows = document.querySelector('.offer__slider-counter');\n// const arrowRight = document.querySelector('img[alt=\"next\"]');\n// const arrowLeft = document.querySelector('img[alt=\"prev\"]');\n// const total = arrows.querySelector('#total');\n// const imgSlide = document.querySelector('.mini').children;\n// const offerSlide = document.querySelector('.offer__slide').firstElementChild;\n// const current = arrows.querySelector('#current');\n// const tabheaderItem = document.querySelector('.tabheader__items');\n// const tabContent = document.querySelector('.tabcontent');\n\n\n\n//# sourceURL=webpack://webpack_start/./src/components/variables.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _components_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/variables */ \"./src/components/variables.js\");\n/* harmony import */ var _components_colculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/colculator */ \"./src/components/colculator.js\");\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\n/* harmony import */ var _components_addZero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/addZero */ \"./src/components/addZero.js\");\n/* harmony import */ var _components_feedBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/feedBack */ \"./src/components/feedBack.js\");\n/* harmony import */ var _utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/postDataLocal */ \"./src/utils/postDataLocal.js\");\n/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/timer */ \"./src/components/timer.js\");\n\n\n\n\n\n\n\n\n\nvar router = function router() {\n  // calculator\n  _components_variables__WEBPACK_IMPORTED_MODULE_1__.showCalculator.addEventListener('click', function () {\n    _components_variables__WEBPACK_IMPORTED_MODULE_1__.calculator.classList.toggle('deployed');\n  });\n  _components_variables__WEBPACK_IMPORTED_MODULE_1__.gend.addEventListener('click', function (event) {\n    (0,_components_colculator__WEBPACK_IMPORTED_MODULE_2__.calculateActive)(event, _components_variables__WEBPACK_IMPORTED_MODULE_1__.gend);\n  });\n  _components_variables__WEBPACK_IMPORTED_MODULE_1__.activity.addEventListener('click', function (event) {\n    (0,_components_colculator__WEBPACK_IMPORTED_MODULE_2__.calculateActive)(event, _components_variables__WEBPACK_IMPORTED_MODULE_1__.activity);\n  });\n  (0,_components_colculator__WEBPACK_IMPORTED_MODULE_2__.calculateCalories)();\n  (0,_components_colculator__WEBPACK_IMPORTED_MODULE_2__.parameters)(); // loading cards from the server\n\n  (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_3__.getCardsFirstPage)(); // miniSlider\n\n  var count = 1;\n  _components_addZero__WEBPACK_IMPORTED_MODULE_4__.offerSlide.src = _components_addZero__WEBPACK_IMPORTED_MODULE_4__.imgSlide[count - 1].src;\n  _components_addZero__WEBPACK_IMPORTED_MODULE_4__.total.textContent = _components_addZero__WEBPACK_IMPORTED_MODULE_4__.imgSlide.length;\n  _components_addZero__WEBPACK_IMPORTED_MODULE_4__.arrowRight.addEventListener('click', function () {\n    if (_components_addZero__WEBPACK_IMPORTED_MODULE_4__.current.textContent <= _components_addZero__WEBPACK_IMPORTED_MODULE_4__.imgSlide.length - 1) {\n      ++count;\n      _components_addZero__WEBPACK_IMPORTED_MODULE_4__.offerSlide.src = _components_addZero__WEBPACK_IMPORTED_MODULE_4__.imgSlide[count - 1].src;\n      (0,_components_addZero__WEBPACK_IMPORTED_MODULE_4__.setCount)(count, _components_addZero__WEBPACK_IMPORTED_MODULE_4__.current);\n    }\n  });\n  _components_addZero__WEBPACK_IMPORTED_MODULE_4__.arrowLeft.addEventListener('click', function () {\n    if (_components_addZero__WEBPACK_IMPORTED_MODULE_4__.current.textContent > 1) {\n      --count;\n      _components_addZero__WEBPACK_IMPORTED_MODULE_4__.offerSlide.src = _components_addZero__WEBPACK_IMPORTED_MODULE_4__.imgSlide[count - 1].src;\n      (0,_components_addZero__WEBPACK_IMPORTED_MODULE_4__.setCount)(count, _components_addZero__WEBPACK_IMPORTED_MODULE_4__.current);\n    }\n  });\n  (0,_components_addZero__WEBPACK_IMPORTED_MODULE_4__.setCount)(_components_addZero__WEBPACK_IMPORTED_MODULE_4__.imgSlide.length, _components_addZero__WEBPACK_IMPORTED_MODULE_4__.total); // Tabe_menu && slider\n\n  _components_addZero__WEBPACK_IMPORTED_MODULE_4__.tabheaderItem.addEventListener('click', function (event) {\n    var tab = event.target;\n    var actvTabe = _components_addZero__WEBPACK_IMPORTED_MODULE_4__.tabheaderItem.querySelector('.active__item');\n    var imgTab = document.querySelectorAll('div[data-img]');\n\n    if (tab.className === 'tabheader__item') {\n      actvTabe.classList.remove('active__item');\n      tab.classList.add('active__item');\n      imgTab.forEach(function (el) {\n        if (el.dataset.img === tab.dataset.tabe) {\n          var atrValue = el.firstElementChild.getAttribute('src');\n          var content = el.lastElementChild.textContent;\n          _components_addZero__WEBPACK_IMPORTED_MODULE_4__.tabContent.firstElementChild.setAttribute('src', atrValue);\n          _components_addZero__WEBPACK_IMPORTED_MODULE_4__.tabContent.classList.add('fade');\n          setTimeout(function () {\n            _components_addZero__WEBPACK_IMPORTED_MODULE_4__.tabContent.classList.remove('fade');\n          }, 500);\n          _components_addZero__WEBPACK_IMPORTED_MODULE_4__.tabContent.lastElementChild.textContent = content;\n        }\n      });\n    }\n  }); // Model feedback\n\n  _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.modalTrigger.addEventListener('click', function () {\n    (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.openModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.modal, _utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__.btnSendmodel);\n  });\n  _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.modalCloseBtn.forEach(function (el) {\n    el.addEventListener('click', function () {\n      (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.answer);\n      (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.modal);\n      (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.addCard);\n    });\n  });\n  (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeM)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.modal);\n  (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeM)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.answer);\n  document.addEventListener('keydown', function (e) {\n    if (e.code === \"Escape\" && _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.modal.classList.contains('show')) {\n      (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.modal);\n    }\n  });\n  _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.addCardBtn.addEventListener('click', function () {\n    (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.openModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.addCard);\n  });\n  _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.addCard.addEventListener('click', function (e) {\n    if (e.target === _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.addCard) {\n      (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.addCard);\n    }\n  });\n  _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.order.addEventListener('click', function (event) {\n    event.preventDefault();\n\n    if (event.target.className === 'btn btn_dark btn_min') {\n      _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.firstName.value = '';\n      _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.phone.value = '';\n      console.log(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.firstName.value, _components_feedBack__WEBPACK_IMPORTED_MODULE_5__.phone.value);\n    }\n  }); // Add new card\n\n  _utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__.dataServer.addEventListener('click', _utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__.addNewCard); // Add userPhone\n\n  _utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__.btnDark.addEventListener('click', function () {\n    (0,_utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__.addUserPhone)(_utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__.btnDark);\n    (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.openModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.answer, _utils_postDataLocal__WEBPACK_IMPORTED_MODULE_6__.btnDark);\n    setTimeout(function () {\n      (0,_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.closeModal)(_components_feedBack__WEBPACK_IMPORTED_MODULE_5__.answer);\n    }, 10000);\n  }); // Timer\n\n  (0,_components_timer__WEBPACK_IMPORTED_MODULE_7__.setClock)('.timer', _components_timer__WEBPACK_IMPORTED_MODULE_7__.myDate);\n};\n\nrouter();\n\n//# sourceURL=webpack://webpack_start/./src/js/index.js?");

/***/ }),

/***/ "./src/utils/getDataLocal.js":
/*!***********************************!*\
  !*** ./src/utils/getDataLocal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCardsFirstPage\": () => (/* binding */ getCardsFirstPage),\n/* harmony export */   \"getCrds\": () => (/* binding */ getCrds),\n/* harmony export */   \"allMenu\": () => (/* binding */ allMenu),\n/* harmony export */   \"nav\": () => (/* binding */ nav)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar CARDS_LOCAL = 'http://localhost:3000/cards';\nvar allMenu = document.querySelector('.all__menu');\nvar nav = document.querySelector('nav');\n\nvar getResource = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var res;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(CARDS_LOCAL);\n\n          case 2:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.json());\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getResource() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getCardsFirstPage = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {\n    var data, container, count;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getResource();\n\n          case 2:\n            data = _context2.sent;\n            container = document.querySelector('div[data-cards]');\n            count = 0;\n            data.forEach(function (card) {\n              count++;\n\n              if (count <= 3) {\n                container.innerHTML += \"\\n                                    <div class=\\\"menu__item card\\\" >\\n                                    <img src=\\\"\".concat(card.img, \"\\\" alt=\\\"fitnes\\\">\\n                                    <h3 class=\\\"menu__item-subtitle\\\">\").concat(card.menu, \"</h3>\\n                                    <div class=\\\"menu__item-descr\\\">\").concat(card.text, \"</div>\\n                                    <div class=\\\"menu__item-divider\\\"></div>\\n                                    <div class=\\\"menu__item-price\\\">\\n                                        <div class=\\\"menu__item-cost\\\">\\u0426\\u0435\\u043D\\u0430:</div>\\n                                        <div class=\\\"menu__item-total\\\"><span>\").concat(card.price, \"</span> \\u0440\\u0443\\u0431/\\u0434\\u0435\\u043D\\u044C</div>\\n                                    </div>\\n                                </div>\\n                                    \");\n              }\n            });\n\n          case 6:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getCardsFirstPage() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar getCrds = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {\n    var data;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getResource();\n\n          case 2:\n            data = _context3.sent;\n            data.forEach(function (card) {\n              allMenu.innerHTML += \"\\n                                    <div class=\\\"menu__item card\\\" id=\\\"\".concat(card.id, \"\\\" data-category=\").concat(card.category, \" data-price=\").concat(card.price, \">\\n                                    <img src=\\\"\").concat(card.img, \"\\\" alt=\\\"fitnes\\\" class=\\\"open\\\">\\n                                    <h3 class=\\\"menu__item-subtitle\\\">\").concat(card.menu, \"</h3>\\n                                    <div class=\\\"menu__item-descr\\\">\").concat(card.text, \"</div>\\n                                    <div class=\\\"menu__item-divider\\\"></div>\\n                                    <div class=\\\"menu__item-price\\\">\\n                                        <div class=\\\"menu__item-cost\\\">\\u0426\\u0435\\u043D\\u0430:</div>\\n                                        <div class=\\\"menu__item-total\\\"><span>\").concat(card.price, \"</span> \\u0440\\u0443\\u0431/\\u0434\\u0435\\u043D\\u044C</div>\\n                                    </div>\\n                                    \\n                                        <span class=\\\"tooltiptext\\\">\\u041A\\u043B\\u0438\\u043A\\u043D\\u0438\\u0442\\u0435 \\u0447\\u0442\\u043E\\u0431\\u044B \\u0440\\u0430\\u0441\\u043A\\u0440\\u044B\\u0442\\u044C</span>\\n\\xA0                                  \\n                                </div>\\n                                \");\n            });\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function getCrds() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/utils/getDataLocal.js?");

/***/ }),

/***/ "./src/utils/postDataLocal.js":
/*!************************************!*\
  !*** ./src/utils/postDataLocal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewCard\": () => (/* binding */ addNewCard),\n/* harmony export */   \"dataServer\": () => (/* binding */ dataServer),\n/* harmony export */   \"addUserPhone\": () => (/* binding */ addUserPhone),\n/* harmony export */   \"btnSendmodel\": () => (/* binding */ btnSendmodel),\n/* harmony export */   \"btnDark\": () => (/* binding */ btnDark),\n/* harmony export */   \"btnTwo\": () => (/* binding */ btnTwo),\n/* harmony export */   \"addComments\": () => (/* binding */ addComments),\n/* harmony export */   \"btnSendmodel2\": () => (/* binding */ btnSendmodel2)\n/* harmony export */ });\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar dataServer = document.querySelector('[data-add_server]');\nvar btnSendmodel = document.querySelector('button[id=\"btn__send__model\"]');\nvar btnSendmodel2 = document.querySelector('#btnTwo');\nvar btnDark = document.querySelector('.btn_dark');\nvar btnTwo = document.querySelector('#btnTwo');\n\nvar addNewCard = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var info, nameMenu, price, foto, select;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            info = document.querySelector('[name=\"info\"]');\n            nameMenu = info.previousElementSibling;\n            price = document.querySelector('[name=\"price\"]');\n            foto = document.querySelector('[name=\"foto\"]');\n            select = document.querySelector('select');\n            _context.next = 7;\n            return fetch('http://localhost:3000/cards', {\n              method: \"POST\",\n              body: JSON.stringify({\n                \"category\": select.value,\n                \"img\": \"images/new_cards/\".concat(foto.value.slice(12)),\n                \"menu\": nameMenu.value,\n                \"text\": info.value,\n                \"price\": price.value\n              }),\n              headers: {\n                \"Content-type\": \"application/json; charset=utf-8\"\n              }\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function addNewCard() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar addUserPhone = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(prElement) {\n    var parEl, userName, userPhone;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            parEl = prElement.parentElement;\n            userName = parEl.querySelector('[data-userN]');\n            userPhone = parEl.querySelector('[data-usePh]');\n            _context2.next = 5;\n            return fetch('http://localhost:3000/user_phone', {\n              method: \"POST\",\n              body: JSON.stringify({\n                \"userName\": userName.value,\n                \"userPhone\": userPhone.value\n              }),\n              headers: {\n                \"Content-type\": \"application/json; charset=utf-8\"\n              }\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function addUserPhone(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar addComments = function addComments() {\n  var btnAddComment = document.querySelector('.button');\n  var userName = document.querySelector('#user__name');\n  var textComent = document.querySelector('#text__coment');\n  btnAddComment.addEventListener('click', function () {\n    fetch('http://localhost:3000/comments', {\n      method: \"POST\",\n      body: JSON.stringify({\n        \"ucerName\": userName.value,\n        \"comment\": textComent.value,\n        \"cardId\": btnAddComment.id\n      }),\n      headers: {\n        \"Content-type\": \"application/json; charset=utf-8\"\n      }\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      console.log(data);\n    });\n    userName.value = '';\n    textComent.value = '';\n  });\n};\n\n\n\n//# sourceURL=webpack://webpack_start/./src/utils/postDataLocal.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/icons/switch.svg */ \"./src/images/icons/switch.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap&subset=cyrillic-ext);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@charset \\\"UTF-8\\\";\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: Roboto, sans-serif; }\\n\\na {\\n  text-decoration: none; }\\n\\n.btn {\\n  width: 220px;\\n  height: 65px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: #fff;\\n  font-size: 18px;\\n  font-weight: 700;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\\n  cursor: pointer;\\n  transition: .3s all;\\n  outline: 0; }\\n\\n.btn_white {\\n  background-color: #fff; }\\n\\n.btn_dark {\\n  background-color: #303030;\\n  color: #fff;\\n  border: none; }\\n\\n.btn_min {\\n  height: 50px; }\\n\\n.btn:hover {\\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3); }\\n\\n.container {\\n  max-width: 1200px;\\n  margin: 0 auto; }\\n\\n.header__links {\\n  display: flex;\\n  align-items: center; }\\n\\n.header__link {\\n  position: relative;\\n  margin-right: 45px;\\n  font-weight: 700;\\n  font-size: 18px;\\n  color: #303030; }\\n\\n.header__link:after {\\n  content: '';\\n  position: absolute;\\n  display: block;\\n  width: 110%;\\n  left: -5%;\\n  bottom: -1px;\\n  z-index: -1;\\n  height: 8px;\\n  background: #54ed39; }\\n\\n.header__link:last-child {\\n  margin-right: 0; }\\n\\n.catalog {\\n  position: absolute;\\n  left: 314px;\\n  top: 66px; }\\n\\n.all__menu {\\n  display: flex;\\n  justify-content: space-evenly;\\n  flex-wrap: wrap;\\n  align-content: space-around;\\n  padding-top: 50px; }\\n\\n.card {\\n  margin-top: 35px;\\n  position: relative; }\\n\\n.header {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  height: 150px;\\n  padding: 0 100px; }\\n\\n.header__left-block {\\n  display: flex;\\n  justify-content: space-between;\\n  min-width: 550px; }\\n\\n.header__logo {\\n  max-width: 170px; }\\n\\n.header__logo img {\\n  width: 100%; }\\n\\n.header__links {\\n  display: flex;\\n  align-items: center; }\\n\\n.header__link {\\n  position: relative;\\n  margin-right: 45px;\\n  font-weight: 700;\\n  font-size: 18px;\\n  color: #303030; }\\n\\n.header__link:after {\\n  content: '';\\n  position: absolute;\\n  display: block;\\n  width: 110%;\\n  left: -5%;\\n  bottom: -1px;\\n  z-index: -1;\\n  height: 8px;\\n  background: #54ed39; }\\n\\n.header__link:last-child {\\n  margin-right: 0; }\\n\\n.preview {\\n  padding: 28px 0 100px 0;\\n  position: relative; }\\n\\n.preview__life {\\n  font-weight: 700;\\n  font-size: 20px;\\n  margin-left: 35px;\\n  margin-top: 35px; }\\n\\n.bgc_blue {\\n  position: absolute;\\n  right: 0;\\n  top: -155px;\\n  width: 50vw;\\n  height: 900px;\\n  background: rgba(146, 242, 255, 0.15);\\n  z-index: -1; }\\n\\n.tabcontainer {\\n  display: flex;\\n  width: 1130px;\\n  margin: 0 auto;\\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25); }\\n\\n.tabcontent {\\n  width: 850px;\\n  position: relative;\\n  height: 512px; }\\n\\n.tabcontent img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover; }\\n\\n.tabcontent__descr {\\n  position: absolute;\\n  top: 263px;\\n  right: -177px;\\n  width: 550px;\\n  height: 359px;\\n  background: rgba(251, 254, 93, 0.8);\\n  padding: 50px;\\n  font-size: 24px;\\n  font-weight: 300;\\n  line-height: 36px;\\n  color: rgba(0, 0, 0, 0.7); }\\n\\n.tabheader {\\n  width: 280px;\\n  padding: 35px 30px;\\n  background-color: #fff; }\\n\\n.tabheader h3 {\\n  font-weight: 700;\\n  font-size: 16px; }\\n\\n.tabheader__items {\\n  margin-top: 35px;\\n  padding-left: 26px;\\n  border-left: 1px solid #000; }\\n\\n.tabheader__item {\\n  font-weight: 700;\\n  font-size: 18px;\\n  font-weight: 300;\\n  margin-top: 10px;\\n  color: rgba(0, 0, 0, 0.6);\\n  cursor: pointer;\\n  transition: .3s all; }\\n\\n.active__item {\\n  font-size: 26px;\\n  font-weight: bold; }\\n\\n.tabheader__item_active {\\n  color: #000;\\n  font-size: 22px;\\n  font-weight: 700; }\\n\\n.imges__slid {\\n  display: none; }\\n\\n.divider {\\n  width: 330px;\\n  height: 1px;\\n  margin: 0 auto;\\n  background-color: rgba(0, 0, 0, 0.5); }\\n\\n.title {\\n  font-size: 36px;\\n  font-weight: 400; }\\n\\n.offer {\\n  padding: 70px 0 100px 0;\\n  position: relative; }\\n\\n.offer .container {\\n  display: flex;\\n  justify-content: space-between; }\\n\\n.offer {\\n  padding: 70px 0 100px 0;\\n  position: relative; }\\n\\n.offer .container {\\n  display: flex;\\n  justify-content: space-between; }\\n\\n.offer .bgc_y {\\n  position: absolute;\\n  width: 1109px;\\n  height: 780px;\\n  background: rgba(243, 255, 222, 0.45);\\n  z-index: -1;\\n  top: 50px; }\\n\\n.offer__text {\\n  width: 580px; }\\n\\n.offer__text {\\n  width: 580px; }\\n\\n.offer__descr {\\n  font-size: 18px;\\n  margin-top: 30px;\\n  font-weight: 300;\\n  line-height: 24px;\\n  color: rgba(0, 0, 0, 0.8); }\\n\\n.offer__action {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end; }\\n\\n.offer__advantages {\\n  width: 330px;\\n  margin-top: 50px; }\\n\\n.offer__advantages h2 {\\n  font-weight: 700;\\n  font-size: 20px;\\n  margin-top: 20px; }\\n\\n.offer__advantages h2:first-child {\\n  margin-top: 70px; }\\n\\n.offer__advantages-text {\\n  margin-top: 20px;\\n  font-size: 18px;\\n  font-weight: 300;\\n  line-height: 21px;\\n  color: black; }\\n\\n.offer__slider {\\n  width: 650px;\\n  margin-top: 50px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end; }\\n\\n.offer__slider-counter {\\n  display: flex;\\n  width: 180px;\\n  align-items: center;\\n  font-size: 24px;\\n  color: rgba(0, 0, 0, 0.5); }\\n\\n.offer__slider-wrapper {\\n  width: 100%;\\n  margin-top: 15px;\\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25); }\\n\\n.offer__slider-prev {\\n  margin-right: 10px;\\n  cursor: pointer; }\\n\\n.offer__slider-next {\\n  margin-left: 10px;\\n  cursor: pointer; }\\n\\n.offer__slider #current {\\n  font-size: 48px;\\n  font-weight: 700;\\n  color: #000; }\\n\\n.offer__slide {\\n  width: 100%;\\n  height: 390px; }\\n\\n.offer__slide img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover; }\\n\\n.calculating {\\n  padding: 50px 0; }\\n\\n.calculating .title {\\n  text-align: center; }\\n\\n.calculating__field {\\n  width: 100%;\\n  background: rgba(146, 242, 255, 0.15);\\n  margin-top: 50px;\\n  overflow: hidden;\\n  height: auto;\\n  max-height: 0;\\n  -webkit-transition: max-height 1s ease-in-out;\\n  -moz-transition: max-height 1s ease-in-out;\\n  -o-transition: max-height 1s ease-in-out;\\n  transition: max-height 1s  ease-in-out; }\\n\\n.deployed {\\n  max-height: 600px; }\\n\\n.calculating__subtitle {\\n  text-align: center;\\n  font-size: 18px;\\n  font-weight: 700;\\n  margin-top: 30px; }\\n\\n.calculating__subtitle:first-child {\\n  margin-top: 0; }\\n\\n.calculating #gender:after {\\n  content: '';\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  display: block;\\n  width: 16px;\\n  height: 16px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center center/cover no-repeat; }\\n\\n.calculating__choose {\\n  position: relative;\\n  display: flex;\\n  margin-top: 30px;\\n  justify-content: center; }\\n\\n.calculating__choose-item {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 170px;\\n  height: 50px;\\n  padding: 0 10px;\\n  background: #fff;\\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\\n  border: none;\\n  text-align: center;\\n  font-size: 14px;\\n  cursor: pointer;\\n  outline: 0;\\n  transition: .3s all; }\\n\\n.calculating__choose-item_active {\\n  color: #fff;\\n  background-color: #54ed39; }\\n\\n.calculating__choose_medium {\\n  width: 743px;\\n  justify-content: space-between;\\n  margin: 30px auto 0 auto; }\\n\\n.calculating__choose_big {\\n  width: 930px;\\n  justify-content: space-between;\\n  margin: 30px auto 0 auto; }\\n\\n.calculating__choose_big .calculating__choose-item {\\n  width: 200px; }\\n\\n.calculating__divider {\\n  width: 490px;\\n  height: 1px;\\n  margin: 40px auto;\\n  background-color: rgba(0, 0, 0, 0.2); }\\n\\n.calculating__total {\\n  width: 490px;\\n  margin: 0 auto;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.calculating__result {\\n  font-size: 18px;\\n  font-weight: 700; }\\n\\n.calculating__result span {\\n  font-size: 42px; }\\n\\n.menu {\\n  padding: 40px 0 50px 0; }\\n\\n.menu .container {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-start; }\\n\\n.menu .title {\\n  text-align: center; }\\n\\n.menu__field {\\n  margin-top: 50px;\\n  padding: 50px 0;\\n  width: 100%;\\n  background: rgba(249, 254, 126, 0.25); }\\n\\n.menu__item {\\n  width: 320px;\\n  height: 500px;\\n  background: #fff;\\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\\n  font-size: 16px;\\n  font-weight: 300; }\\n\\n.menu__item-cost {\\n  margin-right: 140px; }\\n\\n.menu__item img {\\n  width: 100%;\\n  height: 200px;\\n  object-fit: cover; }\\n\\n.menu__item-subtitle {\\n  font-weight: 700;\\n  font-size: 18px;\\n  padding: 0 20px;\\n  margin-top: 20px; }\\n\\n.menu__item-descr {\\n  margin-top: 20px;\\n  padding: 0 20px;\\n  height: 160px;\\n  text-overflow: ellipsis;\\n  overflow-y: auto; }\\n\\n.menu__item-divider {\\n  width: 100%;\\n  height: 1px;\\n  background-color: rgba(0, 0, 0, 0.25);\\n  position: relative;\\n  bottom: -24px; }\\n\\n.menu__item-price {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 10px 20px;\\n  position: absolute;\\n  bottom: -2px; }\\n\\n.menu__item-price span {\\n  font-size: 24px;\\n  font-weight: 700; }\\n\\n.category {\\n  position: relative;\\n  left: 188px;\\n  top: 20px; }\\n\\n#foto {\\n  text-align: center;\\n  display: table-cell;\\n  vertical-align: middle;\\n  margin-bottom: 0px;\\n  position: relative;\\n  bottom: 5px;\\n  left: 69px;\\n  color: #6f6d6d; }\\n\\nselect {\\n  color: #6f6d6d; }\\n\\n.order {\\n  padding-bottom: 80px; }\\n\\n.order .title {\\n  text-align: center; }\\n\\n.order__form {\\n  margin-top: 70px;\\n  padding: 0 100px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.order__form img {\\n  transform: scale(1.5); }\\n\\n.order__input {\\n  width: 280px;\\n  height: 50px;\\n  background: #fff;\\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\\n  border: none;\\n  font-size: 18px;\\n  text-align: center;\\n  padding: 0 20px;\\n  outline: 0; }\\n\\n.promotion {\\n  padding: 70px 0 240px 0;\\n  position: relative; }\\n\\n.promotion .container {\\n  display: flex; }\\n\\n.promotion .bgc_y {\\n  position: absolute;\\n  width: 50%;\\n  height: 499px;\\n  background: rgba(243, 255, 222, 0.35);\\n  z-index: -1;\\n  top: -50px;\\n  left: 0; }\\n\\n.promotion__text {\\n  width: 50%; }\\n\\n.promotion__descr {\\n  margin-top: 40px;\\n  font-size: 20px;\\n  line-height: 24px;\\n  font-weight: 300; }\\n\\n.promotion__descr span {\\n  font-weight: 700;\\n  font-size: 26px; }\\n\\n.promotion__timer {\\n  width: 50%; }\\n\\n.promotion__timer .title {\\n  text-align: right; }\\n\\n.promotion__timer .timer {\\n  margin-top: 60px;\\n  padding-left: 95px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.promotion__timer .timer__block {\\n  width: 102px;\\n  height: 120px;\\n  background: #fff;\\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);\\n  font-size: 16px;\\n  font-weight: 300;\\n  text-align: center; }\\n\\n.promotion__timer .timer__block span {\\n  display: block;\\n  margin-top: 20px;\\n  margin-bottom: 5px;\\n  font-size: 56px;\\n  font-weight: 700; }\\n\\n.footer {\\n  min-height: 180px;\\n  background-color: #303030;\\n  padding: 45px 0 50px 0;\\n  color: #fff;\\n  margin-top: 40px; }\\n\\n.footer .container {\\n  height: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-end; }\\n\\n.footer .subtitle {\\n  font-size: 20px; }\\n\\n.footer .link {\\n  display: block;\\n  margin-top: 15px;\\n  font-size: 16px;\\n  color: #fff; }\\n\\n.link__icons {\\n  height: 25px;\\n  margin: 10px; }\\n\\n.footer .call {\\n  text-align: right; }\\n\\n.modal {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 1050;\\n  display: none;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  background-color: rgba(0, 0, 0, 0.5); }\\n\\n.modal__dialog {\\n  max-width: 500px;\\n  margin: 40px auto; }\\n\\n.modal__content {\\n  position: relative;\\n  width: 100%;\\n  padding: 40px;\\n  background-color: #fff;\\n  border: 1px solid rgba(0, 0, 0, 0.2);\\n  border-radius: 4px;\\n  max-height: 80vh;\\n  overflow-y: auto; }\\n\\n.modal__close {\\n  position: absolute;\\n  top: 8px;\\n  right: 14px;\\n  font-size: 30px;\\n  color: #000;\\n  opacity: .5;\\n  font-weight: 700;\\n  border: none;\\n  background-color: transparent;\\n  cursor: pointer; }\\n\\n.modal__title {\\n  text-align: center;\\n  font-size: 22px;\\n  text-transform: uppercase; }\\n\\n.modal__input {\\n  display: block;\\n  margin: 20px auto 20px auto;\\n  width: 280px;\\n  height: 50px;\\n  background: #fff;\\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\\n  border: none;\\n  font-size: 18px;\\n  text-align: center;\\n  padding: 0 20px;\\n  outline: 0; }\\n\\ninput[type=\\\"file\\\"] {\\n  display: none; }\\n\\n.modal .btn {\\n  display: block;\\n  width: 280px;\\n  margin: 0 auto; }\\n\\n.show {\\n  display: block; }\\n\\n.hide {\\n  display: none; }\\n\\n.fade {\\n  animation-name: fade;\\n  animation-duration: 1.5s; }\\n\\n@keyframes fade {\\n  from {\\n    opacity: 0.1; }\\n  to {\\n    opacity: 1; } }\\n\\n.card .tooltiptext {\\n  visibility: hidden;\\n  width: 205px;\\n  height: 71px;\\n  background-color: #555;\\n  color: #fff;\\n  text-align: center;\\n  padding: 5px 0;\\n  border-radius: 6px;\\n  font-size: 24px;\\n  /* Расположите текст подсказки */\\n  position: absolute;\\n  z-index: 1;\\n  bottom: 101%;\\n  left: 62%;\\n  margin-left: -60px;\\n  /* Исчезают в подсказке */\\n  opacity: 0;\\n  transition: opacity 0.7s; }\\n\\n/* Подсказка стрелка */\\n.card .tooltiptext::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 100%;\\n  left: 50%;\\n  margin-left: -5px;\\n  border-width: 5px;\\n  border-style: solid;\\n  border-color: #555 transparent transparent transparent; }\\n\\n/* Отображение текста подсказки при наведении курсора мыши на контейнер подсказки */\\n.card:hover .tooltiptext {\\n  visibility: visible;\\n  opacity: 1; }\\n\\n.comment {\\n  margin: 40px 0 20px 20px; }\\n\\n.images {\\n  height: 700px;\\n  width: 1100px;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  margin: 40px auto; }\\n\\n.button {\\n  border: solid 1px;\\n  width: 205px;\\n  height: 35px;\\n  border-radius: 3px;\\n  margin-top: 10px;\\n  line-height: 35px;\\n  text-align: center;\\n  background-color: #303030;\\n  color: white; }\\n\\n.button:hover {\\n  cursor: pointer; }\\n\\n.button:active {\\n  width: 202px;\\n  height: 32px;\\n  line-height: 32px;\\n  margin-bottom: 23px; }\\n\\n#text__coment {\\n  width: 60%;\\n  height: 100px;\\n  resize: none;\\n  padding: 5px; }\\n\\n.line {\\n  text-align: center;\\n  font-size: 20px;\\n  background-color: #53ed39; }\\n\\n.user__comments {\\n  text-align: center;\\n  margin: 20px; }\\n\\n.user__comment {\\n  text-align: left;\\n  margin: 20px;\\n  border: solid #0000003d 1px;\\n  border-radius: 3px;\\n  padding-left: 10px; }\\n\\n.user__form {\\n  display: block;\\n  margin-top: 10px;\\n  padding-left: 3px; }\\n\\n.user {\\n  text-decoration: underline; }\\n\\n.user__form:focus {\\n  outline: none;\\n  border-color: #53ed39;\\n  border-radius: 3px; }\\n\\n#show_calc {\\n  font-size: 36px;\\n  transition-property: font-size;\\n  transition-duration: .4s; }\\n\\n#show_calc:hover {\\n  cursor: pointer;\\n  font-size: 40px;\\n  color: #555; }\\n\\n.box__images {\\n  text-align: center; }\\n\\n#title__card {\\n  text-align: center; }\\n\\n#info__card {\\n  padding: 0 100px; }\\n\\n.mess {\\n  text-align: center; }\\n  .mess img {\\n    height: 60px; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_start/./src/style/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_start/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack_start/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = GeneratorFunctionPrototype;\n  define(Gp, \"constructor\", GeneratorFunctionPrototype);\n  define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction);\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  });\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  define(Gp, iteratorSymbol, function() {\n    return this;\n  });\n\n  define(Gp, \"toString\", function() {\n    return \"[object Generator]\";\n  });\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, in modern engines\n  // we can explicitly access globalThis. In older engines we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://webpack_start/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack_start/./src/style/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/icons/switch.svg":
/*!*************************************!*\
  !*** ./src/images/icons/switch.svg ***!
  \*************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDhDMTUgMTEuODY2IDExLjg2NiAxNSA4IDE1QzQuMTM0MDEgMTUgMSAxMS44NjYgMSA4QzEgNC4xMzQwMSA0LjEzNDAxIDEgOCAxQzExLjg2NiAxIDE1IDQuMTM0MDEgMTUgOFoiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utb3BhY2l0eT0iMC41Ii8+CjxwYXRoIGQ9Ik01IDhMNy4yNSA0LjUzNTlMNy4yNSAxMS40NjQxTDUgOFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8cGF0aCBkPSJNMTEgOEw4Ljc1IDExLjQ2NDFMOC43NSA0LjUzNTlMMTEgOFoiIGZpbGw9ImJsYWNrIiBmaWxsLW9wYWNpdHk9IjAuNSIvPgo8L3N2Zz4K\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/switch.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("index." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("486a2e1edc4ed6d850e2")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack_start:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack_start"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;