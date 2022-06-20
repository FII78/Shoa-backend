const express = require('express');
const auth = require('../../../middlewares/auth');
const validate = require('../../../middlewares/validate');
const { companyValidation } = require('../../../validations');
const { companyController } = require('../../../controllers');

const router = express.Router();

router.route('/')
  .post(auth('manageCompany'), validate(companyValidation.createCompany), companyController.createCompany)
  .get(auth('manageCompany'), validate(companyValidation.getCompanies), companyController.getCompanies);

router
  .route('/:companyId')
  .get(auth('manageCompany'), validate(companyValidation.getCompany), companyController.getCompany)
  .patch(auth('manageCompany'), validate(companyValidation.updateCompany), companyController.updateCompany);

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
 *     description: Only super admins can create companies.
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
 *   get:
 *     summary: Get all companies
 *     description: Only super admins can retrieve all companies.
 *     tags: [Company]
 *     security:
 *       - bearerAuth: []
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
 *                     $ref: '#/components/schemas/Company'
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
 * /company/{id}:
 *   get:
 *     summary: Get a Company
 *     description: Only super admins can retrieve a company.
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
 *     description: Only super admins can update a company.
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
