const Appointment=require('../models/appointment.schema')

exports.getAppointment= async(req,res)=>{

    try{
        const appointment= await Appointment.find()
        res.json(appointment)
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.createAppointment=async(req,res)=>{
    const appointment = new Appointment({
        version:req.body.version,
        clientId:req.body.clientId,
        bookingId:req.body.bookingId
    })
    try{
       const a1=await appointment.save();
       res.json(a1);
    }
    catch(err){
        res.send('Error'+err);
    }
};

exports.updateAppointment=async(req,res)=>{
    Appointment.findByIdAndUpdate({_id:req.params.id},{
            $set:{
                version:req.body.version,
                clientId:req.body.clientId,
                bookingId:req.body.bookingId
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

exports.getAppointmentId=async(req,res)=>{

    try{
        const appointment= await Appointment.findById(req.params.id)
        res.json(appointment)
    }
    catch(err){
        res.send('Error'+err);
    }
}
exports.deleteAppointmentId=async(req,res)=>{
    try{
        const a1=await Appointment.deleteOne({_id : req.params.id})
        res.json(a1);
        }

    catch(err){
        res.send('Error'+err);
    }
}
