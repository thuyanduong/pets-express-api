const Pet = require('../db/models/Pet');
const Owner = require('../db/models/Owner');

const addModels = (req, res, next) => {
    req.Pet = Pet;
    req.Owner = Owner;
    next();
  };

  module.exports = addModels;
