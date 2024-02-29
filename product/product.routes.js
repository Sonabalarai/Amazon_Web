import express from "express";
import mongoose from "mongoose";
import Product from "./product.model";

const router = express.Router();

router.post("/product/add", async (req, res) => {
  // extract new product from req.body
  const newProduct = await res.body;
  // add new product to db
  await Product.create(newProduct);

  // send response
  return res.status(200).send({ message: "successfully product is added" });
});

// get product list
app.get("/product/list", async (res, req) => {
  const productList = await Product.find();

  return res.status(200).send({ message: "success", product: productList });
});

// get course details  by id
app.get("/product/details/:id", async (req, res) => {
  const productId = res.params.id;

  //  check mongo id valid
  // const isValidMongoId = mongoose.isValidObjectId()
  const isValidMongoId = mongoose.isValidObjectId(productId);

  // if not valid
  if (!isValidMongoId) {
    return res.status(400).send({ message: "Invalid mongo Id.." });
  }

  //   check for required product
  const isRequiredProduct = await Product.findOne({ _id: productId });

  //   if not found , throw  an error
  if (!isRequiredProduct) {
    return res.status(400).send({ message: "Product does not exist" });
  }

  // send res if exist

  return res
    .status(200)
    .send({ message: "success", product: isRequiredProduct });
});

// delete product
app.delete("/delete/product/:id", async (req, res) => {
  const productId = req.params.id;

  // check for mongo id validity
  const isValidMongoId = mongoose.isValidObjectId(productId);

  //   if not valid
  if (!isValidMongoId) {
    return res.status(400).send({ message: "Invalid mongo id.." });
  }

  // check for required product
  const isRequiredProduct = await Product.findOne({ _id: productId });

  // if not exist product
  if (!isRequiredProduct) {
    return res.status(400).send({ message: "product does not exist.." });
  }

  await Product.deleteOne({ _id: productId });

  return res.status(200).send({ message: "deleted successfully........" });
});

// editing the product
app.put("/product/edit/:id", async (req, res) => {
  // extract id from req.params
  const productId = req.params.id;
  // check valid mongo id
  const isValidMongoId = mongoose.isValidObjectId(productId);

  // if Invalid mongo id
  if (!isValidMongoId) {
    return res.status(400).send({ message: "Invalid mongo id.." });
  }
  // check required product
  const isRequiredProduct = await Product.findOne({ _id: productId });
  //   if product not found
  if (!isRequiredProduct) {
    return res.status(400).send({ message: "product does not exist..." });
  }
  // edit product
  await Product.updateOne(
    { _id: productId },
    {
      $set: {
        name: "Samsung F12",
        price: 300000,
        category: "screen Touch",
        manufactureDate: 2024,
        expiryDate: 2030,
        freeShipping: false,
        brand: "Samsung",
        quantity: 7,
      },
    }
  );
  //   send response
  return res.status(200).send({ message: "product is updated successfully." });
});
export default router;
