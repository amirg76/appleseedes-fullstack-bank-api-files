import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://amirg76:BaRS3JnIqbpUxxup@cluster0.y7roq.mongodb.net/?retryWrites=true&w=majority",
  (error, mongoConnectionInstance) => {
    if (error) throw Error("Mongoose Connection!!, Error: " + error);
    if (!process.env.NODE_ENV) {
      const { host, port, name } = mongoConnectionInstance;
      console.log({ host, port, name });
    }
  }
);

// mongoose.connect(
//   "mongodb://127.0.0.1/Bank",
//   (error, mongoConnectionInstance) => {
//     if (error) throw Error("Mongoose Connection!!, Error: " + error);
//     if (!process.env.NODE_ENV) {
//       const { host, port, name } = mongoConnectionInstance;
//       console.log({ host, port, name });
//     }
//   }
// );
