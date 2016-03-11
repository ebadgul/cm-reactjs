var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link
var IndexRoute = ReactRouter.IndexRoute
var ReactDOM = require('react-dom')
var React = require('react')

var Header = require('./header');
var Main = require('./main');
var Footer = require('./footer');



var About = React.createClass({  
  render: function() {
    return (
      <div>
        <h1>About page</h1>
      </div>
    );
  } 
  }) ;

var Inbox = React.createClass({  
  render: function() {
    return (
      <div>
        <h1>Inbox page</h1>
        {this.props.children}
      </div>
    );
  } 
  }) ;

var Message = React.createClass({
  render : function() {
    <p>thi is message one</p>
    return <h3>Message for user: {this.props.params.id} </h3>
  }
});

var InboxStats = React.createClass({
  render : function() {
    return <h3>Stats</h3>
  }
});





var App = React.createClass({
  render : function() {
    return (
      <div>
        <Header />
        <div className="container">
        <Main />
        {this.props.children}
      </div>
      <Footer />
      </div>
    )
  }
});





ReactDOM.render((
  <Router >
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} >
           <IndexRoute component={InboxStats}/>
           <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
    
  </Router>
), document.getElementById('mount-point')) ;

