module.exports = {
    database: "food_test",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "food.sqlite",
        logging: false,
        define: {
            underscored: true
        }
    },
    jwtSecret: "FOOD_TEST",
    jwtSession: { session: false }
};