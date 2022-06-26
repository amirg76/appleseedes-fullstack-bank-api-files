import mongoose from "mongoose";
import { accountSchema } from "./account.schema.js";
accountSchema.statics.createAllAccTogther = function () {
  const accounts = [
    {
      accountNum: 1003,
      cash: 0,
      credit: 0,
      minusInterest: 1.1,
    },
    {
      accountNum: 10202,
      cash: 0,
      credit: 0,
      minusInterest: 1.4,
    },
    {
      accountNum: 5713,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      accountNum: 9966,
      cash: 0,
      credit: 0,
      minusInterest: 1.2,
    },
    {
      accountNum: 1002,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      accountNum: 1056,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      accountNum: 5241,
      cash: 0,
      credit: 0,
      minusInterest: 1.3,
    },
    {
      accountNum: 5968,
      cash: 0,
      credit: 0,
      minusInterest: 1.1,
    },
  ];

  return this.create(accounts);
};

const Account = mongoose.model("accounts", accountSchema);

export { Account };
