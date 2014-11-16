var React = require('react');
var _ = require('lodash');
var Actions = require('./actions');

var ShipPopup = React.createClass({
  pivotShip : function(event) {
    event.stopPropagation();
    Actions.setup.pivotShip();
  },

  render: function() {
    return(
      <div className="ship-popup">
        <button type="button" className="btn btn-primary btn" onClick={this.pivotShip}>Pivot</button>
      </div>);
  }
});

module.exports = ShipPopup;