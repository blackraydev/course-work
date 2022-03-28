const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const refreshTokens = prisma.tokens;

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15s'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '15d'})

        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        } catch (e) {
            return null;
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await refreshTokens.findFirst({
            where: { UserId: userId }
        });

        if (tokenData) {
            return await refreshTokens.update({
                where: { UserId: userId },
                data: { Token: refreshToken }
            });
        }

        const token = await refreshTokens.create({
            data: {
                UserId: userId, 
                Token: refreshToken
            }
        });

        return token;
    }

    async removeToken(refreshToken) {
        const tokenData = await refreshTokens.delete({
            where: { Token: refreshToken },
            select: {
                Id: true,
                UserId: true,
                Token: true,
            }
        });
        return tokenData;
    }

    async findToken(refreshToken) {
        const tokenData = await refreshTokens.findFirst({
            where: {
                Token: refreshToken
            }
        })
        return tokenData;
    }
}

module.exports = new TokenService();