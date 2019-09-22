const fs = require('fs');
const readline = require('readline');
const dataFile = "../Loan.csv";
const sqlFile = "Q2.sql";
const tableName = "Loan";
const removePunctuation = require('remove-punctuation');
let count = 0;

var read = readline.createInterface({
    input: fs.createReadStream(dataFile),
    output: process.stdout,
    console: false
});

readFile();

function readFile() {
    let sqlTableString = "/* Shatilla Prayer - Q2*/ \n\n\n DROP TABLE " + tableName + ";\n\n CREATE TABLE Loan(\nAmount VARCHAR2(100) NOT NULL,\n Loan_Date VARCHAR2(100), \n Loan_Title VARCHAR2(1000) NOT NULL,\n Risk_Score VARCHAR2(30) NOT NULL, \n Debt_To_Income VARCHAR2(30) NOT NULL,\n Zipcode VARCHAR2(5) NOT NULL,\n State VARCHAR2(2) NOT NULL,\nEmployment VARCHAR2(1) NOT NULL,\n Policy_Code VARCHAR2(1)\n);\n\n";

    fs.writeFile(sqlFile, sqlTableString, (err) => {
        if (err)
            console.log("error writing file: " + err);
    });

    read.on("line", function(line) {
        count++;
        let data, intoString = '';
        if (count > 1) {

            data = line.split(','); //array
            for (let i = 0; i < data.length; i++) {
                var length = data.length;
                if (i < length - 1)
                    intoString += "'" + removePunctuation(data[i]) + "', ";
                else
                    intoString += "'" + removePunctuation(data[i]) + "'";
            }
            //console.log(intoString + "\n");
            //let endingStatment = "\n select count(*) from Loan;";
            data2 = "INSERT INTO " + tableName + " VALUES(" + intoString + ");\n\n";
            let tableData = data2;
            fs.appendFile(sqlFile, tableData, (err) => {
                if (err)
                    console.log("error appending file: " + err);
            });
        }
    });

}