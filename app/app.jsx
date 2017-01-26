// import the required modules
var React = require('react');
var ReactDOM = require('react-dom');

// object destructuring.  this is the same as
//  var Route = require(react-dom).Route
//  var Router = require(react-dom).Router
var {Route, Router, IndexRoute, hashHistory} = require('react-router')


// Import my Components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

//=====================================================


ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
