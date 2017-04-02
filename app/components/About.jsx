var React = require('react');

// only use render, do not alter any state
var About = (props)=>{
  return(
    <div>
    <h1 className="text-center">About</h1>
    <div className="text-center">
      <p>This is my first project using React</p>
      <p>I am also using Foundation for styling</p>
      <p>You are welcome to take a look at this project's gihub repository over <a href="https://github.com/dannydaniil/ReactWeather">here</a></p>
    </div>
    </div>
  )
};

module.exports = About;
