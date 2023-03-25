const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 3,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const contentSchemaJoi = Joi.object({
  name: Joi.string().min(3).required(),
  title: Joi.string().required(),
  text: Joi.string().required(),
});

const schemas = {
  contentSchemaJoi,
};

const Content = model("content", contentSchema);

module.exports = {
  Content,
  schemas,
};
