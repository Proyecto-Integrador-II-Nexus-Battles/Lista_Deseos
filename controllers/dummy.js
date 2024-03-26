export const inventario = async (req, res) => {
    let cardID = req.body.cardID;
    if (!(typeof cardID === 'string' || cardID instanceof String)) {
        res.json({"detail": "Variable debe ser string"});
        res.status(400);
    } else if (!cardID) {
        res.json({"detail": "Variable sin valor"});
        res.status(400);
    } else {
        res.json({
            'nombre': 'Soldado',
            'vida': 12,
            'defensa': 12,
            'ataque': 12,
            'daño': 12,
            'ID': cardID,
        });
        res.status(200);
    }
};

export const vitrina = async (req, res) => {
    let precio = req.body.id_cartas;

    if (precio.length > 0) {
        let respuesta = [];
        for (let i = 0; i < precio.length; i++) {
            respuesta.push({
                'precio': 13,
                'divisa': 11,
                'descuento': 10,
                'id_carta': precio[i],
            });
        }
        res.json(respuesta);
        res.status(200);
    } else {
        res.json({"detail": "No se indicaron ids de cartas"});
        res.status(400);
    }
};
