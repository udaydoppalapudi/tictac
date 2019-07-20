/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Board =\n/*#__PURE__*/\nfunction () {\n  function Board() {\n    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Array(9);\n\n    _classCallCheck(this, Board);\n\n    this.state = state;\n  }\n\n  _createClass(Board, [{\n    key: \"insert\",\n    value: function insert(symbol, position) {\n      if (position > 8 || this.state[position]) return false; //Cell is either occupied or does not exist\n\n      this.state[position] = symbol;\n      return true;\n    }\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty() {\n      return this.state.every(function (cell) {\n        return !cell;\n      });\n    }\n  }, {\n    key: \"isFull\",\n    value: function isFull() {\n      return this.state.every(function (cell) {\n        return cell;\n      });\n    }\n  }, {\n    key: \"getAvailableMoves\",\n    value: function getAvailableMoves() {\n      var moves = [];\n      this.state.forEach(function (cell, index) {\n        if (!cell) moves.push(index);\n      });\n      return moves;\n    }\n  }, {\n    key: \"isTerminal\",\n    value: function isTerminal() {\n      //Return False if board in empty\n      if (this.isEmpty()) return false; //Checking Horizontal Wins\n\n      if (this.state[0] == this.state[1] && this.state[0] == this.state[2] && this.state[0]) {\n        return {\n          'winner': this.state[0],\n          'direction': 'H',\n          'row': 1\n        };\n      }\n\n      if (this.state[3] == this.state[4] && this.state[3] == this.state[5] && this.state[3]) {\n        return {\n          'winner': this.state[3],\n          'direction': 'H',\n          'row': 2\n        };\n      }\n\n      if (this.state[6] == this.state[7] && this.state[6] == this.state[8] && this.state[6]) {\n        return {\n          'winner': this.state[6],\n          'direction': 'H',\n          'row': 3\n        };\n      } //Checking Vertical Wins\n\n\n      if (this.state[0] == this.state[3] && this.state[0] == this.state[6] && this.state[0]) {\n        return {\n          'winner': this.state[0],\n          'direction': 'V',\n          'row': 1\n        };\n      }\n\n      if (this.state[1] == this.state[4] && this.state[1] == this.state[7] && this.state[1]) {\n        return {\n          'winner': this.state[1],\n          'direction': 'V',\n          'row': 2\n        };\n      }\n\n      if (this.state[2] == this.state[5] && this.state[2] == this.state[8] && this.state[2]) {\n        return {\n          'winner': this.state[2],\n          'direction': 'V',\n          'row': 3\n        };\n      } //Checking Diagonal Wins\n\n\n      if (this.state[0] == this.state[4] && this.state[0] == this.state[8] && this.state[0]) {\n        return {\n          'winner': this.state[0],\n          'direction': 'D',\n          'row': 1\n        };\n      }\n\n      if (this.state[2] == this.state[4] && this.state[2] == this.state[6] && this.state[2]) {\n        return {\n          'winner': this.state[2],\n          'direction': 'D',\n          'row': 2\n        };\n      } //If no winner but the board is full, then it's a draw\n\n\n      if (this.isFull()) {\n        return {\n          'winner': 'draw'\n        };\n      } //return false otherwise\n\n\n      return false;\n    }\n  }]);\n\n  return Board;\n}();\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/**\n * This program is a boilerplate code for the standard tic tac toe game\n * Here the “box” represents one placeholder for either a “X” or a “0”\n * We have a 2D array to represent the arrangement of X or O is a grid\n * 0 -> empty box\n * 1 -> box with X\n * 2 -> box with O\n *\n * Below are the tasks which needs to be completed:\n * Imagine you are playing with the computer so every alternate move should be done by the computer\n * X -> player\n * O -> Computer\n *\n * Winner needs to be decided and has to be flashed\n *\n * Extra points will be given for approaching the problem more creatively\n * \n */\n\n\nvar grid = [];\nvar GRID_LENGTH = 3;\nvar turn = 'X';\nvar newValue;\n\nvar newGame = function newGame() {\n  var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;\n  var starting_player = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var p = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](parseInt(depth));\n  var b = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](new Array(9));\n  var starting = parseInt(starting_player),\n      maximizing = starting,\n      player_turn = starting_player;\n};\n\nfunction initializeGrid() {\n  for (var colIdx = 0; colIdx < GRID_LENGTH; colIdx++) {\n    var tempArray = [];\n\n    for (var rowidx = 0; rowidx < GRID_LENGTH; rowidx++) {\n      tempArray.push(0);\n    }\n\n    grid.push(tempArray);\n  }\n}\n\nfunction getRowBoxes(colIdx) {\n  var rowDivs = '';\n\n  for (var rowIdx = 0; rowIdx < GRID_LENGTH; rowIdx++) {\n    var additionalClass = 'darkBackground';\n    var content = '';\n    var sum = colIdx + rowIdx;\n\n    if (sum % 2 === 0) {\n      additionalClass = 'lightBackground';\n    }\n\n    var gridValue = grid[colIdx][rowIdx];\n\n    if (gridValue === 1) {\n      content = '<span class=\"cross\">X</span>';\n    } else if (gridValue === 2) {\n      content = '<span class=\"cross\">O</span>';\n    }\n\n    rowDivs = rowDivs + '<div colIdx=\"' + colIdx + '\" rowIdx=\"' + rowIdx + '\" class=\"box ' + additionalClass + '\">' + content + '</div>';\n  }\n\n  return rowDivs;\n}\n\nfunction getColumns() {\n  var columnDivs = '';\n\n  for (var colIdx = 0; colIdx < GRID_LENGTH; colIdx++) {\n    var coldiv = getRowBoxes(colIdx);\n    coldiv = '<div class=\"rowStyle\">' + coldiv + '</div>';\n    columnDivs = columnDivs + coldiv;\n  }\n\n  return columnDivs;\n}\n\nfunction renderMainGrid() {\n  var parent = document.getElementById(\"grid\");\n  var columnDivs = getColumns();\n  parent.innerHTML = '<div class=\"columnsStyle\">' + columnDivs + '</div>';\n}\n\nfunction onBoxClick() {\n  var rowIdx = this.getAttribute(\"rowIdx\");\n  var colIdx = this.getAttribute(\"colIdx\");\n  newValue = newValue === 1 ? 2 : 1;\n  grid[colIdx][rowIdx] = newValue;\n  renderMainGrid();\n  addClickHandlers();\n}\n\nfunction addClickHandlers() {\n  var boxes = document.getElementsByClassName(\"box\");\n\n  for (var idx = 0; idx < boxes.length; idx++) {\n    boxes[idx].addEventListener('click', onBoxClick, false);\n  }\n}\n\ninitializeGrid();\nrenderMainGrid();\naddClickHandlers();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player =\n/*#__PURE__*/\nfunction () {\n  function Player() {\n    var max_depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;\n\n    _classCallCheck(this, Player);\n\n    this.max_depth = max_depth;\n    this.nodes_map = new Map();\n  }\n\n  _createClass(Player, [{\n    key: \"getBestMove\",\n    value: function getBestMove(board) {\n      var _this = this;\n\n      var maximizing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};\n      var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n      //clear nodes_map if the function is called for a new move\n      if (depth == 0) this.nodes_map.clear(); //If the board state is a terminal one, return the heuristic value\n\n      if (board.isTerminal() || depth == this.max_depth) {\n        if (board.isTerminal().winner == 'x') {\n          return 100 - depth;\n        } else if (board.isTerminal().winner == 'o') {\n          return -100 + depth;\n        }\n\n        return 0;\n      }\n\n      if (maximizing) {\n        //Initializ best to the lowest possible value\n        var best = -100; //Loop through all empty cells\n\n        board.getAvailableMoves().forEach(function (index) {\n          //Initialize a new board with the current state (slice() is used to create a new array and not modify the original)\n          var child = new Board(board.state.slice()); //Create a child node by inserting the maximizing symbol x into the current emoty cell\n\n          child.insert('x', index); //Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth\n\n          var node_value = _this.getBestMove(child, false, callback, depth + 1); //Updating best value\n\n\n          best = Math.max(best, node_value); //If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies\n\n          if (depth == 0) {\n            //Comma seperated indicies if multiple moves have the same heuristic value\n            var moves = _this.nodes_map.has(node_value) ? \"\".concat(_this.nodes_map.get(node_value), \",\").concat(index) : index;\n\n            _this.nodes_map.set(node_value, moves);\n          }\n        }); //If it's the main call, return the index of the best move or a random index if multiple indicies have the same value\n\n        if (depth == 0) {\n          if (typeof this.nodes_map.get(best) == 'string') {\n            var arr = this.nodes_map.get(best).split(',');\n            var rand = Math.floor(Math.random() * arr.length);\n            var ret = arr[rand];\n          } else {\n            ret = this.nodes_map.get(best);\n          } //run a callback after calculation and return the index\n\n\n          callback(ret);\n          return ret;\n        } //If not main call (recursive) return the heuristic value for next calculation\n\n\n        return best;\n      }\n\n      if (!maximizing) {\n        //Initializ best to the highest possible value\n        var _best = 100; //Loop through all empty cells\n\n        board.getAvailableMoves().forEach(function (index) {\n          //Initialize a new board with the current state (slice() is used to create a new array and not modify the original)\n          var child = new Board(board.state.slice()); //Create a child node by inserting the minimizing symbol o into the current emoty cell\n\n          child.insert('o', index); //Recursively calling getBestMove this time with the new board and maximizing turn and incrementing the depth\n\n          var node_value = _this.getBestMove(child, true, callback, depth + 1); //Updating best value\n\n\n          _best = Math.min(_best, node_value); //If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies\n\n          if (depth == 0) {\n            //Comma seperated indicies if multiple moves have the same heuristic value\n            var moves = _this.nodes_map.has(node_value) ? _this.nodes_map.get(node_value) + ',' + index : index;\n\n            _this.nodes_map.set(node_value, moves);\n          }\n        }); //If it's the main call, return the index of the best move or a random index if multiple indicies have the same value\n\n        if (depth == 0) {\n          if (typeof this.nodes_map.get(_best) == 'string') {\n            var arr = this.nodes_map.get(_best).split(',');\n            var rand = Math.floor(Math.random() * arr.length);\n            var ret = arr[rand];\n          } else {\n            ret = this.nodes_map.get(_best);\n          } //run a callback after calculation and return the index\n\n\n          callback(ret);\n          return ret;\n        } //If not main call (recursive) return the heuristic value for next calculation\n\n\n        return _best;\n      }\n    }\n  }]);\n\n  return Player;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ })

/******/ });