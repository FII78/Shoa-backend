const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { designationValidation } = require('../../validations');
const { designationController } = require('../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageDesignation'), validate(designationValidation.createDesignation), designationController.createDesignation)
  .get(auth('manageDesignation'), validate(designationValidation.getDesignations), designationController.getDesignations);

router
  .route('/:designationId')
  .get(auth('manageDesignation'), validate(designationValidation.getDesignation), designationController.getDesignation)
  .patch( auth('manageDesignation'),validate(designationValidation.updateDesignation), designationController.updateDesignation)
  .delete( auth('manageDesignation'),validate(designationValidation.deleteDesignation), designationController.deleteDesignation);

 
module.exports = router;