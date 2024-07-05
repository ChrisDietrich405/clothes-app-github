import Products from "../models/productModels.js";

const getAll = async () => {
  const allProducts = await Products.findAll();
  return allProducts;
};

const getOne = async (id) => {
  const product = await Products.findOne(id);
  return product;
};

const add = async (brand_name, price) => {
  return await Products.create({ brand_name, price });
};

const remove = async (id) => {
  const result = Products.destroy({ where: { id } });
  return result;
};

const update = async (id, brand_name, price) => {
  const result = Products.update(
    { brand_name, price },
    {
      where: {
        id,
      },
    }
  );
  return result;
};

export { getAll, getOne, add, remove, update };
