const oracledb = require("oracledb");
const config = require("./dbconfig");

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const db = config.connectString;
const userName = config.user;
const pass = config.password;

function run() {

  let connection;

  try {
    connection = oracledb.getConnection({
      user          : userName,
      password      : pass,
      connectString : db
    });

    // const result = await connection.execute(
    //   `SELECT manager_id, department_id, department_name
    //    FROM departments
    //    WHERE manager_id = :id`,
    //   [103],  // bind value for :id
    // );
    // console.log(result.rows);

  } catch (err) {
    console.error("Regular error: "+err);
  } finally {
    if (connection) {
      try {
        connection.close();
      } catch (err) {
        console.error("Connection Error: "+err);
      }
    }
  }
}

run();




