const Education=require('../models/educations')

exports.getCounselorEducation= async(req,res)=>{

    try{
        const Educations= await Education.find();
        res.json(Educations)
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.getCounselorEducationId=async(req,res)=>{

    try{
        const Educations= await Education.findById(req.params.id)
        res.json(Educations)
    }
    catch(err){
        res.send('Error'+err);
    }
}

exports.createCounselorEducation=async(req,res)=>{
    const education=new Education({
        version:req.body.version,
        degree:req.body.degree,
        country:req.body.country
    })
    try{
       const et=await education.save();
       res.json(et);
    }
    catch(err){
        res.send('Error'+err);
    }
};



exports.updateCounselorEducation=async(req,res)=>{
    Education.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                version:req.body.version,
                degree:req.body.degree,
                country:req.body.country
            }
        })
        .then(result =>{
            res.status(200).json({
                updated_Education:result
            })
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
};


exports.deleteCounselorEducationId=async(req,res)=>{
    try{
        const education=await Education.deleteOne({_id : req.params.id})
        res.json(education);
        }

    catch(err){
        res.send('Error'+err);
    }
}
