const Counselor = require("../models/counselor");


exports.getCounselor = async (req, res) => {
    try {
        const counselors = await Counselor.find();
        res.send(counselors);
    } catch (error) {
        console.log(error.message)
    }
},


exports.getCounselorId = async (req,res) => {

    try {
        const counselors = await Counselor.findById(req.params.id);
        res.status(200).json(counselors)

    } catch (error) {
      res.send('error' + error)

    }
 },

exports.createCounselor = async (req, res) =>{
    const counselor = new Counselor({

      email: req.body.email,
      userId: req.body.userId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      status: req.body.status,
      mobileNumber: req.body.mobileNumber,


      })
    try {
      const pdt = await counselor.save();
      res.status(201).json(pdt)

    } catch (error) {
        res.send(counselor)
    }
}

exports.updateCounselor = async(req,res) =>{

    try {
        const counselor = await Counselor.findById(req.params.id);

        counselor.email= req.body.email
        counselor.userId= req.body.userId
        counselor.firstName= req.body.firstName
        counselor.lastName= req.body.lastName
        counselor.status= req.body.status
        counselor.mobileNumber= req.body.mobileNumber

        const pdt = await counselor.save();
        res.json(pdt)

    } catch (error) {
      res.send('error' + error)

    }
}

exports.deleteCounselor = async(req,res) =>{
    try {
        const counselor = await Counselor.findByIdAndDelete(req.params.id)
        res.json(counselor)

    } catch (error) {
      res.json({message: err})

    }
}


