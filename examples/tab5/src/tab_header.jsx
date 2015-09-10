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

var TabHeader = React.createClass({
  render: function() {
    var arr = [];
    for(var i = 0; i< this.props.children.length; i++){
      var a = this.props.children[i].props;
      if(a.current){
        arr.push(
          <TabHeaderItem
          current
          title={a.title}/>
        );
      }else{
        arr.push(
          <TabHeaderItem
          title={a.title}/>
        );
      }
    }
    return (
      //not class but className
      <div className="i5ting_tab_header">
        <ul> {arr}</ul> 
      </div>
    );
  }
});

exports = module.exports = TabHeader;