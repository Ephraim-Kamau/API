import logger from "./logger.js";

module.exports = {
    database: "food",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "food.sqlite",
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscored: true
        }
    },
    jwtSecret: "Food-AP1",
    jwtSession: { session: false }
};