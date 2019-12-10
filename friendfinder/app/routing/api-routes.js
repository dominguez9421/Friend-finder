// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================


const friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================


module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------


    // POST route to /api/friends (This is used to handle incoming survey results and compatability logic)
    app.post("/api/friends", function (req, res) {

        // API POST Requests
        app.post("/api/friends", function (req, res) {
            let userScore = req.body.scores;
            const scoresArr = [];
            let bestMatch = 0;


            for (var i = 0; i < friends.length; i++) {
                var scoreDiff = 0;
                for (var j = 0; j < userScore.length; j++) {
                    scoreDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScore[j])))
                }
                scoresArr.push(scoreDiff);
            }

            // loop through ours scoresArr
            for (var i = 0; i < scoresArr.length; i++) {
                if (scoresArr[i] <= scoresArr[bestMatch]) {
                    bestMatch = i;
                }
            }

            // return the best match
            let soulMate = friends[bestMatch];
            res.json(soulMate);
            friends.push(req.body)

        });


        app.post("/api/clear", function (req, res) {
            // Empty out the arrays of data
            friends.length = [];
            res.json({
                ok: true
            });
        });
    });
};