const userCtrl = {}

const user = require('../models/User.js')

userCtrl.getUsers = async (req,res) =>{
    const users = await user.find()
    res.json(users)
}

userCtrl.createUser = async (req, res) => {
    const newUser = new user(req.body);
    await newUser.save();
    res.send({message: 'user Created'})
}

userCtrl.getUser = async (req,res) => {
    const userF = await user.findById(req.params.id);
    res.send(userF)
}

userCtrl.updateUser = async (req, res) =>{
    const userF = await user.findByIdAndUpdate(req.params.id, req.body);
    res.send({message: 'the user has been modified', productoF})
}

userCtrl.deleteUser = async (req, res) =>{
    const userF = await user.findByIdAndDelete(req.params.id);
    res.send({message: 'user deleted', userF})
}

module.exports = userCtrl;