var React = require('react');


var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;

  return(
    <h3>It is {temp} degrees in {location}</h3>
  );

}
module.exports = WeatherMessage;
