var uuid = require("uuid/v4");

var friendsData = [

  {
    name: "Ahmed",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ],
    id: uuid()
  },
  {
    name: "Alex",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      3,
      4,
      4,
      2,
      1,
      1,
      2,
      3,
      4,
      1
    ],
    id: uuid()
  },
  {
    name: "Tammer",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [
      1,
      1,
      3,
      4,
      1,
      1,
      2,
      5,
      3,
      5
    ],
    id: uuid()
  }
]

module.exports = friendsData;