var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     var {cityNm, currTemp} = this.props;
//
//     return (
//       <div>
//         <p>{'It is ' + currTemp + ' degrees in ' + cityNm + '!!!'}</p>
//       </div>
//     );
//   }
// });

//i can use the es6 deconstructuring syntax of the props inside the input args
var WeatherMessage = ({cityNm, currTemp}) => {
  //var {cityNm, currTemp} = props;

  return (
    <div>
      <p>{'It is ' + currTemp + ' degrees in ' + cityNm + '!!!'}</p>
    </div>
  );
};

module.exports = WeatherMessage;
