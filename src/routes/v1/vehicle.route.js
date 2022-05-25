const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const vehicleValidation = require('../../validations/vehicle.validation');
const vehicleController = require('../../controllers/vehicle.controller');

const router = express.Router();

router.route('/')
  .post(auth('manageUsers'), validate(vehicleValidation.createVehicle), vehicleController.createVehicle)
  .get(auth('manageUsers'), validate(vehicleValidation.getVehicles), vehicleController.getVehicles);

router
  .route('/:vehicleId')
  .get(auth('manageUsers'), validate(vehicleValidation.getVehicle), vehicleController.getVehicle)
  .patch( auth('manageUsers'),validate(vehicleValidation.updateVehicle), vehicleController.updateVehicle)
  .delete( auth('manageUsers'),validate(vehicleValidation.deleteVehicle), vehicleController.deleteVehicle);




// router.post('/', validate(vehicleValidation.createVehicle), vehicleController.createVehicle);
// router.get('/', validate(vehicleValidation.getVehicles), vehicleController.getVehicles);

// router.get(auth('getUsers/:vehicleId'), validate(vehicleValidation.getVehicle), vehicleController.getVehicle);
// router.patch(auth('manageVehicles/:vehicleId'), validate(vehicleValidation.updateVehicle), vehicleController.updateVehicle);
// router.delete(auth('manageVehicles/:vehicleId'), validate(vehicleValidation.deleteVehicle), vehicleController.deleteVehicle);

// router
//   .route('/:VehicleId')
//   .get('getVehicle', validate(vehicleValidation.getVehicle), vehicleController.getVehicle)
//   .patch('manageVehicles', validate(vehicleValidation.updateVehicle), vehicleController.updateVehicle)
//   .delete('manageVehicles', validate(vehicleValidation.deleteVehicle), vehicleController.deleteVehicle);
 
module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Vehicle
 *   description: Vehicle management and retrieval
 */

/**
 * @swagger
 * /Vehicle:
 *   post:
 *     summary: Create a Vehicle
 *     description: Only admins can create other Vehicle.
 *     tags: [Vehicle]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - model
 *               - yearofMan
 *               - noofcylinders
 *               - horsepower
 *               - cubicCapacity
 *               - color
 *               - carryingCapacity
 *               - status
 *               - regNum
 *               - engineNum
 *               - ChassisNum
 *               - PlateNum
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *               model:
 *                 type: string
 *               yearofMan:
 *                 type: Date
 *               noofcylinders:
 *                 type: number
 *               horsepower:
 *                 type: number
 *               cubicCapacity:
 *                 type: number
 *               color:
 *                 type: string
 *               carryingCapacity:
 *                 type: number
 *               status:
 *                 type: string
 *               regNum:
 *                 type: number
 *               engineNum:
 *                 type: number
 *               ChassisNum:
 *                 type: number
 *               PlateNum:
 *                 type: number
 *             example:
 *               name: "vehicle name"
 *               type: "vehicle type"
 *               model: "vehicle model"
 *               yearofMan: "2000-10-09"
 *               noofcylinders: 12
 *               horsepower: 12
 *               cubicCapacity: 12 
 *               color: "red"
 *               carryingCapacity: 12 
 *               status: Active
 *               regNum: 100
 *               engineNum: 11
 *               ChassisNum: 11
 *               PlateNum: 111
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Vehicle'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Vehicle
 *     description: Only admins can retrieve all Vehicle.
 *     tags: [Vehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Vehicle name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: Vehicle role
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
 *                     $ref: '#/components/schemas/Vehicle'
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
 * /Vehicle/{id}:
 *   get:
 *     summary: Get a Vehicle
 *     description: Logged in Vehicle can fetch only their own Vehicle information. Only admins can fetch other Vehicle.
 *     tags: [Vehicle]
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
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Vehicle'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Vehicle
 *     description: Logged in Vehicle can only update their own information. Only admins can update other Vehicle.
 *     tags: [Vehicle]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Vehicle id
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
 *                $ref: '#/components/schemas/Vehicle'
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
 *     description: Logged in Vehicle can delete only themselves. Only admins can delete other Vehicle.
 *     tags: [Vehicle]
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
 