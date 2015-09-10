var TabContentItem   = require('./tab_content_item.jsx');
var TabContent       = require('./tab_content.jsx');

// <div class="i5ting_tab_content">
//   <div class="i5ting_tab_content_item current_content">
//
//   </div>
//   <div class="i5ting_tab_content_item">
//
//   </div>
// </div>

var TabContent = React.createClass({
  render: function() {
    var arr = [];
    for(var i = 0; i< this.props.children.length; i++){
      var a = this.props.children[i].props;
      if(a.current){
        arr.push(
          <TabContentItem current>
            {a.children}
          </TabContentItem>
        );
      }else{
        arr.push(
          <TabContentItem>
            {a.children}
          </TabContentItem>
        );
      }
    }
    
    var cls = "i5ting_tab_content";
    return (
      <div className={cls}>
        {arr}
      </div>
    );
  }
});

exports = module.exports = TabContent;