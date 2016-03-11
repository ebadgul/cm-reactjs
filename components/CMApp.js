var React = require('react');
var Navbar = require('./Navbar.react');
var ContactList = require('./ContactList.react');
var CMStore = require('../stores/CMStore');

var CMApp = React.createClass({
    render: function() {
        return(
            <div>
            Contact Holder
            <Navbar />
            <ContactList />
            </div>
            );
    }
});

+module.exports = CMApp; 
