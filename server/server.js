
import {serverRenderedHtml} from './renderMiddleware';

const express = require('express');
const path = require('path');

// const server = http.createServer();
const port = process.env.PORT || 8080;

const app = express();

const server = app.listen(port,function(){
    console.log('Listening at: '+port);
});




// serve static assets normally


app.use('/static', express.static(path.resolve(__dirname,'..','build','static')));
app.use('/fonts', express.static(path.resolve(__dirname,'..','build','fonts')));
app.use('/images', express.static(path.resolve(__dirname,'..','build','images')));


console.log(path.resolve(__dirname,'build'));

app.get('*',function(req,res){
    console.log("url"+req.url)
   serverRenderedHtml(req,res);
    // res.sendFile(path.resolve('build','index.html'));
})

