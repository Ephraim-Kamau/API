module.exports = app => {
    /**
    * @api {get} / API Status
    * * @apiGroup Status
* @apiSuccess {String} status API Status' message
* @apiSuccessExample {json} Success
* HTTP/1.1 200 OK
* {"status": "Food API"}
*/
    app.get("/", (req, res) => {
        res.json({ status: "Food API" });
    });
};