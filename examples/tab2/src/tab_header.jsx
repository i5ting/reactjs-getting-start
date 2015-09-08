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
var TabHeader = React.createClass({
  render: function() {
      
  var cls = "i5ting_tab_header";
    return (
      //not class but className
      <div className="i5ting_tab_header">
        // for nest
        <ul> {this.props.children}</ul> 
      </div>
    );
  }
});

exports = module.exports = TabHeader;