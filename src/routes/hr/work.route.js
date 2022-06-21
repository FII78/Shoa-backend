const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { workValidation } = require('../../validations');
const { workController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageEmployees'), validate(workValidation.createWork), workController.createWork)
  .get(auth('manageEmployees'), validate(workValidation.getWorks), workController.getWorks);

router
  .route('/:workId')
  .get(auth('manageEmployees'), validate(workValidation.getWork), workController.getWork)
  .patch(auth('manageEmployees'), validate(workValidation.updateWork), workController.updateWork)
  .delete(auth('manageEmployees'), validate(workValidation.deleteWork), workController.deleteWork);

module.exports = router;