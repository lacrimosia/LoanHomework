const fs = require('fs');
const readline = require('readline');

const dataFile = "../Loan.csv";
const sqlFile = "temp.sql";
let count = 0;

var read = readline.createInterface({
    input: fs.createReadStream(dataFile),
    output: process.stdout,
    console: false
});

readFile();

function readFile() {
    let sqlTableString = "DROP TABLE Loan;\n\n CREATE TABLE Loan(\nAmount VARCHAR2(10) NOT NULL,\n Loan_Date VARCHAR2(10), \n Loan_Title VARCHAR2(1000) NOT NULL,\n Risk_Score VARCHAR2(3) NOT NULL, \n Debt_To_Income VARCHAR2(3) NOT NULL,\n Zipcode VARCHAR2(5) NOT NULL,\n State VARCHAR2(2) NOT NULL,\nEmployment VARCHAR2(1) NOT NULL,\n Policy_Code VARCHAR2(1)\n);\n\n";

    fs.writeFile(sqlFile, sqlTableString, (err) => {
        if (err)
            console.log("error writing file: " + err);
    });

    read.on("line", function(line) {
        count++;
        let data, intoString = '';
        if (count > 1) {
            
            data = line.split(','); //array
            for(let i=0; i<data.length; i++){
              intoString += "'"+data[i]+"', ";
            }
            console.log(intoString+"\n");
            data2 = "INSERT INTO Loan VALUES("+intoString+");\n\n";
            fs.appendFile(sqlFile, data2, (err) => {
                if (err)
                    console.log("error appending file: " + err);
            });
            
        }
    });
}