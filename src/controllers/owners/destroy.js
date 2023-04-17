const destroy = async (req, res) => {
    const { Owner, params: { id } } = req;
    const result = await Owner.destroy(Number(id));
    res.sendStatus(result ? 204 : 404);
}

module.exports = destroy