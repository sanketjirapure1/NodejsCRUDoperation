const Certificate=require('../models/certificate.schema')

exports.getAllCertificate= async(req,res)=>{

    try{
        const certificate= await Certificate.find()
        res.json(certificate)
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.createCertificate=async(req,res)=>{
    const certificate=new Certificate({
        counselorId:req.body.counselorId,
        degree:req.body.degree,
        yearGraduated:req.body.yearGraduated
    })
    try{
       const a1=await certificate.save();
       res.json(a1);
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.updateCertificate=async(req,res)=>{
    Certificate.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                counselorId:req.body.counselorId,
                degree:req.body.degree,
                yearGraduated:req.body.yearGraduated
            }
        })
        .then(result =>{
            res.status(200).json({
                updated_Certificate:result
            })
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
};

exports.getCertificateId=async(req,res)=>{

    try{
        const certificate= await Certificate.findById(req.params.id)
        res.json(certificate)
    }
    catch(err){
        res.send('Error'+err);
    }
}
exports.deleteCertificateId=async(req,res)=>{
    try{
        const a1=await Certificate.deleteOne({_id : req.params.id})
        res.json(a1);
        }

    catch(err){
        res.send('Error'+err);
    }
}
