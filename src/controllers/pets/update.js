const update = async (req, res) => {
    const {
        Pet,
        params: { id },
        body,
      } = req;
      const pet = await Pet.update(Number(id), body);
      if (!pet) return res.sendStatus(404);
      res.send(pet);
}

module.exports = update