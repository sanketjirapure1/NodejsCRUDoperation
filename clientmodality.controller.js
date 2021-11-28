
const ClientModality = require("../models/clientmodality");


exports.getClientModality = async (req, res) => {
    try {
        const clientmodalitys = await ClientModality.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(clientmodalitys);
    } catch (error) {
        console.log(error.message)
    }
},


exports.getClientModalityId = async (req,res) => {

    try {
        const clientmodalitys = await ClientModality.findById(req.params.id);
        res.status(200).json(clientmodalitys)

    } catch (error) {
      res.send('error' + error)

    }
 },

exports.createClientModality = async (req, res ) =>{

    const clientmodality = new ClientModality({

        counselorId: req.body.counselorId,
        modality: req.body.modality,

      })
      try {

        const pdt = await clientmodality.save();
        res.status(201).json(pdt)
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"," http://localhost:8000/books");

      } catch (error) {
          res.send(clientmodality)
      }
}



exports.updateClientModality = async(req,res) =>{

    try {
        const clientmodality = await ClientModality.findById(req.params.id);

        clientmodality.counselorId = req.body.counselorId
        clientmodality.modality = req.body.modality


        const pdt = await clientmodality.save();
        res.json(pdt)

    } catch (error) {
      res.send('error' + error)

    }
}



exports.deleteClientModality = async(req,res) =>{
    try {
        const clientmodality = await ClientModality.findByIdAndDelete(req.params.id)
        res.json(clientmodality)

    } catch (error) {
      res.json({message: err})

    }
}
