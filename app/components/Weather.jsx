var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  // my first function which sets the initial state of the props
    getInitialState: function() {
        return {isLoading: false}
    },

// what happens when a search is fired
    handleSearch: function(location) {
        var that = this;

        this.setState({isLoading: true, errorMessage: undefined, location: undefined, temp: undefined});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({location: location, temp: temp, isLoading: false});
        }, function(e) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });
    },

    componentDidMount: function() {

        // pull out location from the link
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }

    },
    componentWillReceiveProps: function (newProps){
      var location = newProps.location.query.location;

      if (location && location.length > 0) {
          this.handleSearch(location);
          window.location.hash = '#/';
      }
    },

    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
