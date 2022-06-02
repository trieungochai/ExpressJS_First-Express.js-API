const express = require("express");
const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/friends", friendsController.getFriends);
app.get("/friends/:friendId", friendsController.getFriend);
app.post("/friends", friendsController.postFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
