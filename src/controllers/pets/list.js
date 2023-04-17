const list = async (req, res) => {
    const pets = await req.Pet.list();
    res.send(pets);
}

module.exports = list