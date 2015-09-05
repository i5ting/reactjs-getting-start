var Input = React.createClass({displayName: "Input",
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function () {
    var value = this.state.value;
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", value: value, onChange: this.handleChange}), 
        React.createElement("p", null, value)
      )
    );
  }
});

React.render(React.createElement(Input, null), document.getElementById('container'));
