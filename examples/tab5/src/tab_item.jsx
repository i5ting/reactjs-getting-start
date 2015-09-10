 // <div class='i5ting_tab_header'>
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
var TabHeaderItem   = require('./tab_header_item.jsx');
var TabHeader       = require('./tab_header.jsx');

var TabContentItem   = require('./tab_content_item.jsx');
var TabContent       = require('./tab_content.jsx');

var TabItem = React.createClass({
  render: function() {
    var a= [];
    a.push(<TabHeader/>);
    a.push(<TabContent/>);
    
    return (
      //not class but className
      {a}
    );
  }
});

exports = module.exports = TabItem;