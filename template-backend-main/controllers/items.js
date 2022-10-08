const { request, response } = require("express");

const axios = require("axios");

const itemsGet = async (req = request, res = response, next) => {

  let respuesta = {
    author: {
      name: "Nicolas",
      lastName: "Martin",
    },
    categories: [],
    items: [],
  };

  const { q } = req.query;

  try {
    const { data } = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
    );
    const { results } = data;
  
    await Promise.all(
      results.map(async (result) => {
        let item = await getItems(result);
        respuesta.items = [...respuesta.items, item];
        let categories = await getCategories(result.category_id);
        let mostCategories = await getMostCategories(categories);
        respuesta.categories = await getCategories(mostCategories);
        respuesta.categories = [...respuesta.categories, ...categories];
        respuesta.categories = respuesta.categories.map((category) => category.name);
        respuesta.categories = [... new Set(respuesta.categories)];
      })
    );
      



    res.status(200).json(respuesta);
  } catch (error) {
    next(error);
  }

};

const getItemById = async (req = request, res = response, next) => {

  let respuesta = {
    author: {
      name: "Nicolas",
      lastName: "Martin",
    },
    item: {},
  };

  let { id } = req.params;
  try {
    const { data } = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    const { data: descripcion } = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
    const { plain_text } = descripcion;
    let  {
      id: identificador,
      title,
      price,
      base_price,
      currency_id,
      thumbnail,
      condition,
      shipping,
      sold_quantity,
      category_id
    } = data;

    let categories = await getCategories(category_id);
  
    let { free_shipping } = shipping
  
    respuesta.item = {
      id: identificador,
      title,
      picture: thumbnail,
      condition,
      sold_quantity,
      price: {
        currency: currency_id,
        amount: base_price,
        decimals: price
      },
      free_shipping,
      description: plain_text,
      categories: categories.map((category) => category.name)
    }
  
  
    res.status(200).json(respuesta);
    
  } catch (error) {
    console.log('este es el error', error);
  }

};

const getMostCategories = async (categories) => {
  let ids = categories.map((category) => category.id);
  let mostid = ids.sort((id1,id2) => ids.filter((valor) => valor === id1).length - ids.filter((valor) => valor === id2).length).pop();
  return mostid;
  // let uniqueCategories = [... new Set(ids)];
  // uniqueCategories = uniqueCategories.slice(uniqueCategories.length - 5, uniqueCategories.length);
  // return uniqueCategories;
}




const getCategories = async (idCategory) => {
  let categories = [];
  const { data } = await axios.get(
    `https://api.mercadolibre.com/categories/${idCategory}`
  );
  let { path_from_root } = data;
  categories = [...categories, ...path_from_root];
  return categories;
};

const getItems = async (result) => {
  let item = {
    id: "",
    title: "",
    price: {
      currency: "",
      amount: 0,
      decimals: 0,
    },
    picture: "",
    condition: "",
    free_shipping: true,
    category_id: ''
  };
  let { id, title, condition, thumbnail, price, prices, shipping, category_id } = result;
  let { prices: precios } = prices;
  let { free_shipping } = shipping;
  let [precio1] = precios;

  item.id = id;
  item.title = title;
  item.picture = thumbnail;
  item.condition = condition;
  item.price.decimals = price;
  item.price.amount = precio1.amount;
  item.price.currency = precio1.currency_id;
  item.free_shipping = free_shipping;
  item.category_id = category_id;

  return item;
};


module.exports = {
  itemsGet,
  getItemById,
};
