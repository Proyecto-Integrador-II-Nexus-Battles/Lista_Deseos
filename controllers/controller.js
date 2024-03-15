import pool from "../db/database.js";

// Funcion de llamar a mis cartas de lista de deseos
export const listaDeseos = async (req, res) => {
  let conn;
  try {
    console.log("iniciando la conexion");
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT ld.id, p.id AS producto_id, p.nombre, p.precio FROM lista_deseos ld LEFT JOIN productos p ON ld.producto_id = p.id WHERE ld.usuario_id = " +
        req.body.user_id +
        ";"
    );
    console.log(rows);
    res.json(rows);
  } catch (err) {
    console.log("Entre un error", err);
    throw err;
  } finally {
    if (conn) return conn.end();
  }
};

export const eliminarItemListaDeseos = async (req, res) => {
  let conn;
  try {
    console.log("iniciando la conexion");
    conn = await pool.getConnection();
    const rows = await conn.query(
      "DELETE FROM lista_deseos WHERE id = " + req.params.itemid + ";"
    );
    console.log(rows);
    res.json({ status: "ok" });
  } catch (err) {
    console.log("Entre un error", err);
    res.json({ status: "ok" });
    throw err;
  } finally {
    if (conn) return conn.end();
  }
};