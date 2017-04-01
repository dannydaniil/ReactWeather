var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){

    //prevent from doing the default, which is reloading the page
    e.preventDefault();

    // get the location as an argument
    var location = this.refs.location.value;

    //make sure data is valid
    if(location.length > 0) {

      //clear input field
      this.refs.location.value = '';

      //call the parent function
      this.props.onSearch(location);
    }
  },
  render:function(){
    return(
      <div>
        <form onSubmit = {this.onFormSubmit}>
          <input type="text" ref ="location"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
})

module.exports = WeatherForm;
