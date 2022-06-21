const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { leaveRequestValidation } = require('../../../validations');
const { leaveRequestController } = require('../../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('myRequest'), validate(leaveRequestValidation.createLeaveRequest), leaveRequestController.createLeaveRequest)
  .get(auth('myRequest'), validate(leaveRequestValidation.getLeaveRequests), leaveRequestController.createLeaveRequest);

router
  .route('/:requestId')
  .get(auth('myRequest'), validate(leaveRequestValidation.getLeaveRequest), leaveRequestController.getLeaveRequest)
  .patch(auth('myRequest'), validate(leaveRequestValidation.updateLeaveRequest), leaveRequestController.updateLeaveRequest)
  .delete(auth('myRequest'), validate(leaveRequestValidation.deleteLeaveRequest), leaveRequestController.deleteLeaveRequest);

module.exports = router;