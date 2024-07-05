import Products from "../models/productModels.js";

const getProducts = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

const addProducts = async (id, brand_name, price) => {
  console.log("hlell")
  return await Products.create({ id, brand_name, price });
};

const deleteProduct = async (id) => {
  const result = Products.destroy({ where: { id } });
  return result;
};

const updateProduct = async (id, brand_name, price) => {
  const result = Products.update(
    { brand_name, price },
    {
      where: {
        id,
      },
    }
  );
};


export { getProducts, addProducts, deleteProduct, updateProduct };
