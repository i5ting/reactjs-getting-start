/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var TabHeaderItem   = __webpack_require__(1);
	var TabHeader       = __webpack_require__(2);

	React.render(
	    React.createElement(TabHeader, null, 
	      React.createElement(TabHeaderItem, {
	        current: true, 
	        title: "tab说明"}
	      ), 
	      React.createElement(TabHeaderItem, {
	        title: "特性"}
	      ), 
	      React.createElement(TabHeaderItem, {
	        title: "开源协议"}
	      ), 
	      React.createElement(TabHeaderItem, {
	        title: "源码"}
	      ), 
	      React.createElement(TabHeaderItem, {
	        title: "张婷作品"}
	      )
	    )
	  ,
	  document.getElementById('wrap1')
	);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/** @jsx React.DOM *///
	// <li class="current">
	//   <a href="#">tab说明</a>
	// </li>
	var TabHeaderItem = React.createClass({displayName: "TabHeaderItem",
	  render: function() {
	      return React.createElement("li", {class: this.props.current}, React.createElement("a", {href: "#"}, this.props.title, " "));
	  }
	});

	exports = module.exports = TabHeaderItem;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM */ // <div class='i5ting_tab_header'>
	 //   <ul>
	 //     <li class="current">
	 //       <a href="#">tab说明</a>
	 //     </li>
	 //     <li>
	 //       <a href="#">特性</a>
	 //     </li>
	 //     <li>
	 //       <a href="#">开源协议</a>
	 //     </li>
	 //     <li>
	 //       <a href="#">源码</a>
	 //     </li>
	 //     <li>
	 //       <a href="#">张婷作品</a>
	 //     </li>
	 //   </ul>
	 //  </div>
	var TabHeader = React.createClass({displayName: "TabHeader",
	  render: function() {
	      
	  var cls = "i5ting_tab_header";
	    return (
	      //not class but className
	      React.createElement("div", {className: "i5ting_tab_header"}, 
	        "// for nest", 
	        React.createElement("ul", null, " ", this.props.children)
	      )
	    );
	  }
	});

	exports = module.exports = TabHeader;

/***/ }
/******/ ]);