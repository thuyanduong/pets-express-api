const destroy = async (req, res) => {
    const { Pet, params: { id } } = req;
    const result = await Pet.destroy(Number(id));
    res.sendStatus(result ? 204 : 404);
}

module.exports = destroy