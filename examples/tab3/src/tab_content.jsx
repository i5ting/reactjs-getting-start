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
      
  var cls = "i5ting_tab_content";
    return (
      <div className={cls}>
        {this.props.children}
      </div>
    );
  }
});

exports = module.exports = TabContent;