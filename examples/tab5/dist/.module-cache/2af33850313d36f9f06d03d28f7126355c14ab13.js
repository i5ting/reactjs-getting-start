var HelloMessage = React.createClass({displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

React.render(
  React.createElement(HelloMessage, {name: "John"}),
  document.getElementById('container')
);
