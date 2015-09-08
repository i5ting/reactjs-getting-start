//
// <li class="current">
//   <a href="#">tab说明</a>
// </li>
var TabHeaderItem = React.createClass({
  render: function() {
      return <li class={this.props.current}><a href="#">{this.props.title} </a></li>;
  }
});

exports = module.exports = TabHeaderItem;