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
        TypeCard: "armas",
        imagePath: "http://localhost:8000/lista_deseos/img/carta.png",
        imgType: "http://localhost:8000/lista_deseos/img/espadas.png",
        Name: "Guerrero Armas",
        poder: 1,
        vida: 18,
        defensa: 8,
        ataque: 12,
        Type: "HEROE",
        Subtype: "armas",
        defenseBuff: 20,

      },
      {
        _id: cardID,
        TypeCard: "tanque",
        imagePath: "http://localhost:8000/lista_deseos/img/tanque.jpeg",
        imgType: "http://localhost:8000/lista_deseos/img/blindaje.png",
        Name: "Guerrero Proteccion",
        poder: 1,
        vida: 24,
        defensa: 12,
        ataque: 8,
        Type: "HEROE",
        Subtype: "tanque",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        TypeCard: "fuego",
        imagePath: "http://localhost:8000/lista_deseos/img/magoFuego.jpg",
        imgType: "http://localhost:8000/lista_deseos/img/fuego.png",
        Name: "Mago Fuego",
        poder: 1,
        vida: 20,
        defensa: 10,
        ataque: 10,
        Type: "HEROE",
        Subtype: "fuego",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        TypeCard: "hielo",
        imagePath: "http://localhost:8000/lista_deseos/img/magoHielo.jpg",
        imgType: "http://localhost:8000/lista_deseos/img/hielo.png",
        Name: "Mago Hielo",
        poder: 1,
        vida: 20,
        defensa: 10,
        ataque: 10,
        Type: "HEROE",
        Subtype: "hielo",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        TypeCard: "veneno",
        imagePath: "http://localhost:8000/lista_deseos/img/picaroVeneno.jpeg",
        imgType: "http://localhost:8000/lista_deseos/img/veneno.png",
        Name: "Picaro Veneno",
        poder: 1,
        vida: 16,
        defensa: 8,
        ataque: 10,
        Type: "HEROE",
        Subtype: "veneno",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        TypeCard: "machete",
        imagePath: "http://localhost:8000/lista_deseos/img/picaroMachete.jpg",
        imgType: "http://localhost:8000/lista_deseos/img/machete.png",
        Name: "Picaro Machete",
        poder: 1,
        vida: 16,
        defensa: 8,
        ataque: 10,
        Type: "HEROE",
        Subtype: "machete",
        defenseBuff: 20,
      },
      //ITEMS
      {
        _id: cardID,
        /* TypeCard: "machete", */
        Subtype: "hielo",
        imagePath: "http://localhost:8000/lista_deseos/img/arma_hielo_1.jpeg",
        imgType: "http://localhost:8000/lista_deseos/img/hielo.png",
        Name: "Mazo Congelamundos",
        poder: 2,
        vida: -1,
        defensa: 2,
        ataque: -1,
        Type: "ARMA",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        /* TypeCard: "machete", */
        Subtype: "fuego",
        imagePath: "http://localhost:8000/lista_deseos/img/anilloFuego.jpeg",
        imgType: "http://localhost:8000/lista_deseos/img/fuego.png",
        Name: "Anillo Piroigneo",
        poder: 3,
        vida: 0,
        defensa: 0,
        ataque: -3,
        Type: "ARMA",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        /* TypeCard: "machete", */
        Subtype: "machete",
        imagePath: "http://localhost:8000/lista_deseos/img/macheteMachete.jpg",
        imgType: "http://localhost:8000/lista_deseos/img/machete.png",
        Name: "Machete Selvativo",
        poder: 3,
        vida: 0,
        defensa: 0,
        ataque: -3,
        Type: "ARMA",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        /* TypeCard: "machete", */
        Subtype: "veneno",
        imagePath: "http://localhost:8000/lista_deseos/img/venenoVenenos.jpeg",
        imgType: "http://localhost:8000/lista_deseos/img/veneno.png",
        Name: "Pocion Cegadora",
        poder: 3,
        vida: 0,
        defensa: 0,
        ataque: -3,
        Type: "ARMA",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        /* TypeCard: "machete", */
        Subtype: "armas",
        imagePath: "http://localhost:8000/lista_deseos/img/armaArmas.jpeg",
        imgType: "http://localhost:8000/lista_deseos/img/espadas.png",
        Name: "Espada Penetrante",
        poder: 3,
        vida: 0,
        defensa: 0,
        ataque: -3,
        Type: "ARMA",
        defenseBuff: 20,
      },
      {
        _id: cardID,
        /* TypeCard: "machete", */
        Subtype: "proteccion",
        imagePath: "http://localhost:8000/lista_deseos/img/escudoProteccion.jpeg",
        imgType: "http://localhost:8000/lista_deseos/img/blindaje.png",
        Name: "Escudo del sol",
        poder: 3,
        vida: 0,
        defensa: 0,
        ataque: -3,
        Type: "ARMA",
        defenseBuff: 20,
      },
      
    ];
    res.json(itemsCard[Math.floor(Math.random() * itemsCard.length)]);
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
