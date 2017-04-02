var React = require('react');

// only use render, do not alter any state
var About = (props)=>{
  return(
    <div>
    <h1 className="text-center">About</h1>
      <p>This is a weather application built on React</p>
      <ol>Here are some of the tools I have used:
      <li>
        The JavaScript framework used can be found <a href="https://facebook.github.io/react">here</a>
      </li>
      <li>
        The weather API used can be found <a href="https://openweathermap.org/">here</a>
      </li>
      <li>
        The styling was done using Foundation, which can be found <a href="http://foundation.zurb.com/">here</a>
      </li>
      <li>
        You are welcome to take a look at this project's Github repository over <a href="https://github.com/dannydaniil/ReactWeather">here</a>
      </li>
  </ol>
    </div>
  )};

module.exports = About;
