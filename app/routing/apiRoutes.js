var friendArray = require("../data/friends")

module.exports = function (app) {
    //get function to display friendArray in json
    app.get("/api/survey", function(req, res) {
        res.json(friendArray)
    })

    app.post("/api/survey", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "", 
            friendValue: 50
        }

        var userData = req.body

        console.log(userData)

        var friendValue = 0
        friendArray.push(userData)

        for(i = 0; i < friendArray.length - 1; i++){
            A0 = Math.abs(parseInt(friendArray[i].Q0) - userData.Q0)
            A1 = Math.abs(parseInt(friendArray[i].Q1) - userData.Q1)
            A2 = Math.abs(parseInt(friendArray[i].Q2) - userData.Q2)
            A3 = Math.abs(parseInt(friendArray[i].Q3) - userData.Q3)
            A4 = Math.abs(parseInt(friendArray[i].Q4) - userData.Q4)
            A5 = Math.abs(parseInt(friendArray[i].Q5) - userData.Q5)
            A6 = Math.abs(parseInt(friendArray[i].Q6) - userData.Q6)
            A7 = Math.abs(parseInt(friendArray[i].Q7) - userData.Q7)
            A8 = Math.abs(parseInt(friendArray[i].Q8) - userData.Q8)
            A9 = Math.abs(parseInt(friendArray[i].Q9) - userData.Q9)

            friendValue = A0 + A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8 + A9

            if (friendValue <= bestMatch.friendValue){
                bestMatch.name = friendArray[i].name
                bestMatch.photo = friendArray[i].image
                bestMatch.friendValue = friendValue
            }
        }

        res.json(bestMatch)
    })   
}