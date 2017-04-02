// router used to change the domains

var React = require('react');
var {Link, IndexLink}= require('react-router');


var Nav = React.createClass({

  onSearch: function (e){

    // prevent browser from refreshing the page
    e.preventDefault();

    alert('Not yet wired up!');
  },

  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className ="menu">
            <li className="menu-text">Traveler Application</li>
            <li>
                <IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Get Weather </IndexLink>
            </li>
            <li>
                <IndexLink to ="about" activeClassName="active" activeStyle={{fontWeight:'bold'}}> About </IndexLink>
            </li>
            <li>
                <IndexLink to ="examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}> Examples </IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/> 
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
