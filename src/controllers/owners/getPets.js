const getPets = async (req, res) => {
    const {Owner, Pet, params: {ownerId}} = req
    const owner = await Owner.find(Number(ownerId));
    if (!owner) return res.sendStatus(404);
    const pets = await Pet.findByOwner(Number(ownerId))
    res.send({owner, pets});
}

module.exports = getPets