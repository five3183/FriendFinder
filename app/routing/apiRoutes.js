var friendArray = require("../data/friends")

var friendValue
var newFriend = {}
var bestFriendValue = 0
var bestFriend 

module.exports = function (app) {
    //get function to display friendArray in json
    app.get("/api/survey", function(req, res) {
        res.json(friendArray)
    })

    app.post("/api/survey", function (req, res) {
        friendArray.push(req.body)
        console.log(friendArray)
        newFriend = req.body
        newFriendName = req.body.name
        console.log("NEW ADDED FRIEND  "  + newFriendName)
        friendValuer(friendArray, newFriend)
    })
}

function friendValuer(friendArray, newFriend) {
    for(i = 0; i < friendArray.length - 1; i++){
        A0 = Math.abs(parseInt(friendArray[i].Q0) - newFriend.Q0)
        A1 = Math.abs(parseInt(friendArray[i].Q1) - newFriend.Q1)
        A2 = Math.abs(parseInt(friendArray[i].Q2) - newFriend.Q2)
        A3 = Math.abs(parseInt(friendArray[i].Q3) - newFriend.Q3)
        A4 = Math.abs(parseInt(friendArray[i].Q4) - newFriend.Q4)
        A5 = Math.abs(parseInt(friendArray[i].Q5) - newFriend.Q5)
        A6 = Math.abs(parseInt(friendArray[i].Q6) - newFriend.Q6)
        A7 = Math.abs(parseInt(friendArray[i].Q7) - newFriend.Q7)
        A8 = Math.abs(parseInt(friendArray[i].Q8) - newFriend.Q8)
        A9 = Math.abs(parseInt(friendArray[i].Q9) - newFriend.Q9)
        let friendValue = A0 + A1 + A2 + A3 + A4 + A5 + A6 + A7 + A8 + A9
        friendChecker(friendValue, newFriend)

    }
}

function friendChecker(friendValue, newFriend) {

    if (bestFriendValue === 0){
        let bestFriendValue = friendValue
        let bestFriend = newFriend
        console.log("NEW VALUE  "  + bestFriendValue)
        console.log("NAME  " + bestFriend)
        return bestFriendValue
    }

    else if (friendValue < bestFriendValue){
        let bestFriendValue = friendValue
        let bestFriend = newFriend.name
        console.log("NEW FRIEND DOT NAME  " + newFriend.name)
        console.log("<< BEST FRIEND VALUE>>>"  + bestFriendValue)
        console.log("This is your best friend:  " + bestFriend)
        return bestFriendValue
    }
}
