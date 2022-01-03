const MP = require("mercadopago"); //sdk mercadopago

MP.configure({
  access_token: "process.env.MPAGO_TOKEN", //config credenciales mercadopago
});

exports.preferences = async (req, res) => {
  let preference = {
    // Crea un objeto de preferencia
    items: [
      //tendriamos que hacer una respuesta de los productos que vemos en la pagina
      {
        //aqui en estos datos, podemos poner los datos que vengan del from lo llamamos con req.body.title/precio/etc, podriamos agregar descripcion si vamos a traer el carrito y que ahi salgan el nombre de todos los productos que vamos a comprar, faltaria ver el poder mandarle para hacer una compra individual y otra cuando armamos el carrito, o si o si hacemos que el usuario agrege al carrito el producto para comprar. los datos que estan hardcodeados son solo para ver que me devolvia.
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
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
  res.send("sistema index funcionando apra las rutas");
};
