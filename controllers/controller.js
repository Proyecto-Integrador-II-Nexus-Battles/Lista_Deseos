import db from '../db/database.js';



// Funcion de llamar a mis cartas de lista de deseos
export const listaDeseos = async (req, res) => { 
    let conn;
  try {
  console.log('iniciando la conexion');
  conn = await db.pool.getConnection();
  const rows = await conn.query("SELECT ld.id, p.id AS producto_id, p.nombre, p.precio FROM lista_deseos ld LEFT JOIN productos p ON ld.producto_id = p.id WHERE usuario_id = "+req.body.user_id+";");
  console.log(rows);
  res.json(rows);

  } catch (err) {
  console.log('Entre un error', err);
  throw err;
  } finally {
  if (conn) return conn.end();
    }
  };


module.exports = {
  listaDeseos,
};
