const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { itemValidation } = require('../../validations');
const { itemController } = require('../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageItem'), validate(itemValidation.createItem), itemController.createItem)
  .get(auth('manageItem'), validate(itemValidation.getItems), itemController.getItems);

router
  .route('/:itemId')
  .get(auth('manageItem'), validate(itemValidation.getItem), itemController.getItem)
  .patch(auth('manageItem'), validate(itemValidation.updateItem), itemController.updateItem);

module.exports = router;
