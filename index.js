const express = require("express");
const path = require("path");
const admin = require("firebase-admin");
const app = express();

// Fetch the service account key JSON file contents
const serviceAccount = require("./trainiac-ccc94-firebase-adminsdk-l3oiy-9ceed19a16.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

var db = admin.firestore();
var docRef = db.collection('workout')

const userRef = db.collection("workout").add({
    fullname: "Test",
    email: "Test@test.com"
  });  

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// Prerender
app.use(
  require("prerender-node").set("prerenderToken", "T7Q8m8gSJla7e2f8joL6")
);

// An api endpoint that returns a short list of items
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
