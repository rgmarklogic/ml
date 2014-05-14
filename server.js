var express = require('express');
var path = require('path');

var app = express();
app.set('port', 8080);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}



app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

