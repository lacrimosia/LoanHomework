const fs = require('fs'); 
const csv = require('csv-parser');
const readline = require('readline');


const dataFile = "../Loan.csv";
let count = 0;

var read = readline.createInterface({
  input: fs.createReadStream(dataFile),
  output: process.stdout,
  console: false
});

readFile();
function readFile(){

  let sqlTableString = "DROP TABLE Loan;\n\n CREATE TABLE Loan(\nAmount Number(10) NOT NULL,\n Loan_Date Date, \n Loan_Title VARCHAR2(1000) NOT NULL,\n Risk_Score NUMBER(3) NOT NULL, \n Debt_To_Income NUMBER(3) NOT NULL,\n Zipcode NUMBER(5) NOT NULL,\n State VARCHAR2(2) NOT NULL,\nEmployment NUMBER(1) NOT NULL,\n Policy_Code NUMBER(1)\n);\n";

  fs.writeFile("temp.sql", sqlTableString, (err)=>{
    if(err)
      console.log("error writing file: "+err);
  });

  // read.on("line", function(line){
  //   count++;
  //   if(count > 1){
  //     console.log(line);
  //   }
  // });
}