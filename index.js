const oracledb = require("oracledb");
const dbconfig = require("../dbconfig.js");
const fs = require('fs'); 
const csv = require('csv-parser');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const dataFile = "../Loan.csv";
fs.createReadStream(dataFile);

async function connectToDB() {
    let connection;
    try {
        connection = await oracledb.getConnection(dbconfig);
        console.log("connected.");
        let result = connection.execute(`SELECT * FROM LOAN;`);
        console.log(result.rows);
    } catch (err) {
        console.log("Not connected: " + err);
    } finally {
        if (connection) {
            try {
                connection.close();
            } catch (err) {
                console.error("Connection Error: " + err);
            }
        }
    }
  }
//connectToDB();