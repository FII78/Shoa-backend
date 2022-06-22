const express = require('express');
const auth = require('../../middlewares/auth');
const { notifController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .get(notifController.getNotifications)
  .post(notifController.addNotifications)
  .delete(notifController.deleteNotifications);


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: User management and retrieval
 */

/**
 * @swagger
 * /notification:
 *   get:
 *     summary: Get notification based on roles
 *     description: all users can get notifications.
 *     tags: [Notifications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *           description: User role
 *
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
 *                     $ref: '#/components/schemas/Notification'
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */