export const inventario = async (req, res) => {
  let cardID = req.body.cardID;
  if (!(typeof cardID === "string" || cardID instanceof String)) {
    res.json({ detail: "Variable debe ser string" });
    res.status(400);
  } else if (!cardID) {
    res.json({ detail: "Variable sin valor" });
    res.status(400);
  } else {
    var itemsCard = [
      {
        _id: cardID,
        imagePath: "http://localhost:8000/lista_deseos/img/carta.png",
        Name: "Picaro Veneno",
        TypeCard: "support",
        Type: "armor",
        Subtype: "armor",
        defenseBuff: 20,
        price: 1291829,

      },
      {
        _id: cardID,
        imagePath: "http://localhost:8000/lista_deseos/img/carta.png",
        Name: "Mago Fuego",
        TypeCard: "armor",
        Type: "armor",
        Subtype: "armor",
        defenseBuff: 20,
        price: 1291829,
      },
      {
        _id: cardID,
        imagePath: "http://localhost:8000/lista_deseos/img/carta.png",
        Name: "Maogo Hielo",
        TypeCard: "armor",
        Type: "armor",
        Subtype: "armor",
        defenseBuff: 20,
        price: 1291829,
      },
    ];
    res.json(itemsCard[Math.floor(Math.random()*itemsCard.length)]);
    res.status(200);
  }
};

export const vitrina = async (req, res) => {
  let precio = req.body.id_cartas;

  if (precio.length > 0) {
    let respuesta = [];
    for (let i = 0; i < precio.length; i++) {
      respuesta.push({
        precio: 13,
        divisa: "$",
        descuento: 10,
        id_carta: precio[i],
      });
    }
    res.json(respuesta);
    res.status(200);
  } else {
    res.json({ detail: "No se indicaron ids de cartas" });
    res.status(400);
  }
};

export const enviar = async (req, res) => {
  let idUsario = req.body.IdUsuario;
  let idCard = req.body.IdCard;
  let cantidad = req.body.Cantidad;

  if (idUsario && idCard && cantidad) {
    res.json({
      mesagge: "se agregaron los productos",
    });
    res.status(200);
  } else {
    res.json({ mesagge: "No se envio correctamente la carta" });
    res.status(400);
  }
};
