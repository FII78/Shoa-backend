const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { salaryValidation } = require('../../validations');
const { salaryController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageEmployees'), validate(salaryValidation.createSalary), salaryController.createSalary)
  .get(auth('manageEmployees'), validate(salaryValidation.getSalaries), salaryController.getSalaries);

router
  .route('/:salaryId')
  .get(auth('manageEmployees'), validate(salaryValidation.getSalary), salaryController.getSalary)
  .patch(auth('manageEmployees'), validate(salaryValidation.updateSalary), salaryController.updateSalary)
  .delete(auth('manageEmployees'), validate(salaryValidation.deleteSalary), salaryController.deleteSalary);

module.exports = router;