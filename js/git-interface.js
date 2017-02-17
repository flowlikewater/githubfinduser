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
