import pool from "../db/database.js";

// Funcion de llamar a mis cartas de lista de deseos
export const listaDeseos = async (req, res) => {
  let conn;

  try {
    conn = await pool.getConnection();
    console.log("iniciando la conexion");
    const rows = await conn.query(
      "SELECT ID, CARTAS_ID FROM LISTA_DESEOS WHERE ID_USUARIO=" +
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

  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "INSERT INTO LISTA_DESEOS (ID_USUARIO, FECHA_AGREGADO, CANTIDAD, CARTAS_ID) VALUES (?, NOW(), ?, ?)",
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

  try {
    console.log("El req.body es: ", req.body);
    conn = await pool.getConnection();
    const rows = await conn.query(
      "DELETE FROM LISTA_DESEOS WHERE CARTAS_ID = ? AND ID_USUARIO = ?",
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


export const getWishedCards = async (req, res) => {
  let conn;

  try {
    conn = await pool.getConnection();
    const rows = await conn.query(
      "SELECT CARTAS_ID FROM LISTA_DESEOS WHERE ID_USUARIO = ?",
        [req.body.IdUsuario]
    );
    const ids = rows.map(row => row.CARTAS_ID);
    res.json(ids);
  } catch (err) {
    res.json({ status: "error en la base de datos" });
    res.status(500);
    console.log("Entre un error", err);
  } finally {
    if (conn) conn.end();
  }
}
