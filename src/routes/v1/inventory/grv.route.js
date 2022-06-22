const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { grvValidation } = require('../../../validations');
const { grvController } = require('../../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageGrv'), validate(grvValidation.createGrv), grvController.createGrv)
  .get(auth('manageGrv'), validate(grvValidation.getGrvs), grvController.getGrvs);

router
  .route('/:grvId')
  .get(auth('manageGrv'), validate(grvValidation.getGrv), grvController.getGrv)
  .patch(auth('manageGrv'), validate(grvValidation.updateGrv), grvController.updateGrv);

module.exports = router;
