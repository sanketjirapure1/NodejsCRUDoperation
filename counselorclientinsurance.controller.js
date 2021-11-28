const Insurance=require('../models/insurance.schema')

exports.getAllInsurance= async(req,res)=>{

    try{
        const insurance= await Insurance.find()
        res.json(insurance)
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.createInsurance=async(req,res)=>{
    const insurance=new Insurance({
        insurance:req.body.insurance,
        counselorId:req.body.counselorId
    })
    try{
       const a1=await insurance.save();
       res.json(a1);
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.updateInsurance=async(req,res)=>{
    Insurance.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                counselorId:req.body.counselorId,
                insurance:req.body.insurance,
            }
        })
        .then(result =>{
            res.status(200).json({
                updated_Insurance:result
            })
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
};

exports.getInsuranceId=async(req,res)=>{

    try{
        const insurance= await Insurance.findById(req.params.id)
        res.json(insurance)
    }
    catch(err){
        res.send('Error'+err);
    }
}
exports.deleteInsuranceId=async(req,res)=>{
    try{
        const a1=await Insurance.deleteOne({_id : req.params.id})
        res.json(a1);
        }

    catch(err){
        res.send('Error'+err);
    }
}
