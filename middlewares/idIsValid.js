const { isValidObjectId } = require("mongoose");

const idIsValid = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    const error = new Error(`${id} is not valid id`);
    error.status = 400;
    next(error);
  }
  next();
};

module.exports = idIsValid;
