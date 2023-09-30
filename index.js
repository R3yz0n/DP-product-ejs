const express = require("express");
const { products, sequelize } = require("./model/index");
// const { QueryTypes } = require("sequelize");

const app = express();

// db connection
require("./model/index");

app.set("view engine", "ejs");

// serve static files from the `public` folder
app.use(express.static("public/"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ping route
app.get("/ping", (req, res) => {
  res.send("pong ");
});

// Get all products
app.get("/", async (req, res) => {
  const allProducts = await products.findAll();

  res.render("allProducts", { products: allProducts });
});

// Add new product
app.get("/addProduct", (req, res) => {
  res.render("addProduct", {});
});

app.post("/add-product", async (req, res) => {
  const { title, price, description, vendor, image } = req.body;

  await products.create({
    title,
    price,
    description,
    vendor,
    image,
  });

  res.redirect("/");
});


// Edit product
app.get("/editProduct/:id", async (req, res) => {
  const { id } = req.params;

  const product = await products.findByPk(id);

  res.render("editProduct", { product });
});

app.post("/editProduct/:id", async (req, res) => {
  const { id } = req.params;
  const { title, price, description, vendor, image } = req.body;

  const product = await products.findByPk(id);

  product.title = title;
  product.price = price;
  product.description = description;
  product.vendor = vendor;
  product.image = image;

  await product.save();

  res.redirect("/");
});

// Delete product
app.get("/deleteProduct/:id", async (req, res) => {
  const { id } = req.params;

  const product = await products.findByPk(id);

  await product.destroy();

  res.redirect("/");
});

//  Server listening
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
