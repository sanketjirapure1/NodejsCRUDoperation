
const ClientSexuality = require("../models/clientsexuality");


exports.getClientSexuality = async (req, res) => {
    try {
        const clientsexualitys = await ClientSexuality.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(clientsexualitys);
    } catch (error) {
        console.log(error.message)
    }
},


exports.getClientSexualityId = async (req,res) => {

    try {
        const clientsexualitys = await ClientSexuality.findById(req.params.id);
        res.status(200).json(clientsexualitys)

    } catch (error) {
      res.send('error' + error)

    }
 },

exports.createClientSexuality = async (req, res ) =>{

    const clientsexuality = new ClientSexuality({

        counselorId: req.body.counselorId,
        sexuality: req.body.sexuality,

      })
      try {

        const pdt = await clientsexuality.save();
        res.status(201).json(pdt)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"," http://localhost:8000/books");

      } catch (error) {
          res.send(clientsexuality)
      }
}


exports.updateClientSexuality = async(req,res) =>{

    try {
        const clientsexuality = await ClientSexuality.findById(req.params.id);

        clientsexuality.counselorId = req.body.counselorId
        clientsexuality.sexuality = req.body.sexuality


        const pdt = await clientsexuality.save();
        res.json(pdt)

    } catch (error) {
      res.send('error' + error)

    }
}



exports.deleteClientSexuality = async(req,res) =>{
    try {
        const clientsexuality = await ClientSexuality.findByIdAndDelete(req.params.id)
        res.json(clientsexuality)

    } catch (error) {
      res.json({message: err})

    }
}
