const reviewService = require('../service/review-service');

class ReviewController {
    async deleteReview(req, res, next) {
        try {
            const { reviewId } = req.body;
            const data = await reviewService.deleteReview(reviewId);
            
            return res.json(data);
        } catch (e) {
            next(e);
        }
    }

    async createReview(req, res, next) {
        try {
            const { review } = req.body;
            const data = await reviewService.createReview(review);
            
            return res.json(data);
        } catch (e) {
            next(e);
        }
    }

    async getAllReviews(req, res, next) {
        try {
            const { userId } = req.body;
            const reviews = await reviewService.getAllReviews(userId);
            
            return res.json(reviews);
        } catch (e) {
            next(e);
        }
    }

    async getUsersReviews(req, res, next) {
        try {
            const { userId } = req.body;
            const reviews = await reviewService.getUserReviews(userId);
            
            return res.json(reviews);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ReviewController();