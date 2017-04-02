var React = require('react');

//
// var WeatherMessage = React.createClass({
//   render: function(){
//
//     // access the arguments passed to this form
//     var location = this.props.location;
//     var temp = this.props.temp;
//
//     return(
//       <h3>It is {temp} degrees in {location}</h3>
//     );
//   }
// })

var WeatherMessage = (props) => {
  var location = props.location;
  var temp = props.temp;

  return(
    <h3>It is {temp} degrees in {location}</h3>
  );

}
module.exports = WeatherMessage;
