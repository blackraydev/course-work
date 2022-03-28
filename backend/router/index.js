const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();
const {body} = require('express-validator');
const reviewController = require('../controllers/review-controller');

router.post('/users/register',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration,
);
router.post('/users/login', userController.login);
router.post('/users/logout', userController.logout);
router.post('/sendActivationLink', userController.sendActivationLink);

router.post('/reviews/getAllReviews', reviewController.getAllReviews);
router.post('/reviews/getUserReviews', reviewController.getUsersReviews);
router.post('/reviews/createReview', reviewController.createReview);
router.post('/reviews/deleteReview', reviewController.deleteReview);

router.get('/activate/:link', userController.activate);
router.get('/tokens/refresh', userController.refresh);

module.exports = router