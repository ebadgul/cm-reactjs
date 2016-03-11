var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var React = require('react')

var app = require('./app');

var Header = React.createClass({
  render : function() {
    return (
      <div className="navbar navbar-fixed-top navbar-inverse" >
            <div className="container">
              <Link to="/" id="logo" >App</Link>
              <nav>
                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li className="dropdown">
                      <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                        Account <b className="caret"></b>
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link to="/about">Profile</Link></li>
                        <li><Link to="/inbox">Settings</Link></li>
                        <li className="divider"></li>
                        <li>
                           <Link to="/about">Logout</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
              </nav>
            </div>
          </div>
      );
  }
});

module.exports = Header;