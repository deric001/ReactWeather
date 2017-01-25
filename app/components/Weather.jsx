var React = require('react');

var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');


//=====================================================
var Weather = React.createClass({

  getDefaultProps: function () {
    return {
      isLoading: false
    };
  },

  getInitialState: function() {
    return {
      isLoading: this.props.isLoading,
      cityNm: this.props.cityNm,
      currTemp: this.props.currTemp
    };
  },

  handleGetTemp: function (cityNm) {
    //gives me access to this inside the callback
    var that = this;

    //when the debugger is open, you get to debug here...
    debugger;


    that.setState({isLoading:true});

    openWeatherMap.getTemp(cityNm).then(function(temp) {
      that.setState({
        isLoading: false,
        cityNm: cityNm,
        currTemp: temp
      });
    }, function(errorMessage) {
      that.setState({
        isLoading: false,
        cityNm: "",
        currTemp: ""
      });
      alert(errorMessage);
    });
  },

  render: function() {
    var {isLoading, cityNm, currTemp} = this.state;

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (cityNm && currTemp) {
        return <WeatherMessage cityNm={cityNm} currTemp={currTemp}/>;
      }
    }

    return(
      <div>
        <WeatherForm onHandleGetTemp={this.handleGetTemp}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
