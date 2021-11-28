const Association=require('../models/association.schema')

exports.getAllAssociation= async(req,res)=>{

    try{
        const association= await Association.find()
        res.json(association)
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.createAssociation=async(req,res)=>{
    const association=new Association({
        counselorId:req.body.counselorId,
        organizationName:req.body.organizationName,
        country:req.body.country

    })
    try{
       const a1=await association.save();
       res.json(a1);
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.updateAssociation=async(req,res)=>{
    Association.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                counselorId:req.body.counselorId,
                organizationName:req.body.organizationName,
                country:req.body.country

            }
        })
        .then(result =>{
            res.status(200).json({
                updated_Association:result
            })
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
};

exports.getAssociationId=async(req,res)=>{

    try{
        const association= await Association.findById(req.params.id)
        res.json(association)
    }
    catch(err){
        res.send('Error'+err);
    }
}
exports.deleteAssociationId=async(req,res)=>{
    try{
        const a1=await Association.deleteOne({_id : req.params.id})
        res.json(a1);
        }

    catch(err){
        res.send('Error'+err);
    }
}
