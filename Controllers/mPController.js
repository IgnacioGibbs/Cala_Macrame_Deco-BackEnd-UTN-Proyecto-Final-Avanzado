const MP = require("mercadopago");
const port = process.env.PORT_SERVER || 4500;
const server = process.env.URL_SERVER || "http://localhost";

MP.configure({
  access_token: "process.env.MPAGO_TOKEN", //config credenciales mercadopago
});

exports.preferences = async (req, res) => {
  // Crea un objeto de preferencia
  let preference = {
    items: [
      //tendriamos que hacer una respuesta de los productos que vemos en la pagina
      {
        //aqui en estos datos, podemos poner los datos que vengan del from lo llamamos con req.body.title/precio/etc, podriamos agregar descripcion si vamos a traer el carrito y que ahi salgan el nombre de todos los productos que vamos a comprar, faltaria ver el poder mandarle para hacer una compra individual y otra cuando armamos el carrito, o si o si hacemos que el usuario agrege al carrito el producto para comprar.
        id: "Id item",
        title: "Mi producto",
        description: "Descripcion del producto",
        category_id: "Categoria item",
        quantity: 1,
        unit_price: 100,
        currency_id: "ARS",
      },
    ],
    payer: {
      name: "Nombre comprador",
      surname: "Surname comprador",
      email: "email comprador",
      phone: "cel comprador",
    },
    back_urls: {
      success: `${server}:${port}`,
      failure: "http://www.tu-sitio/failure",
      pending: "http://www.tu-sitio/pending",
    },
    auto_return: "all",
    statement_descriptor: "Cala Macrame Deco",
  };

  MP.preferences
    .create(preference)
    .then(function (response) {
      res.redirect(response.body.init_point);
      // aqui va la respuesta del servidor
    })
    .catch(function (error) {
      console.log(error);
    });
};

exports.view = (req, res) => {
  res.send("sistema index funcionando para las rutas");
};
