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
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
