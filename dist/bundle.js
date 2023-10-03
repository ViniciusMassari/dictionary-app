/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css\\\">\\r\\n    <title>Dictionary</title>\\r\\n</head>\\r\\n\\r\\n<body class=\\\"\\\">\\r\\n    <main class=\\\"main-container\\\">\\r\\n        <header>\\r\\n            <h1>\\r\\n                <i class=\\\"bi bi-book\\\"></i>\\r\\n            </h1>\\r\\n            <div class=\\\"options\\\">\\r\\n                <div class=\\\"font-selector\\\">\\r\\n                    <p class=\\\"selected-font\\\">Sans</p>\\r\\n                    <div class=\\\"selector\\\">\\r\\n                        <i class=\\\"bi bi-arrow-down-short\\\"></i>\\r\\n                        <ul class=\\\"fonts\\\">\\r\\n                            <li>serif</li>\\r\\n                            <li>sans-serif</li>\\r\\n                            <li>monospace</li>\\r\\n                        </ul>\\r\\n                    </div>\\r\\n                </div>\\r\\n                <div class=\\\"theme-selector\\\">\\r\\n                    <div class=\\\"slide\\\">\\r\\n                        <div class=\\\"circle\\\"></div>\\r\\n                    </div>\\r\\n                    <i class=\\\"bi bi-moon\\\"></i>\\r\\n                </div>\\r\\n            </div>\\r\\n        </header>\\r\\n        <section class=\\\"search container\\\">\\r\\n            <form id=\\\"searchForm\\\">\\r\\n                <input type=\\\"text\\\">\\r\\n                <button><i id=\\\"search\\\" class=\\\"bi bi-search\\\"></i></button>\\r\\n            </form>\\r\\n            <span class=\\\"searchError\\\">Error in search, try again !</span>\\r\\n        </section>\\r\\n        <section class=\\\"general-result\\\">\\r\\n            <section class=\\\"word-result container\\\">\\r\\n                <!-- <div class=\\\"word\\\">\\r\\n                    <h2></h2>\\r\\n                    <span class=\\\" purple\\\"></span> -->\\r\\n                </div>\\r\\n                <div class=\\\"audio\\\">\\r\\n                    <i class=\\\"bi bi-play-fill\\\" id=\\\"play\\\"></i>\\r\\n                    <audio>\\r\\n                    </audio>\\r\\n                </div>\\r\\n            </section>\\r\\n\\r\\n            <section class=\\\"meaning-result container\\\">\\r\\n\\r\\n            </section>\\r\\n        </section>\\r\\n    </main>\\r\\n    <footer class=\\\"container\\\">\\r\\n\\r\\n    </footer>\\r\\n\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://dictionary/./src/index.html?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dictionary/./src/styles.css?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n__webpack_require__(/*! ./index.html */ \"./src/index.html\");\nconst htmlManipulation_1 = __webpack_require__(/*! ./utils/htmlManipulation */ \"./src/utils/htmlManipulation.ts\");\nfunction isWordData(data) {\n    if (data && typeof data === 'object' && 'word' in data) {\n        return true;\n    }\n    else {\n        return false;\n    }\n}\nconst ACTIVE_CLASS = 'active';\nconst DARK_CLASS = 'dark';\n// Theme\nconst slide = document.querySelector('.slide');\nfunction darkThemeVerify() {\n    if (window.matchMedia(\"(max-width: 600px)\") && !document.body.classList.contains('dark')) {\n        const circle = document.querySelector('.circle');\n        circle === null || circle === void 0 ? void 0 : circle.classList.add(ACTIVE_CLASS);\n        slide === null || slide === void 0 ? void 0 : slide.classList.add(ACTIVE_CLASS);\n        document.body.classList.add(DARK_CLASS);\n    }\n}\ndarkThemeVerify();\nfunction toggleDarkTheme(e) {\n    e.preventDefault();\n    const circle = document.querySelector('.circle');\n    circle === null || circle === void 0 ? void 0 : circle.classList.toggle(ACTIVE_CLASS);\n    slide === null || slide === void 0 ? void 0 : slide.classList.toggle(ACTIVE_CLASS);\n    document.body.classList.toggle(DARK_CLASS);\n}\nslide === null || slide === void 0 ? void 0 : slide.addEventListener('click', toggleDarkTheme);\n// Font-selector\nconst fontSelector = document.querySelector('.selector');\nconst fontsList = document.querySelectorAll('.fonts li');\nfunction toggleFontSelector(e) {\n    const fonts = document.querySelector('.fonts');\n    fonts === null || fonts === void 0 ? void 0 : fonts.classList.toggle(ACTIVE_CLASS);\n}\nfunction toggleFont(e) {\n    const font = document.querySelector('.selected-font');\n    if (e.target instanceof HTMLElement && font) {\n        document.body.style.fontFamily = e.target.innerText;\n        fontSelector === null || fontSelector === void 0 ? void 0 : fontSelector.classList.remove(ACTIVE_CLASS);\n        font.innerText = e.target.innerText;\n    }\n}\nfontSelector === null || fontSelector === void 0 ? void 0 : fontSelector.addEventListener('click', toggleFontSelector);\nfontsList === null || fontsList === void 0 ? void 0 : fontsList.forEach(li => {\n    li.addEventListener('click', toggleFont);\n});\n// Search\nconst input = document.querySelector('input');\nconst search = document.querySelector('#search');\nfunction handleWordResult(data) {\n    const word = document.querySelector('.word');\n    const audio = document.querySelector('audio');\n    const footer = document.querySelector('footer');\n    const wordData = data[0];\n    const meaningResult = document.querySelector('.meaning-result');\n    const { meanings } = wordData;\n    if (meaningResult) {\n        meaningResult.innerHTML = '';\n    }\n    if (data && isWordData(wordData)) {\n        (0, htmlManipulation_1.setWordResultHTML)(word, wordData);\n        (0, htmlManipulation_1.setWordPhoneticResultHTML)(audio, wordData);\n        // meaning\n        if (meaningResult) {\n            meaningResult.innerHTML = `<p>${wordData.word}</p>`;\n            meanings.forEach(mean => {\n                meaningResult.innerHTML += ` \r\n    <div class=\"partOfSpeech\">\r\n                <p>${mean.partOfSpeech}</p>\r\n                <div class=\"bar\"></div>\r\n            </div>\r\n            <p>Meaning</p>\r\n            <ul class=\"definitions-list\">\r\n            ${mean.definitions.map((def) => {\n                    return `<li>${def.definition}\r\n              </li>\r\n              `;\n                }).join('')}\r\n            </ul>`;\n            });\n        }\n    }\n    // footer\n    if (footer) {\n        footer.innerHTML = `\r\n     <p>Source</p>\r\n        <a target=\"_blank\" href=\"${wordData.sourceUrls[0]}\">${wordData.sourceUrls[0]}</a>`;\n    }\n}\n// search handling\nfunction handleSearch(cacheSearch) {\n    return __awaiter(this, void 0, void 0, function* () {\n        if (input) {\n            let search;\n            cacheSearch ? search = cacheSearch : search = input.value;\n            localStorage.setItem('search', search);\n        }\n        const searchError = document.querySelector('.searchError');\n        const form = document.getElementById('searchForm');\n        const search = cacheSearch ? cacheSearch : input === null || input === void 0 ? void 0 : input.value;\n        const res = yield fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);\n        if (res.status === 404) {\n            form === null || form === void 0 ? void 0 : form.classList.add('error');\n            searchError === null || searchError === void 0 ? void 0 : searchError.classList.add(ACTIVE_CLASS);\n        }\n        else {\n            form === null || form === void 0 ? void 0 : form.classList.remove('error');\n            searchError === null || searchError === void 0 ? void 0 : searchError.classList.remove(ACTIVE_CLASS);\n            const resJson = yield res.json();\n            handleWordResult(resJson);\n        }\n    });\n}\nconst previousSearch = localStorage.getItem('search');\nif (previousSearch !== undefined && previousSearch) {\n    handleSearch(previousSearch);\n}\nsearch === null || search === void 0 ? void 0 : search.addEventListener('click', (e) => {\n    e.preventDefault();\n    handleSearch();\n});\n\n\n//# sourceURL=webpack://dictionary/./src/script.ts?");

