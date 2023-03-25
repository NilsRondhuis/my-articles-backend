const {
  contents: { Content },
} = require("../models");
const { ctrlWrapper, HttpError } = require("../helpers");

const get = async (req, res) => {
  const result = await Content.find();
  res.json({
    status: "success",
    code: 200,
    data: {
      contents: result,
    },
  });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Content.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  } else {
    res.json({
      status: "success",
      code: 200,
      data: {
        contents: result,
      },
    });
  }
};

const create = async (req, res) => {
  const result = await Content.create(req.body);
  res.status(201).json({
    message: "success",
    code: 201,
    data: {
      content: result,
    },
  });
};

const update = async (req, res) => {
  const { id } = req.params;
  const result = await Content.findByIdAndUpdate(id, req.body, { new: true });
  res.json({
    message: "success",
    code: 200,
    data: {
      content: result,
    },
  });
};

const remove = async (req, res) => {
  const { id } = req.params;
  const result = await Content.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, "Not found");
  } else {
    res.json({
      message: "deleted",
      code: 200,
    });
  }
};

module.exports = {
  get: ctrlWrapper(get),
  create: ctrlWrapper(create),
  getById: ctrlWrapper(getById),
  update: ctrlWrapper(update),
  remove: ctrlWrapper(remove),
};
