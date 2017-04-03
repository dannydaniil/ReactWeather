var React = require('react');
var Nav = require('Nav');

// we put the grid here since we use props.children and can thus affect all our components


var Main = (props) =>{
    return (
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            {props.children}
            <div className="page-footer text-center">
              <p>Developed by: Daniil, Daniel Chris</p>
              <p>Contact information: <a href="mailto:dannydaniil@yahoo.com">dannydaniil@yahoo.com</a>.</p>
            </div>
          </div>

        </div>

      </div>
    );
  }


module.exports = Main;
