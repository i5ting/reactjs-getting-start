var HelloMessage = require('./helloworld1.jsx');

var Hello2Message = React.createClass({
  render: function() {
    return <div>Hello {this.props.name} a= <HelloMessage name="John" /></div>;
  }
});

exports = module.exports = Hello2Message;