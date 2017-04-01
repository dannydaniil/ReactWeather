var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({

  getInitialState: function(){
    return{
      // show loading message when fetching data
      isLoading: false
    };
  },

  handleSearch: function(location){

    // show that it is loading
    this.setState({isLoading: true});
    //debugger;

    // we can now access this in the promise
    var that = this;

    //debugger;

    openWeatherMap.getTemp(location).then(

      //success part
      function(temp){

        // sets the State of this component
        that.setState({
          location: location,
          temp: temp,
          isLoading: false
        });
        // error part
    },function(errorMessage){
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });

  },
  render: function(){

    // pull the variables of the states of THIS object
    var location = this.state.location;
    var temp = this.state.temp;
    var isLoading = this.state.isLoading;

    function renderMessage(){
      if(isLoading){
          return <h3>Fetching weather ... </h3> ;
      } else if (temp && location){
        return <WeatherMessage location={location} temp={temp}/>
      }
    }

  return(
    <div>
      <h3> Weather Components</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
    </div>
    )
  }
});
module.exports = Weather;
