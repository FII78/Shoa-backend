const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { attendanceRequestValidation } = require('../../../validations');
const { attendanceRequestController } = require('../../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('myRequest'), validate(attendanceRequestValidation.createAttendanceRequest), attendanceRequestController.createAttendanceRequest)
  .get(auth('myRequest'), validate(attendanceRequestValidation.getAttendanceRequests), attendanceRequestController.getAttendanceRequests);

router
  .route('/:requestId')
  .get(auth('myRequest'), validate(attendanceRequestValidation.getAttendanceRequest), attendanceRequestController.getAttendanceRequest)
  .patch(auth('myRequest'), validate(attendanceRequestValidation.updateAttendanceRequest), attendanceRequestController.updateAttendanceRequest)
  .delete(auth('myRequest'), validate(attendanceRequestValidation.deleteAttendanceRequest), attendanceRequestController.deleteAttendanceRequest);

module.exports = router;