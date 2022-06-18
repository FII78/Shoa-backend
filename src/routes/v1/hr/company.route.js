const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { companyValidation } = require('../../../validations');
const { companyController } = require('../../../controllers');

const router = express.Router();

router.route('/').post(validate(companyValidation.createCompany), companyController.createCompany);

router
  .route('/:companyId')
  .get(validate(companyValidation.getCompany), companyController.getCompany)
  .patch(validate(companyValidation.updateCompany), companyController.updateCompany);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Company
 *   description: Company management and retrieval
 */

/**
 * @swagger
 * /company:
 *   post:
 *     summary: Create a Company
 *     tags: [Company]
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
 *               - abbreviation
 *               - website
 *               - telephone
 *               - fax
 *               - email
 *               - date  
 *             properties:
 *               name:
 *                  type: string
 *               abbreviation:
 *                  type: string
 *               website:
 *                  type: string
 *               telephone:
 *                  type: string
 *               fax:
 *                  type: string
 *               email:
 *                  type: string
 *               date:
 *                  type: Date
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Company'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 */

/**
 * @swagger
 * /company/{id}:
 *   get:
 *     summary: Get a Company
 *     tags: [Company]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Company'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Company
 *     tags: [Company]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Company id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                  type: string
 *               abbreviation:
 *                  type: string
 *               website:
 *                  type: string
 *               telephone:
 *                  type: string
 *               fax:
 *                  type: string
 *               email:
 *                  type: string
 *               date:
 *                  type: Date
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Company'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
