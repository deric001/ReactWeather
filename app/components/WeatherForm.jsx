var React = require('react');

//=====================================================
// GreeterForm
//=====================================================
var WeatherForm = React.createClass({

  onSubmitForm: function (e) {
    e.preventDefault();

    var cityNm = this.refs.cityNm.value;
    if (cityNm.length > 0) {
      this.refs.cityNm.value = '';
      this.props.onHandleGetTemp(cityNm);
    }
  },

  render: function () {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div>
          <input type="text" ref="cityNm" placeholder="Enter city name"/>
        </div>
        <div>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;
