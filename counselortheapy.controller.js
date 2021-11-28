const Therapy = require('../models/therapy.schema')

exports.getAllTherapy= async(req,res)=>{

    try{
        const therapy= await Therapy.find()
        res.json(therapy)
    }
    catch(err){
        res.send('Error'+err);
    }
};


exports.createTherapy=async(req,res)=>{
    const therapy=new Therapy({

        counselorId:req.body.counselorId,
        therapy:req.body.therapy
    })
    try{
       const a1=await therapy.save();
       res.json(a1);
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.updateTherapy=async(req,res)=>{
    Therapy.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                counselorId:req.body.counselorId,
                therapy:req.body.therapy
            }
        })
        .then(result =>{
            res.status(200).json({
                updated_Therapy:result
            })
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
};

exports.getTherapyId=async(req,res)=>{

    try{
        const therapy= await Therapy.findById(req.params.id)
        res.json(therapy)
    }
    catch(err){
        res.send('Error'+err);
    }
}


exports.deleteTherapyId=async(req,res)=>{
    try{
        const a1=await Therapy.deleteOne({_id : req.params.id})
        res.json(a1);
        }

    catch(err){
        res.send('Error'+err);
    }
}
