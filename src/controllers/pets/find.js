const list = async (req, res) => {
    const { Pet, params: { id } } = req;
    const pet = await Pet.find(Number(id));
    if (!pet) return res.sendStatus(404);
    res.send(pet);
}

module.exports = list