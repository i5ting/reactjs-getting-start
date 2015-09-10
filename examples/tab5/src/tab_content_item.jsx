//   <div class="i5ting_tab_content_item current_content">
//
//   </div>

var TabContentItem = React.createClass({
  render: function() {
    var cls = this.props.current ? "current_content" : "";
    var clsName = "i5ting_tab_content_item " + cls;
    return (
      <div className={clsName}>
        {this.props.children}
      </div>
    );
  }
});

exports = module.exports = TabContentItem;