var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>{
  return(
    <div>
    <h1 className="text-center page-title">Examples</h1>
    <p>Here are a few example locations for you to try out:</p>
    <ol>
      <li>
        <Link to='/?location=Athens'>Athens, Greece</Link>
      </li>
      <li>
        <Link to='/?location=Los Angeles'>Los Angeles, CA</Link>
      </li>
    </ol>
    </div>
  );
}

module.exports = Examples;
