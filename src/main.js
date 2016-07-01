"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./components/comment/CommentBox');

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000} />,
    document.getElementById('app')
);
