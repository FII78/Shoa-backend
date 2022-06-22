const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { employeeValidation } = require('../../../validations');
const { employeeController } = require('../../../controllers');
const multer = require("multer");
const imageStorage = require("../../../utils/imageStorage");
const imageUpload = multer({ storage: imageStorage });

const router = express.Router();

router.route('/')
  .post(imageUpload.single("file"), validate(employeeValidation.createEmployee), employeeController.createEmployee)
  .get(auth('manageEmployees'), validate(employeeValidation.getEmployees), employeeController.getEmployees);

router
  .route('/:employeeId')
  .get(auth('manageEmployees'), validate(employeeValidation.getEmployee), employeeController.getEmployee)
  .patch( auth('manageEmployees'),validate(employeeValidation.updateEmployee), employeeController.updateEmployee)
  .delete( auth('manageEmployees'),validate(employeeValidation.deleteEmployee), employeeController.deleteEmployee);

 
module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Employee management and retrieval
 */

/**
 * @swagger
 * /employee:
 *   post:
 *     summary: Create a Employee
 *     description: Only admin, super admins & general managers can create other employees.
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - dob
 *               - user
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               dob:
 *                 type: Date
 *               user:
 *                 type: string
 *             example:
 *               firstName: "first name"
 *               middleName: "last name"
 *               lastName: "last name"
 *               email: "email@example.com"
 *               dob: "1995-10-09"
 *               user: "62a6457b16b678a5341fa243"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Employees
 *     description: Only admin, super admins & general managers can retrieve all Employee.
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: firstName
 *         schema:
 *           type: string
 *         description: Employee first name
 *       - in: query
 *         name: middleName
 *         schema:
 *           type: string
 *         description: Employee middle name
 *       - in: query
 *         name: lastName
 *         schema:
 *           type: string
 *         description: Employee last name
  *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Employee email
  *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: Employee id
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of Vehicle
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Employee'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /employee/{id}:
 *   get:
 *     summary: Get a Employee
 *     description: Logged in employee can fetch only their own information. Only admin, super admins & general managers can fetch other Employee.
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Employee
 *     description: Logged in employee can only update their own information. Only admin, super admins & general managers can update other Vehicle.
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Employee id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a Vehicle
 *     description: Logged in employee can delete only themselves. Only admin, super admins & general managers can delete other Vehicle.
 *     tags: [Employee]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
 