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

	/** @jsx React.DOM */var Tab      = __webpack_require__(1);
	var TabItem  = __webpack_require__(6); 

	React.render(
	  React.createElement(Tab, null, 
	    React.createElement(TabItem, {title: "tab说明", current: true}, 
	      React.createElement("p", null, "tab说明")
	    ), 
	    React.createElement(TabItem, {title: "'特性111'"}, 
	      "特性"
	    ), 
	    React.createElement(TabItem, {title: "开源协议"}, 
	      "开源协议"
	    ), 
	    React.createElement(TabItem, {title: "源码"}, 
	      "源码"
	    ), 
	    React.createElement(TabItem, {title: "张婷作品"}, 
	      React.createElement("p", null, "张婷作品")
	    )
	  )
	  ,
	  document.getElementById('wrap1')
	);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

	var TabHeader       = __webpack_require__(3);
	var TabContent       = __webpack_require__(5);

	var Tab = React.createClass({displayName: "Tab",
	  render: function() {
	    var cls = this.props.current ? "current_content" : "";
	    var clsName = "i5ting_tab_content_item " + cls;
	    return (
	        React.createElement("ul", null, 
	          React.createElement(TabHeader, null, 
	            this.props.children
	          ), 
	          React.createElement(TabContent, null, 
	            this.props.children
	          )
	        ) 
	    );
	  }
	});

	exports = module.exports = Tab;

/***/ },
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM *///
	// <li class="current">
	//   <a href="#">tab说明</a>
	// </li>
	var TabHeaderItem = React.createClass({displayName: "TabHeaderItem",
	  changeContent: function(i){
	    var content = $(this.getDOMNode()).closest('.i5ting_tab_header').parent().parent().find('.i5ting_tab_content .i5ting_tab_content_item')
	    var c = $(content).eq(i);
	    $(c).addClass('current_content').siblings().removeClass('current_content');
	  },
	  
	  handleClick: function(){
	    var container_li = $(this.getDOMNode());
	    
	    var i = $(container_li).parent().find('li').index(container_li);
	    // alert(i);
	    $(container_li).addClass('current').siblings().removeClass('current');
	    
	    this.changeContent(i);
	  },
	  
	  render: function() {
	    var cls = this.props.current ? "current" : "";
	    return (
	      React.createElement("li", {className: cls, onClick: this.handleClick}, 
	        React.createElement("a", {href: "#"}, this.props.title, " ")
	      )
	    );
	  }
	});

	exports = module.exports = TabHeaderItem;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

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
	var TabHeaderItem   = __webpack_require__(2);

	var TabHeader = React.createClass({displayName: "TabHeader",
	  render: function() {
	    var arr = [];
	    for(var i = 0; i< this.props.children.length; i++){
	      var a = this.props.children[i].props;
	      if(a.current){
	        arr.push(
	          React.createElement(TabHeaderItem, {
	          current: true, 
	          title: a.title})
	        );
	      }else{
	        arr.push(
	          React.createElement(TabHeaderItem, {
	          title: a.title})
	        );
	      }
	    }
	    return (
	      //not class but className
	      React.createElement("div", {className: "i5ting_tab_header"}, 
	        React.createElement("ul", null, " ", arr)
	      )
	    );
	  }
	});

	exports = module.exports = TabHeader;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/** @jsx React.DOM *///   <div class="i5ting_tab_content_item current_content">
	//
	//   </div>

	var TabContentItem = React.createClass({displayName: "TabContentItem",
	  render: function() {
	    var cls = this.props.current ? "current_content" : "";
	    var clsName = "i5ting_tab_content_item " + cls;
	    return (
	      React.createElement("div", {className: clsName}, 
	        this.props.children
	      )
	    );
	  }
	});

	exports = module.exports = TabContentItem;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var TabContentItem   = __webpack_require__(4);
	var TabContent       = __webpack_require__(5);

	// <div class="i5ting_tab_content">
	//   <div class="i5ting_tab_content_item current_content">
	//
	//   </div>
	//   <div class="i5ting_tab_content_item">
	//
	//   </div>
	// </div>

	var TabContent = React.createClass({displayName: "TabContent",
	  render: function() {
	    var arr = [];
	    for(var i = 0; i< this.props.children.length; i++){
	      var a = this.props.children[i].props;
	      if(a.current){
	        arr.push(
	          React.createElement(TabContentItem, {current: true}, 
	            a.children
	          )
	        );
	      }else{
	        arr.push(
	          React.createElement(TabContentItem, null, 
	            a.children
	          )
	        );
	      }
	    }
	    
	    var cls = "i5ting_tab_content";
	    return (
	      React.createElement("div", {className: cls}, 
	        arr
	      )
	    );
	  }
	});

	exports = module.exports = TabContent;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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
	var TabHeaderItem   = __webpack_require__(2);
	var TabHeader       = __webpack_require__(3);

	var TabContentItem   = __webpack_require__(4);
	var TabContent       = __webpack_require__(5);

	var TabItem = React.createClass({displayName: "TabItem",
	  render: function() {
	    var a= [];
	    a.push(React.createElement(TabHeader, null));
	    a.push(React.createElement(TabContent, null));
	    
	    return (
	      //not class but className
	      {a:a}
	    );
	  }
	});

	exports = module.exports = TabItem;

/***/ }
/******/ ]);