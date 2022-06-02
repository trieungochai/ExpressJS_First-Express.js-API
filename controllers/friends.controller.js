const modal = require("../models/friends.modal");

function getFriends(req, res) {
  res.status(200).json(modal);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = modal[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist.",
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    id: modal.length,
    name: req.body.name,
  };

  modal.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  postFriend,
};
