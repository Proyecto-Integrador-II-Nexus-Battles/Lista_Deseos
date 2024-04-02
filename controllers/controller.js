import pool from "../db/database.js";
import jwt from "jsonwebtoken";

// Funcion de llamar a mis cartas de lista de deseos
export const listaDeseos = async (req, res) => {
  let conn;

  try {
    console.log("iniciando la conexion");
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT id, producto_id FROM lista_deseos WHERE usuario_id=" +
      req.body.IdUsuario +
      ";"
    );
    console.log(rows);
    res.json(rows);
  } catch (err) {
    res.json({ status: "error en la base de datos" });
    res.status(500);
    console.log("Entre un error", err);
  } finally {
    if (conn) conn.end();
  }
};

export const agregarListaDeseos = async (req, res) => {
  let conn;
  console.log("iniciando la conexion");

  // const Authorization = req.headers['authorization']
  // const token = Authorization.slice(7)
  // const decodedToken = jwt.decode(token, { complete: true });
  // const payload = decodedToken.payload;
  // const userId = payload.id.id;

  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "INSERT INTO lista_deseos (id_usuario, fecha_agregado, cantidad, cartas_id) VALUES (?, NOW(), ?, ?)",
      [req.body.IdUsuario, 1, req.body.IdCard]
    );
    console.log(rows);
    res.json({ status: "ok" });
  } catch (err) {
    console.log("Entre un error", err);
    res.json({ status: "error en la base de datos" });
    res.status(500);
  } finally {
    conn.release();
  }
};


export const eliminarItemListaDeseos = async (req, res) => {
  let conn;

  // const Authorization = req.headers['authorization']
  // const token = Authorization.slice(7)
  // const decodedToken = jwt.decode(token, { complete: true });
  // const payload = decodedToken.payload;
  // const userId = payload.id.id;

  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "DELETE FROM lista_deseos WHERE cartas_id = ? AND id_usuario = ?",
      [req.body.IdCard, req.body.IdUsuario]
    );
    console.log(rows);
    res.json({ status: "ok" });
  } catch (err) {
    console.log("Entre un error", err);
    res.json({ status: "error en la base de datos" });
    res.status(500);
  } finally {
    conn.release();
  }
};
