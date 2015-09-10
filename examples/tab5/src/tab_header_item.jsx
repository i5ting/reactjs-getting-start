//
// <li class="current">
//   <a href="#">tab说明</a>
// </li>
var TabHeaderItem = React.createClass({
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
      <li className={cls} onClick={this.handleClick}>
        <a href="#">{this.props.title} </a>
      </li>
    );
  }
});

exports = module.exports = TabHeaderItem;