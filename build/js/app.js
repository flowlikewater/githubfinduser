(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "f5acbb6ffc6edb36e836862834712e3e0548c3e6";

},{}],2:[function(require,module,exports){
// One to receive form input

var key = require('./../.env').apiKey;

function Finduser(username){
  this.username=username;
  this.url='https://api.github.com/users/'+this.username+'?access_token='+key;
}

exports.findusermodule = Finduser;

},{"./../.env":1}],3:[function(require,module,exports){
// another to make an API request and display results.

var Finduser = require('./../js/gitbackend.js').findusermodule;

$(document).ready(function(){
  $('#submit').click(function(event){
    event.preventDefault();
    $('.key').show();
    $('.output').empty();
    var finder = new Finduser($('#username').val());
    $.get(finder.url).then(function(response){
      console.log(response);
      $('#photo').append('<img style="height: 200px; width: 200px;" src="'+response.avatar_url+'"/>');
      $('#login').append(response.login);
      $('#id').append(response.id);
      $('#name').append(response.name);
      $('#location').append(response.location);
      $('#public_repos').append(response.public_repos);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});

},{"./../js/gitbackend.js":2}]},{},[3]);
