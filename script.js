import { Unos } from "./scriptClass.js";
import { createRow, percentInTable, income } from "./table.js";
//Dom

let currentTimeSpan = document.getElementById("currentTimeSpan");
let valueBudgetHeader = document.getElementById("valueBudget");
let signBudgetHeader = document.getElementById("signBudget");
let incomeValueHeader = document.getElementById("incomeValue");
let incomeValueSignHeader = document.getElementById("incomeValueSign");
let expensessValueHeader = document.getElementById("expensessValue");
let expensessValueSignHeader = document.getElementById("expensessValueSign");
let expensessPercentageHeader = document.getElementById("expensessPercentage");

let optionPlus = document.getElementById("plus");
let optionMinus = document.getElementById("minus");
let buttonImage = document.getElementById("image");
let select = document.getElementById("select");
let desc = document.getElementById("description");

let number = Number(document.getElementById("number").value);

let addCase = document.getElementById("image");
let tableIncome = document.getElementById("tableIncome");
let tableExpensess = document.getElementById("tableExpensess");
let form = document.getElementById("form");

//local storage

let arrIncome = JSON.parse(localStorage.getItem("listOfIncome")) || [];

let arrExpenses = JSON.parse(localStorage.getItem("listOfExpenses")) || [];

//let wholeArray = [];
let wholeArray = JSON.parse(localStorage.getItem("whole")) || [];
//display mont and year
let currentTime = new Date();
let month = currentTime.getMonth();
let nameMonth = currentTime.toLocaleString("en-US", { month: "long" });

let year = currentTime.getFullYear();
currentTimeSpan.textContent += nameMonth + " " + year + ":";

let myFunction = (niz) => {
  let select = document.getElementById("select").value;
  let number = Number(document.getElementById("number").value) || 1;
  let desc = document.getElementById("description").value || "x";
  let x = new Unos(select, desc, number);
  niz.push(x);
  return niz;
};

// let income = (unosi) => {
//   let sumIncome = 0;
//   for (let i = 0; i < unosi.length; i++) {
//     console.log(unosi[i].cifra);
//     if (unosi[i].sign == true) {
//       sumIncome += unosi[i].cifra;
//     }
//   }
//   return sumIncome;
// };
let expensess = (unosi) => {
  let sumExpensess = 0;
  for (let i = 0; i < unosi.length; i++) {
    if (unosi[i]._sign == false) {
      sumExpensess += unosi[i]._cifra;
      console.log(unosi[i]._cifra);
    }
    console.log(sumExpensess);
  }
  return sumExpensess;
};

let budget = (unosi) => {
  let sumIncome = income(unosi);
  let sumExpensess = expensess(unosi);
  let budgetValue = sumIncome - sumExpensess;
  return budgetValue;
};
let percentExpens = (unosi) => {
  let sumIncome = income(unosi);
  let sumExpensess = expensess(unosi);
  let percent = (sumExpensess * 100) / sumIncome;
  return percent;
};
// let percentInTable = (unosi, x) => {
//   let incomex = income(unosi);
//   let percent = (x.cifra * 100) / incomex;
//   return percent;
// };
addCase.addEventListener("click", (e) => {
  e.preventDefault();
  let select = document.getElementById("select").value;
  console.log(select);
  let number = Number(document.getElementById("number").value) || 1;
  let desc = document.getElementById("description").value || "x";
  if (select == "plus") {
    let unos = new Unos(select, desc, number);
    arrIncome.push(unos);
    console.log(unos);
    let jsonIncome = JSON.stringify(arrIncome);
    localStorage.setItem("listOfIncome", jsonIncome);
  } else {
    let unos = new Unos(select, desc, number);
    arrExpenses.push(unos);
    let jsonExpenses = JSON.stringify(arrExpenses);
    localStorage.setItem("listOfExpenses", jsonExpenses);
  }
  wholeArray = myFunction(wholeArray);
  console.log(wholeArray);
  let jsonWhole = JSON.stringify(wholeArray);
  localStorage.setItem("whole", jsonWhole);
  //income(unosi);
  let inc = income(wholeArray);
  incomeValueHeader.textContent = inc.toFixed(2);
  if (inc > 0) {
    incomeValueSignHeader.textContent = "+";
  }

  let ex = expensess(wholeArray);
  alert(ex);

  expensessValueHeader.textContent = ex.toFixed(2);
  if (ex > 0) {
    expensessValueSignHeader.textContent = "-";
  }
  console.log(ex);
  let a = budget(wholeArray);
  valueBudgetHeader.textContent = a.toFixed(2);
  if (a > 0) {
    signBudgetHeader.textContent = "+";
  } else if (a < 0) {
    signBudgetHeader.textContent = "-";
  }

  let p = percentExpens(wholeArray);
  if (inc == 0) {
    expensessPercentageHeader.textContent = "total";
  } else {
    expensessPercentageHeader.textContent = p.toFixed(0) + "%";
  }
  location.reload();
});
createRow(tableIncome, arrIncome);

createRow(tableExpensess, arrExpenses);
console.log(arrIncome);
