// One to receive form input

var key = require('./../.env').apiKey;

function Finduser(username){
  this.username=username;
  this.url='https://api.github.com/users/'+this.username+'?access_token='+key;
}

exports.findusermodule = Finduser;
