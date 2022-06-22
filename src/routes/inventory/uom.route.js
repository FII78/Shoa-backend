const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { uomValidation } = require('../../validations');
const { uomController } = require('../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageUom'), validate(uomValidation.createUom), uomController.createUom)
  .get(auth('manageUom'), validate(uomValidation.getUoms), uomController.getUoms);

router
  .route('/:uomId')
  .get(auth('manageUom'), validate(uomValidation.getUom), uomController.getUom)
  .patch(auth('manageUom'), validate(uomValidation.updateUom), uomController.updateUom);

module.exports = router;
