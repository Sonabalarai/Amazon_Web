import express from "express";
import connectDb from "./connectDb.js";
import productRouter from "./product/product.model.js";
const app = express();

// to make app understand json()
app.use(express.json());
// ++++++++==============================Database connection++++++==============
connectDb();
// ======================register routes=============
app.use(productRouter);
// ++++++++++++====================port and server++++++++++++++============
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`app is listening on ${PORT} port`);
});
