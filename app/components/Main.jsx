var React = require('react');

// Import my Components
var Nav = require('Nav');


// we can code it like this because it's a stateless functional components
// it doesn't carry any state and only renders content
// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h1>Main component</h1>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h1>Main component</h1>
      {props.children}
    </div>
  );
};

module.exports = Main;
