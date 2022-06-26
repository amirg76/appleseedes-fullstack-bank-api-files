import express from "express";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import { userRouter } from "./routes/user.routes.js";
import { accountRouter } from "./routes/account.routes.js";
import cors from "cors";
import bodyParser from "body-parser";
// import {
//   getAll,
//   create,
//   getById,
//   getActiveProducts,
//   getProductsByPrice,
//   deleteProduct,
//   deleteAllProducts,
//   updateProduct,
//   createAll,
// } from "./controllers/product.controllers.js";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname + "/public")));
// app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/account", accountRouter);

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client/build/index.html"));
//   //   // res.sendFile("index.html");
// });
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/public/index.html"));
  //   // res.sendFile("index.html");
});

// app.post("/product/create", create);
// app.get("/product/all-products", getAll);
// app.get("/product/specific-product/:id", getById);
// app.get("/product/active-products", getActiveProducts);
// app.get(
//   "/product/specific-products-by-price/:minPrice/:maxPrice",
//   getProductsByPrice
// );
// app.delete("/product/delete/:id", deleteProduct);
// app.delete("/product/delete-all", deleteAllProducts);
// export { app };
// app.put("/product/update/:id", updateProduct);

// app.post("/product/create-all", createAll);

export { app };
