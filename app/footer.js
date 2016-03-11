var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var React = require('react')

var app = require('./app');





var Footer = React.createClass({
  render : function() {
    return (
      <footer className="footer">
      	<div className="container">
          <small>
            The <a href="http://www.railstutorial.org/">Ruby on Rails Tutorial</a>
            by <a href="http://www.michaelhartl.com/">Michael Hartl</a>
          </small>
          <nav>
            <ul>
               <li><Link to="/about">Help</Link></li>
               <li><Link to="/inbox">Contacts</Link></li>
               <li><a href="http://news.railstutorial.org/">News</a></li>
            </ul>
          </nav>
          </div>
        </footer>
      ) ;
  }
});

module.exports = Footer;