import mariadb from "mariadb";
import { HOST_DB, PORT_DB, DATABASE, PASSWORD_DB, USER_DB } from "../config.js";

const pool = mariadb.createPool({
  host: HOST_DB,
  port: PORT_DB,
  user: USER_DB,
  password: PASSWORD_DB,
  database: DATABASE,
});

export default pool;
