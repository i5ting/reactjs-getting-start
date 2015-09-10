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

var TabHeader       = require('./tab_header.jsx');
var TabContent       = require('./tab_content.jsx');

var Tab = React.createClass({
  render: function() {
    var cls = this.props.current ? "current_content" : "";
    var clsName = "i5ting_tab_content_item " + cls;
    return (
        <ul> 
          <TabHeader>
            {this.props.children}
          </TabHeader>
          <TabContent>
            {this.props.children}
          </TabContent>
        </ul> 
    );
  }
});

exports = module.exports = Tab;