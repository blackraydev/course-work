const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const ApiError = require('../exceptions/api-error');

const reviews = prisma.reviews;

class ReviewService {
    async createReview(review) {
        const { userId, serviceId, comment, advantages, disadvantages, likes, rate, createDate } = review;

        return await reviews.create({
            data: {
                UserId: userId,
                ServiceId: serviceId,
                Comment: comment,
                Advantages: advantages,
                Disadvantages: disadvantages,
                Likes: likes,
                Rate: rate,
                CreateDate: createDate
            }
        })
    }

    async deleteReview(reviewId) {
        return await reviews.delete({
            where: {
                Id: reviewId
            }
        })
    }

    async getAllReviews(userId) {
        return await reviews.findMany({
            where: {
               UserId: !userId 
            }
        })
    }

    async getUserReviews(userId) {
        return await reviews.findMany({
            where: {
               UserId: userId 
            }
        })
    }
}

module.exports = new ReviewService();