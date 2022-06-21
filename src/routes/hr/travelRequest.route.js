const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { travelRequestValidation } = require('../../validations');
const { travelRequestController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('myRequest'), validate(travelRequestValidation.createTravelRequest), travelRequestController.createTravelRequest)
  .get(auth('myRequest'), validate(travelRequestValidation.getTravelRequests), travelRequestController.getTravelRequests);

router
  .route('/:requestId')
  .get(auth('myRequest'), validate(travelRequestValidation.getTravelRequest), travelRequestController.getTravelRequest)
  .patch(auth('myRequest'), validate(travelRequestValidation.updateTravelRequest), travelRequestController.updateTravelRequest)
  .delete(auth('myRequest'), validate(travelRequestValidation.deleteTravelRequest), travelRequestController.deleteTravelRequest);

module.exports = router;