const create = async (req, res) => {
    const { Pet, body } = req;
    const newPet = await Pet.create(body);
    newPet ?
      res.status(201).send(newPet)
      : res.status(500).send({ err: "Can't create" });
}

module.exports = create