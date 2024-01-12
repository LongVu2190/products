import { productsData } from "../data/index.js";

const selectProducts = async (req, res, next) => {
  try {
    const page = req.query.page ?? 1
    const response = await productsData.selectProducts(page);
    
    const productsQuantity = await productsData.productsQuantity();

    res.render("index.ejs", { data: response, page: page, quantity: productsQuantity });

    //res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export default {
  selectProducts,
};
