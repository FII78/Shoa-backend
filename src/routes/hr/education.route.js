const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { educationValidation } = require('../../validations');
const { educationController } = require('../../controllers');
const multer = require("multer");
const imageStorage = require("../../utils/imageStorage");
const imageUpload = multer({ storage: imageStorage });

const router = express.Router();

router
  .route('/')
  .post(auth('manageEmployees'), imageUpload.array("file"), validate(educationValidation.createEducation), educationController.createEducation)
  .get(auth('manageEmployees'), validate(educationValidation.getEducations), educationController.getEducations);

router
  .route('/:educationId')
  .get(auth('manageEmployees'), validate(educationValidation.getEducation), educationController.getEducation)
  .patch(auth('manageEmployees'), validate(educationValidation.updateEducation), educationController.updateEducation)
  .delete(auth('manageEmployees'), validate(educationValidation.deleteEducation), educationController.deleteEducation);

module.exports = router;