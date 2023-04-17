const update = async (req, res) => {
    const {
        Owner,
        params: { id },
      } = req;
      const updated_at = new Date(Date.now());
      const body = Object.assign(req.body, {updated_at: updated_at})
      const owner = await Owner.update(Number(id), body);
      if (!owner) return res.sendStatus(404);
      res.send(owner);
}

module.exports = update