const User = require("../models/user");
var jwt = require("jwt-simple");
var auth = require("../auth");
var cfg = require("../utils/config");
var moment = require('moment');


exports.getAllUser = async (req, res) => {
  try {
           const users = await User.find();
          res.send( users);
        } catch (error) {
           console.log(error.message)
       }
},


exports.getUserId = async (req,res) => {

  try {
      const users = await User.findById(req.params.id);
      res.status(200).json(users)

  } catch (error) {
    res.send('error' + error)

  }
},

exports.createToken =  (req, res) =>{
  if (req.body.email && req.body.password) {
    const email = req.body.email;
    const password = req.body.password;
    var user = User.find((u)  => {
        return u.email === email && u.password === password;
    });

    if (user) {
        var payload = {
            id: user._id
        };
        var token = jwt.encode(payload, cfg.jwtSecret);

        res.json({

            token: token
        });
    } else {
        res.sendStatus(401);
    }
} else {
    res.sendStatus(401);
}
},


exports.createUser = async (req, res ) =>{

  const user = new User({

    email: req.body.email,
    mobileNumber: req.body.mobileNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    googleId: req.body.googleId,
    enabled: req.body.enabled,


})
try {
    const pdt = await user.save();
    res.status(201).json(pdt)

    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"," http://localhost:8000/users");

} catch (error) {
    res.send(user)
}
}


//search by fromdate to todate

exports.updateSearch = async(req,res,next) =>{

  let aggregate_options = [];
  let match = {};

  if (req.query.startDate && req.query.endDate) {
      let d = moment(req.query.startDate).add(1,'day').subtract(1,'year');
      let e = moment(req.query.endDate).add(1,'day');
      match = {$gte: new Date(d),$lt: new Date(e)};
  }
  aggregate_options.push(match);

  const getDate=aggregate_options.find((d)=>{
      return d.$lt && d.$gte;
  })
  const users=await User.find();
  const getAllUsersSearchByDate=users.filter((d)=>{
     return d.fromdate > getDate.$gte && d.todate <= getDate.$lt;
     //console.log(d)
 })
 res.json(getAllUsersSearchByDate)
}




exports.updateUser = async(req,res) =>{

    try {
        const user = await User.findById(req.params.id);

        user.email= req.body.email
        user.mobileNumber= req.body.mobileNumber
        user.firstName= req.body.firstName
        user.lastName= req.body.lastName
        user.password= req.body.password
        user.googleId= req.body.googleId
        user.enabled= req.body.enabled


        const pdt = await user.save();
        res.json(pdt)

    } catch (error) {
      res.send('error' + error)

    }
}


exports.deleteUser = async(req,res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.json(user)

    } catch (error) {
      res.json({message: err})

    }
}
