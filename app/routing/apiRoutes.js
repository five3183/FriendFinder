var friendArray = require("../data/friends")

module.exports = function (app) {
    //get function to display friendArray in json
    app.get("/api/survey", function(req, res) {
        res.json(friendArray)
    })

    app.post("/api/survey", function (req, res) {
        for(i = 0; i < friendArray.length; i++){
            A1 = Math.abs((parseInt(friendArray[i].q0)) - req.body.Q0)
            console.log("This is A1    "  + A1)
            A2 = Math.abs(parseInt(friendArray[i].q1) - req.body.Q1)
            A3 = Math.abs(parseInt(friendArray[i].q2) - req.body.Q2)
            A4 = Math.abs(parseInt(friendArray[i].q3) - req.body.Q3)
            A5 = Math.abs(parseInt(friendArray[i].q4) - req.body.Q4)
            A6 = Math.abs(parseInt(friendArray[i].q5) - req.body.Q5)
            A7 = Math.abs(parseInt(friendArray[i].q6) - req.body.Q6)
            A8 = Math.abs(parseInt(friendArray[i].q7) - req.body.Q7)
            A9 = Math.abs(parseInt(friendArray[i].q8) - req.body.Q8)
            A10 = Math.abs(parseInt(friendArray[i].q9) - req.body.Q9)
            var bestFriendValue = A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8 + A9 + A10
            console.log("best friend name:  "+ friendArray[i].name + "  best friend value:  " + bestFriendValue)
        }
        friendArray.push(req.body)
        console.log(friendArray)
    })
}

function nameFilter () {
    for(i=0; i<friendArray.length; i++) {
        if (req.body.name === friendArray[i].name) {
            friendFinder()
        }
        
    }
}
