var friendArray = require("./data/friends")


function getFriend () {
    var currentURL = window.location.origin
    $.ajax({ url: currentURL + "/api/survey", method: "GET"})
    .then(function(friendArray){
        for(i=0; i <friendArray.length; i ++){
            console.log(friendArray[i])
        }
    })
}

module.exports = getfriend