const React = require('react');
const Navbar = require('./navbar.jsx');


const Component = React.createClass({
    render: function () {

        return (
            <div>
                <Navbar />
                <p>Activate the plot device.</p>
            </div>
        );
    }
});


module.exports = Component;
