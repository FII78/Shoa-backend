const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const {assignmentValidation} = require('../../validations');
const {assignmentController} = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageLogistics'), validate(assignmentValidation.createAssignment), assignmentController.createAssignment)
  .get(auth('manageLogistics'), validate(assignmentValidation.getAssignments), assignmentController.getAssignments);

router
  .route('/:assignmentId')
  .get(auth('manageLogistics'), validate(assignmentValidation.getAssignment), assignmentController.getAssignment)
  .patch(auth('manageLogistics'), validate(assignmentValidation.updateAssignment), assignmentController.updateAssignment)
  .delete(auth('manageLogistics'), validate(assignmentValidation.deleteAssignment), assignmentController.deleteAssignment);

  module.exports = router;