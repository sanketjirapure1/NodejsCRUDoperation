const Client = require("../models/client");

exports.getClient = async (req, res) => {
    try {
        const clients = await Client.find()
        res.status(200).json(clients)

    } catch (error) {
      res.send('error' + error)

    }
}


exports.getClientId = async (req,res) => {

    try {
        const client = await Client .findById(req.params.id);
        res.status(200).json(client)

    } catch (error) {
      res.send('error' + error)

    }
 }

exports.createClient = async (req, res) =>{
    const client = new Client({

        email: req.body.email,
        userId: req.body.userId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        status: req.body.status,
        mobileNumber: req.body.mobileNumber,


      })
    try {
      const pdt = await client.save();
      res.status(201).json(pdt)
      res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"," http://localhost:8000/clients");

    } catch (error) {
        res.send(client)
    }
}

exports.updateClient = async(req,res) =>{

    try {
        const client = await Client.findById(req.params.id);


        client.email= req.body.email
        client.userId= req.body.userId
        client.firstName= req.body.firstName
        client.lastName= req.body.lastName
        client.status= req.body.status
        client.mobileNumber= req.body.mobileNumber

        const pdt = await client.save();
        res.json(pdt)

    } catch (error) {
      res.send('error' + error)

    }
}

exports.deleteClient = async(req,res) =>{
    try {
        const client = await Client.findByIdAndDelete(req.params.id)
        res.json(client)

    } catch (error) {
      res.json({message: err})

    }
}