/***/ }),

/***/ "./src/utils/htmlManipulation.ts":
/*!***************************************!*\
  !*** ./src/utils/htmlManipulation.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setWordPhoneticResultHTML = exports.setWordResultHTML = void 0;\nfunction setWordResultHTML(wordResultContainer, wordData) {\n    var _a, _b;\n    (wordResultContainer === null || wordResultContainer === void 0 ? void 0 : wordResultContainer.innerHTML) ? wordResultContainer.innerHTML = ` <h2>${(_a = wordData.word) !== null && _a !== void 0 ? _a : \"\"}</h2>\r\n                <span class=\" purple\">${(_b = wordData.phonetic) !== null && _b !== void 0 ? _b : \"\"}</span>` : '';\n}\nexports.setWordResultHTML = setWordResultHTML;\nfunction setWordPhoneticResultHTML(audioElement, wordData) {\n    wordData.phonetics.forEach(phonetic => {\n        const extension = phonetic.audio.substring(phonetic.audio.lastIndexOf('.') + 1);\n        if (audioElement && phonetic.audio !== '') {\n            audioElement.innerHTML = `<source src=\"${phonetic.audio}\" type=\"audio/${extension === 'mp3' ? 'mpeg' : extension}\">\r\n`;\n        }\n    });\n}\nexports.setWordPhoneticResultHTML = setWordPhoneticResultHTML;\n\n\n//# sourceURL=webpack://dictionary/./src/utils/htmlManipulation.ts?");

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.ts");
/******/ 	
/******/ })()
;