const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 1,
    name: "Quentin Tarantino",
  },
  {
    id: 2,
    name: "Christopher Nolan",
  },
  {
    id: 3,
    name: "Clint Eastwood",
  },
];

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist.",
    });
  }
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Cai!!!</li></ul>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});