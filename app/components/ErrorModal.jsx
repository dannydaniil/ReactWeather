var React = require('react');

var ErrorModal = React.createClass({

  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },


  // set the type of our props and wether they are required or not
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired

  },

  // called after the dom has been update with whatever we have in render
  componentDidMount: function () {

    //new instance of modal
    var modal = new Foundation.Reveal($('#error-modal'));

    //now to use it
    modal.open();

  },

render: function () {
var {title,message} = this.props;

  return(
    <div id="error-modal" className="tiny reveal text-center" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </p>
    </div>
  );
}
});

module.exports = ErrorModal;
