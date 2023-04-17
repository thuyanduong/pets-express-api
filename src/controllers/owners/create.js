const create = async (req, res) => {
    const {name} = req.body;
    const {Owner} = req
    const newOwner = await Owner.create(name)
    if(newOwner){
        res.status(201).send(newOwner)
    }else{
        res.sendStatus(500)
    }
}

module.exports = create