var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     );
//   }
// });


var About = (props) => {
  return (
    <div>
        <h1 className="text-center">About</h1>
        <p>
          This is a weather application build on React. I have built this
          for the Complete React Web App Developer Course.
        </p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a>
             - JavaScript Framework Used
          </li>
          <li>
            <a href="http://foundation.zurb.com/sites/docs/">Foundation Docs</a>
            - Responsive front-end framework
          </li>
        </ul>
    </div>
  );
};

module.exports = About;
