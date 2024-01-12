import { pool } from "../../config/index.js";
import { loadSqlQueries } from "../utils/index.js";

const selectProducts = async (page) => {
  const db = await pool.connect();
  try {
    const sqlQueries = await loadSqlQueries("../data/products/queries");

    const res = await db.query(sqlQueries.selectProducts);

    return res.rows.slice((page - 1) * 10, page * 10);
  } catch (error) {
    console.log(error.message);
  } finally {
    db.release();
  }
};

const productsQuantity = async () => {
  const db = await pool.connect();
  try {
    const sqlQueries = await loadSqlQueries("../data/products/queries");

    const res = await db.query(sqlQueries.selectProducts);

    return res.rows.length;
  } catch (error) {
    console.log(error.message);
  } finally {
    db.release();
  }
};

export default {
  selectProducts,
  productsQuantity,
};
