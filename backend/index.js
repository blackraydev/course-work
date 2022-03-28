require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const errorMiddleware = require('./middlewares/error-middleware');
const authMiddleware = require('./middlewares/auth-middleware');
const { Sequelize } = require('sequelize');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));
app.use('/api', router);
app.use(errorMiddleware);
app.use(authMiddleware);

const start = async () => {
    try {
        const sequelize = new Sequelize({
            host: process.env.PG_HOST,
            database: process.env.PG_DATABASE,
            username: process.env.PG_USERNAME,
            port: process.env.PG_PORT,
            password: process.env.PG_PASSWORD,
            dialect: 'postgres',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            }
        });

        await sequelize.authenticate().then(() => {
            console.log('PostgreSQL has been successfully connected');
        })

        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();