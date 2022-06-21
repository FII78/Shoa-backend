const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { attendanceRequestValidation } = require('../../../validations');
const { attendanceRequestController } = require('../../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageEmployees'), validate(attendanceRequestValidation.createAttendanceRequest), attendanceRequestController.createAttendanceRequest)
  .get(auth('manageEmployees'), validate(attendanceRequestValidation.getAttendanceRequests), attendanceRequestController.getAttendanceRequests);

router
  .route('/:requestId')
  .get(auth('manageEmployees'), validate(attendanceRequestValidation.getAttendanceRequest), attendanceRequestController.getAttendanceRequest)
  .patch(auth('manageEmployees'), validate(attendanceRequestValidation.updateAttendanceRequest), attendanceRequestController.updateAttendanceRequest)
  .delete(auth('manageEmployees'), validate(attendanceRequestValidation.deleteAttendanceRequest), attendanceRequestController.deleteAttendanceRequest);

module.exports = router;