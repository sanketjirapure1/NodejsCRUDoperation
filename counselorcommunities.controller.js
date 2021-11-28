const Communitie=require('../models/communities.schema')

exports.getAllCommunitie= async(req,res)=>{

    try{
        const communities= await Communitie.find()
        res.json(communities)
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.createCommunitie=async(req,res)=>{
    const communities=new Communitie({
        version:req.body.version,
        counselorId:req.body.counselorId,
        communities:req.body.communities
    })
    try{
       const a1=await communities.save();
       res.json(a1);
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.updateCommunitie=async(req,res)=>{
    Communitie.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                version:req.body.version,
                counselorId:req.body.counselorId,
                communities:req.body.communities
            }
        })
        .then(result =>{
            res.status(200).json({
                updated_product:result
            })
        })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
};

exports.getCommunitieId=async(req,res)=>{

    try{
        const communities= await Communitie.findById(req.params.id)
        res.json(communities)
    }
    catch(err){
        res.send('Error'+err);
    }
}
exports.deleteCommunitieId=async(req,res)=>{
    try{
        const a1=await Communitie.deleteOne({_id : req.params.id})
        res.json(a1);
        }

    catch(err){
        res.send('Error'+err);
    }
}
