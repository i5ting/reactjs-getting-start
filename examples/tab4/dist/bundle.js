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

	/** @jsx React.DOM */var TabContentItem   = __webpack_require__(1);
	var TabContent       = __webpack_require__(2);

	var Tab              = __webpack_require__(3);

	var data = ['tab说明','特性','开源协议','源码','张婷作品'];

	React.render(
	  React.createElement(Tab, {headers: data, current_tab_index: 2}, 
	    React.createElement(TabContent, null, 
	      React.createElement(TabContentItem, null, 
	        React.createElement("p", null, "tab说明")
	      ), 
	      React.createElement(TabContentItem, null, 
	        "特性"
	      ), 
	      React.createElement(TabContentItem, null, 
	        "开源协议"
	      ), 
	      React.createElement(TabContentItem, null, 
	        "源码"
	      ), 
	      React.createElement(TabContentItem, null, 
	        React.createElement("p", null, "张婷作品")
	      )
	    )
	  )
	  ,
	  document.getElementById('wrap1')
	);

/***/ },
/* 1 */
/***/ function(module, exports) {

	/** @jsx React.DOM *///   <div class="i5ting_tab_content_item current_content">
	//
	//   </div>

	var TabContentItem = React.createClass({displayName: "TabContentItem",
	  getInitialState: function() {
	    return {value: 'Hello!'};
	  },
	  componentDidMount: function() {
	    $(this.getDOMNode()).click(function(){
	      var container_li = $(this);
	      $(container_li).addClass('current').siblings().removeClass('current');
	    })
	  },
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
/* 2 */
/***/ function(module, exports) {

	/** @jsx React.DOM */// <div class="i5ting_tab_content">
	//   <div class="i5ting_tab_content_item current_content">
	//
	//   </div>
	//   <div class="i5ting_tab_content_item">
	//
	//   </div>
	// </div>
	var TabContent = React.createClass({displayName: "TabContent",
	  render: function() {
	      
	  var cls = "i5ting_tab_content";
	    return (
	      React.createElement("div", {className: cls}, 
	        this.props.children
	      )
	    );
	  }
	});

	exports = module.exports = TabContent;

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

	var TabHeaderItem   = __webpack_require__(4);
	var TabHeader       = __webpack_require__(5);

	var Tab = React.createClass({displayName: "Tab",
	  getInitialState: function() {
	    return {tabContentDefault: 0};
	  },
	  
	  render: function() {
	    var default_index = this.props.current_tab_index;
	    
	    // this.setState({tabContentDefault: default_index});
	    var h = []
	    for (var i = 0; i < this.props.headers.length; i++) {
	      var title = this.props.headers[i];

	      if (default_index === i) {
	        h.push(React.createElement(TabHeaderItem, {current: true, title: title}))
	      }else{
	        h.push(React.createElement(TabHeaderItem, {title: title}))
	      }
	    }
	    
	    var eles = this.props.children.props.children;
	    
	    for (var i = 0; i < eles.length; i++) {
	      var aa =eles[i];
	      if (default_index === i) {
	        aa.props.current = true;
	      }
	    }
	            
	    var cls = "wrap1";
	    
	    return (
	      //not class but className
	      React.createElement("div", {className: cls}, 
	        React.createElement("ul", null, 
	          React.createElement(TabHeader, null, 
	            h
	          ), 
	          this.props.children
	        )
	      )
	    );
	  }
	});

	exports = module.exports = Tab;

/***/ },
/* 4 */
/***/ function(module, exports) {

	/** @jsx React.DOM *///
	// <li class="current">
	//   <a href="#">tab说明</a>
	// </li>
	var TabHeaderItem = React.createClass({displayName: "TabHeaderItem",
	  getInitialState: function() {
	    return {value: 'Hello!'};
	  },
	  componentDidMount: function() {
	    var _this = this;
	    $(this.getDOMNode()).click(function(){
	      var container_li = $(this);
	      
	      var i = $(container_li).parent().find('li').index(this)
	      // alert(i);
	      $(container_li).addClass('current').siblings().removeClass('current');
	      
	      _this.changeContent(i);
	    })
	  },
	  changeContent: function(i){
	    var content = $(this.getDOMNode()).closest('.i5ting_tab_header').parent().parent().find('.i5ting_tab_content .i5ting_tab_content_item')
	    var c = $(content).eq(i);
	    $(c).addClass('current_content').siblings().removeClass('current_content');
	  },
	  render: function() {
	    var cls = this.props.current ? "current" : "";
	    return (
	      React.createElement("li", {className: cls}, 
	        React.createElement("a", {href: "#"}, this.props.title, " ")
	      )
	    );
	  }
	});

	exports = module.exports = TabHeaderItem;

/***/ },
/* 5 */
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
	var TabHeaderItem   = __webpack_require__(4);

	var TabHeader = React.createClass({displayName: "TabHeader",
	  render: function() {
	    var cls = "i5ting_tab_header";
	    return (
	      //not class but className
	      React.createElement("div", {className: "i5ting_tab_header"}, 
	        React.createElement("ul", null, " ", this.props.children)
	      )
	    );
	  }
	});

	exports = module.exports = TabHeader;

/***/ }
/******/ ]);