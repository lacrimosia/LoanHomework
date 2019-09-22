DROP TABLE Loan;

 CREATE TABLE Loan(
Amount Number(10) NOT NULL,
 Loan_Date Date, 
 Loan_Title VARCHAR2(1000) NOT NULL,
 Risk_Score NUMBER(3) NOT NULL, 
 Debt_To_Income NUMBER(3) NOT NULL,
 Zipcode NUMBER(5) NOT NULL,
 State VARCHAR2(2) NOT NULL,
Employment NUMBER(1) NOT NULL,
 Policy_Code NUMBER(1)
);
