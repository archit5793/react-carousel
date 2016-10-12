var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('../components/Carousel');

var IMAGEPATHS = [
  '',
  '',
  '',
  ''
];

var CarouselContainer = React.createClass({
  getInitialState: function(){
    return {currentImg : 0};
  },
  nextImg:function(){
    var current = this.state.currentImg;
    var next = ++current%IMAGEPATHS.length;
    this.setState({currentImg:next});
  },
  interval: null,
  componentDidMount: function(){
    this.interval = setInterval(this.nextImg,2000);
  },
  componentWillUnmount: function(){
    clearInterval(this.interval);
  },
  render: function(){
    var src = IMAGEPATHS[this.state.currentImg];
    return <Carousel src = {src} />;
  }
});

ReactDOM.render(<CarouselContainer />, document.getElementById('divId'));
