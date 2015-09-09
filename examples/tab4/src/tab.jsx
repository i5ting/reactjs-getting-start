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

var Tab = React.createClass({
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
        h.push(<TabHeaderItem current title={title}/>)
      }else{
        h.push(<TabHeaderItem title={title}/>)
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
      <div className={cls}>
        <ul> 
          <TabHeader>
            {h}
          </TabHeader>
          {this.props.children}
        </ul> 
      </div>
    );
  }
});

exports = module.exports = Tab;