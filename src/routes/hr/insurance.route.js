const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { insuranceValidation } = require('../../validations');
const { insuranceController } = require('../../controllers');
const multer = require("multer");
const imageStorage = require("../../utils/imageStorage");
const imageUpload = multer({ storage: imageStorage });

const router = express.Router();

router
  .route('/')
  .post(auth('manageEmployees'), imageUpload.array("file"), validate(insuranceValidation.createInsurance), insuranceController.createInsurance)
  .get(auth('manageEmployees'), validate(insuranceValidation.getInsurances), insuranceController.getInsurances);

router
  .route('/:insuranceId')
  .get(auth('manageEmployees'), validate(insuranceValidation.getInsurance), insuranceController.getInsurance)
  .patch(auth('manageEmployees'), validate(insuranceValidation.updateInsurance), insuranceController.updateInsurance)
  .delete(auth('manageEmployees'), validate(insuranceValidation.deleteInsurance), insuranceController.deleteInsurance);

module.exports = router;