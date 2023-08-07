import { Unos } from "./scriptClass.js";
import { createRowI, createRowE, income } from "./table.js";
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

//local storage

let arrIncome = JSON.parse(localStorage.getItem("listOfIncome")) || [];
let arrExpenses = JSON.parse(localStorage.getItem("listOfExpenses")) || [];
let wholeArray = JSON.parse(localStorage.getItem("whole")) || [];

//display mont and year

let currentTime = new Date();
let month = currentTime.getMonth();
let nameMonth = currentTime.toLocaleString("en-US", { month: "long" });
let year = currentTime.getFullYear();
currentTimeSpan.textContent += nameMonth + " " + year + ":";

// create whole array

let myFunction = (niz) => {
  let select = document.getElementById("select").value;
  let number = Number(document.getElementById("number").value) || 1;
  let desc = document.getElementById("description").value || "x";
  let x = new Unos(select, desc, number);
  niz.push(x);
  return niz;
};

let expensess = (unosi) => {
  let sumExpensess = 0;
  for (let i = 0; i < unosi.length; i++) {
    if (unosi[i]._sign == false) {
      sumExpensess += unosi[i]._cifra;
    }
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

//display results of calculation

let inc = income(wholeArray);
inc = inc.toFixed(2);
incomeValueHeader.textContent = inc;
if (inc > 0) {
  incomeValueSignHeader.textContent = "+";
}

let ex = expensess(wholeArray);
expensessValueHeader.textContent = ex.toFixed(2);
if (ex > 0) {
  expensessValueSignHeader.textContent = "-";
}

let a = budget(wholeArray);
valueBudgetHeader.textContent = a.toFixed(2);
if (a > 0) {
  signBudgetHeader.textContent = "+";
}

let p = percentExpens(wholeArray);
if (inc == 0) {
  expensessPercentageHeader.textContent = "total";
} else {
  expensessPercentageHeader.textContent = p.toFixed(0) + "%";
}

// add new income or expensess

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
  location.reload();
});

//display table Income

createRowI(tableIncome, wholeArray);

//display table expensess

createRowE(tableExpensess, wholeArray);
