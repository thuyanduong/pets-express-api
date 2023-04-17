const list = async (req, res) => {
    const {Owner} = req
    const owners = await Owner.list()
    if (owners){
        res.send(owners)
    }else{
        res.sendStatus(500)
    }
}

module.exports = list