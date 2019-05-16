var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var jwt = require("jsonwebtoken");
var Temp = require("./models/temp");
var apiRoutes = express.Router();

var port = process.env.PORT || 8080;
mongoose.connect("mongodb://localhost:27017/loopapps");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

apiRoutes.get('/',function(req,res){
  res.send("Hello!, Apps API is working fine");
})

apiRoutes.post('/auth',function(req, res, next){
  Temp.findOne({
    username:req.body.username
  },function(err,user){
    if(err) throw err
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {
      const payload = {
        admin: user.admin
      };
      var token = jwt.sign(payload,'appa',{
        expiresIn:"2 days"
      })
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token
      });
    }
  })
})

apiRoutes.use(function(req, res, next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token,'appa',function(err, decoded) {       
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });       
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;         
        next();
      }
    });
  }
})

apiRoutes.post('/add',function(req, res){
  var tmp = new Temp({
    username: req.body.username,
    email: 'appasaheb.sawant@gmail.com',
    password: 'appa',
    admin: true,
    token: req.body.token
  })
  tmp.save(function(err){
    if(err) throw err;
    console.log('User added.')
    res.json({'success':true})
  })
})

app.use('/api',apiRoutes);

app.listen(port);
console.log('Api started at http://localhost:'+port);