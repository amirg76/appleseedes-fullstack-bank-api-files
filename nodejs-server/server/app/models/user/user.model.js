import mongoose from "mongoose";
import { userSchema } from "./user.schema.js";

userSchema.statics.findAllUsers = function () {
  return this.find({});
};
userSchema.statics.findUserById = function (userId) {
  return this.findOne({ _id: userId });
};

userSchema.statics.createAllTogther = function () {
  const users = [
    {
      id: 1234,
      cash: 0,
      credit: 0,
      account: [1002],
      email: "aaa@bbb.com",
    },
    {
      id: 1235,
      cash: 0,
      credit: 0,
      account: [1003],
      email: "bbb@ccc.com",
    },
    {
      id: 1236,
      cash: 0,
      credit: 0,
      account: [10202],
      email: "ddd@eee.com",
    },
    {
      id: 1237,
      cash: 0,
      credit: 0,
      account: [5241, 5968],
      email: "mmm@ggg.com",
    },
    {
      id: 1238,
      cash: 0,
      credit: 0,
      account: [5713, 9966],
      email: "abc@ggg.com",
    },
    {
      id: 1237,
      cash: 0,
      credit: 0,
      account: [1056],
      email: "fff@ggg.com",
    },
  ];

  return this.create(users);
};

const User = mongoose.model("users", userSchema);

export { User };
