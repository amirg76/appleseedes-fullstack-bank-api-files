const express = require("express");
const axios = require("axios");
const path = require("path");
// const users = require("./public/users.json");
const { log } = require("console");
const cors = require("cors");
const app = express();
app.use(express.json());
const {
  createUser,
  loadUsers,
  loadAccounts,
  getUserDetails,
  deleteUser,
  updateUserDeposit,
  updateUserCredit,
  updateUserWithdraw,
  updateUserTransfer,
} = require("./utils.js");

app.use(express.static(path.join(__dirname + "/public")));

const PORT = process.env.PORT || 5000;
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });
// }
app.use(cors());
app.get("/bank/get-all-users", async (req, res) => {
  try {
    const users = loadUsers();
    const accounts = loadAccounts();

    const allData = users.concat(accounts);
    res.status(200).send(allData);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.get("/bank/get-user-details", async (req, res) => {
  try {
    const allUserData = getUserDetails(req.body, res);
    res.status(200).send(allUserData);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/bank/createusers", async (req, res) => {
  try {
    createUser(req.body, res);
    const users = loadUsers();
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.delete("/bank/deleteusers", async (req, res) => {
  try {
    deleteUser(req.body, res);
    const users = loadUsers();
    console.log(users);
    // res.status(200).send("sucsses");
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put("/bank/update-user-deposit", async (req, res) => {
  try {
    updateUserDeposit(req.body, res);
    const users = loadUsers();
    console.log(users);
    // res.status(200).send("sucsses");
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.put("/bank/update-user-credit", async (req, res) => {
  try {
    updateUserCredit(req.body, res);
    const users = loadUsers();
    console.log(users);
    // res.status(200).send("sucsses");
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.put("/bank/update-user-withdraw", async (req, res) => {
  try {
    updateUserWithdraw(req.body, res);
    const users = loadUsers();
    console.log(users);
    // res.status(200).send("sucsses");
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.put("/bank/update-user-transfer", async (req, res) => {
  try {
    updateUserWithdraw(req.body, res);
    updateUserTransfer(req.body, res);

    const users = loadUsers();
    console.log(users);
    // res.status(200).send("sucsses");
    res.status(200).send(users);
  } catch (e) {
    res.status(400).send(e.message);
  }
});
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log("Listen to port: " + PORT);
});
