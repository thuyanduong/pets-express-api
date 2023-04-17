const list = async (req, res) => {
    const { Owner, params: { id } } = req;
    const owner = await Owner.find(Number(id));
    if (!owner) return res.sendStatus(404);
    res.send(owner);
}

module.exports = list