function bestFriend(frnds) {
  let biggestFriend = "";
  for (let i = 0; i < frnds.length; i++) {
    let friend = frnds[i];

    if (friend.length > biggestFriend.length) {
      biggestFriend = frnds[i];
    }
  }
  return biggestFriend;
}

let friends = [
  "kazi israfil",
  "rakib",
  "tanvir",
  "fahim",
  "newaz",
  "robayed",
  "sami",
  "sohel",
  "milon",
  "faisal",
];

let biggestFrndIs = bestFriend(friends);

console.log(biggestFrndIs);
