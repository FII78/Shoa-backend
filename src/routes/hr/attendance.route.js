const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { attendanceValidation } = require('../../validations');
const { attendanceController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageAttendance'), validate(attendanceValidation.createAttendance), attendanceController.createAttendance)
  .get(auth('manageAttendance'), validate(attendanceValidation.getAttendances), attendanceController.getAttendances);

router
  .route('/:requestId')
  .get(auth('manageAttendance'), validate(attendanceValidation.getAttendance), attendanceController.getAttendance)
  .patch(auth('manageAttendance'), validate(attendanceValidation.updateAttendance), attendanceController.updateAttendance)
  .delete(auth('manageAttendance'), validate(attendanceValidation.deleteAttendance), attendanceController.deleteAttendance);

module.exports = router;