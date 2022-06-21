const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { branchValidation } = require('../../validations');
const { branchController } = require('../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageBranch'), validate(branchValidation.createBranch), branchController.createBranch)
  .get(auth('manageBranch'), validate(branchValidation.getBranches), branchController.getBranches);

router
  .route('/:branchId')
  .get(auth('manageBranch'), validate(branchValidation.getBranch), branchController.getBranch)
  .patch( auth('manageBranch'),validate(branchValidation.updateBranch), branchController.updateBranch)
  .delete( auth('manageBranch'),validate(branchValidation.deleteBranch), branchController.deleteBranch);

 
module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Branch
 *   description: Branch management and retrieval
 */

/**
 * @swagger
 * /branch:
 *   post:
 *     summary: Create a Branch
 *     description: Only admins can create other Branches.
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - branchManager
 *               - location
 *               - telephone
 *               - email
 *               - type
 *             properties:
 *               branchManager:
 *                 type: string
 *               location:
 *                 $ref: '#/components/schemas/Location'
 *               telephone:
 *                 $ref: '#/components/schemas/Telephone'
 *               email:
 *                 $ref: '#/components/schemas/Email'
 *               type:
 *                 type: string
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Branch'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Branches
 *     description: Only admins can retrieve all Branch.
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: branchManager
 *         schema:
 *           type: string
 *         description: branch Manager
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: branch type
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
 *                     $ref: '#/components/schemas/Branch'
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
 * /branch/{id}:
 *   get:
 *     summary: Get a Branch
 *     description: Logged in Branch can fetch only their own information. Only admins can fetch other Branch.
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Branch'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Branch
 *     description: Logged in Branch can only update their own information. Only admins can update other Branch.
 *     tags: [Branch]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Branch id
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
 *                $ref: '#/components/schemas/Branch'
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
 *     summary: Delete a Branch
 *     description: Logged in Branch can delete only themselves. Only admins can delete other Branch.
 *     tags: [Branch]
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
 