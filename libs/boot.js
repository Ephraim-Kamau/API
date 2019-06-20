module.exports = app => {
    app.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`Food API - Port ${app.get("port")}`);
        });
    });
};