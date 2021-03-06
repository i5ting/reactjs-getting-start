//
// <li class="current">
//   <a href="#">tab说明</a>
// </li>
var TabHeaderItem = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  componentDidMount: function() {
    $(this.getDOMNode()).click(function(){
      var container_li = $(this);
      $(container_li).addClass('current').siblings().removeClass('current');
    })
  },
  handleChange: function(event) {
    alert(event.target.value);
    // this.setState({value: event.target.value});
  },
  render: function() {
    var cls = this.props.current ? "current" : "";
    return (
      <li className={cls}>
        <a href="#">{this.props.title} </a>
      </li>
    );
  }
});

exports = module.exports = TabHeaderItem;