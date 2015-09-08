// var i5ting.ReactTab = React.createClass({
//   render: function() {
//     return <div>Hello {this.props.name}</div>;
//   }
// });
//
// React.render(
//   <ReactTab name="John" />,
//   document.getElementById('content')
// );


// $('.wrap1').i5ting_jquery_tab({
//     fix_height :'200px',
//     tab_changed:function(current_index){
//         console.log(current_index);
//     }
// });

var tab_changed = function(current_index) {
  console.log(current_index);
};


React.render(
  <ReactTab fix_height="200px" 
    tab_changed={tab_changed}/>,
  document.getElementById('wrap1')
);