// // const express = require("express");
// import express from "express";
// // const axios = require("axios");
// import axios from "axios";
// // const path = require("path");
// import path from "path";
// // const users = require("./public/users.json");
// // const { log } = require("console");
// // const cors = require("cors");
// import cors from "cors";
// const app = express();

// app.use(express.json());
// // const {
// //   createUser,
// //   loadUsers,
// //   loadAccounts,
// //   getUserDetails,
// //   deleteUser,
// //   updateUserDeposit,
// //   updateUserCredit,
// //   updateUserWithdraw,
// //   updateUserTransfer,
// // } = require("./utils.js");
// import {
//   createUser,
//   loadUsers,
//   loadAccounts,
//   getUserDetails,
//   deleteUser,
//   updateUserDeposit,
//   updateUserCredit,
//   updateUserWithdraw,
//   updateUserTransfer,
// } from "./utils.js";

// ////////
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));

// app.use(express.static(path.join(__dirname + "/public")));
// //////
// // app.use(express.static(path.join(__dirname + "/public")));

// // const PORT = process.env.PORT || 5000;
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static("build"));
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.resolve(__dirname, "build", "index.html"));
// //   });
// // }

// app.use(cors());
// app.get("/get-all-users", async (req, res) => {
//   try {
//     const users = loadUsers();
//     const accounts = loadAccounts();

//     const allData = users.concat(accounts);

//     res.status(200).send(allData);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
// app.get("/bank/get-user-details", async (req, res) => {
//   try {
//     const allUserData = getUserDetails(req.body, res);
//     res.status(200).send(allUserData);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// app.post("/bank/createusers", async (req, res) => {
//   try {
//     createUser(req.body, res);
//     const users = loadUsers();
//     res.status(200).send(users);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
// app.delete("/bank/deleteusers", async (req, res) => {
//   try {
//     deleteUser(req.body, res);
//     const users = loadUsers();
//     console.log(users);
//     // res.status(200).send("sucsses");
//     res.status(200).send(users);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// app.put("/bank/update-user-deposit", async (req, res) => {
//   try {
//     updateUserDeposit(req.body, res);
//     const users = loadUsers();
//     console.log(users);
//     // res.status(200).send("sucsses");
//     res.status(200).send(users);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });

// app.put("/bank/update-user-credit", async (req, res) => {
//   try {
//     updateUserCredit(req.body, res);
//     const users = loadUsers();
//     console.log(users);
//     // res.status(200).send("sucsses");
//     res.status(200).send(users);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
// app.put("/bank/update-user-withdraw", async (req, res) => {
//   try {
//     updateUserWithdraw(req.body, res);
//     const users = loadUsers();
//     console.log(users);
//     // res.status(200).send("sucsses");
//     res.status(200).send(users);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
// app.put("/bank/update-user-transfer", async (req, res) => {
//   try {
//     updateUserWithdraw(req.body, res);
//     updateUserTransfer(req.body, res);

//     const users = loadUsers();
//     console.log(users);
//     // res.status(200).send("sucsses");
//     res.status(200).send(users);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// });
// // app.listen(PORT, (err) => {
// //   if (err) return console.log(err);
// //   console.log("Listen to port: " + PORT);
// // });
// const mongoose = require("mongoose");
// const app = require("./app/app.js");
////
// import mongoose from "mongoose";
// import { app } from "./app/app.js";
////
// mongoose.connect(
//   "mongodb://127.0.0.1/Products",
//   (error, mongoConnectionInstance) => {
//     if (error) throw Error("Mongoose Connection!!, Error: " + error);
//     if (!process.env.NODE_ENV) {
//       const { host, port, name } = mongoConnectionInstance;
//       console.log({ host, port, name });
//     }
//   }
// );
import { app } from "./app/app.js";
import "./app/db/mongoose.js";
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("SERVER IS UP AND RUNNING ON PORT " + PORT));

// "heroku-postbuild": "npm install --prefix /client && npm run build --prefix /client"

//user:amirg76
//pass:BaRS3JnIqbpUxxup
// mongodb+srv://amirg76:<password>@cluster0.y7roq.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://amirg76:BaRS3JnIqbpUxxup@cluster0.y7roq.mongodb.net/?retryWrites=true&w=majority
