var React = require('react');

function Carousel (props) {
  var src = props.src;
  return (
    <div>
      <h1>Title goes here</h1>
      <img src = {src} />
    </div>
  );
}

Carousel.propTypes = {
  src : React.PropTypes.string.isRequired
}

module.exports = Carousel;
