const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");
const { validateBody, idIsValid } = require("../../middlewares");
const {
  contents: { schemas },
} = require("../../models");

router.get("/", ctrl.contents.get);

router.get("/:id", idIsValid, ctrl.contents.getById);

router.post("/", validateBody(schemas.contentSchemaJoi), ctrl.contents.create);

router.put(
  "/:id",
  idIsValid,
  validateBody(schemas.contentSchemaJoi),
  ctrl.contents.update
);

router.delete("/:id", idIsValid, ctrl.contents.remove);

module.exports = router;
