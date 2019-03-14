const express = require("express");
const path = require("path");
const admin = require("firebase-admin");
var _ = require("lodash");
const app = express();

// Fetch the service account key JSON file contents
const serviceAccount = require("./trainiac-ccc94-firebase-adminsdk-l3oiy-9ceed19a16.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
const usersCountRef = db.collection("usersCount").doc("usersCount");

getUsersCount = () => {
  usersCountRef.get().then(doc => {
    usersCount = doc.data().count;
  });
};

var usersCount = getUsersCount();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());

// Prerender
app.use(
  require("prerender-node").set("prerenderToken", "T7Q8m8gSJla7e2f8joL6")
);

app.post("/api/subscription", function(req, res) {
  let data = req.body;
  data.created_at = +new Date();
  db.collection("workout").add(data);
});

app.get("/api/usersCount", function(req, res) {
  res.json(usersCount);
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);

setInterval(() => {
  const number = _.random(0, 3);
  usersCountRef.get().then(doc => {
    usersCountRef.update({ count: doc.data().count + number });
    usersCount = doc.data().count + number;
  });
}, 120000);
