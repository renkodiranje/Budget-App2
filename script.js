import { Unos } from "./scriptClass.js";
import { createRowI, createRowE, income } from "./table.js";
//Dom

const currentTimeSpan = document.getElementById("currentTimeSpan");
const valueBudgetHeader = document.getElementById("valueBudget");
const signBudgetHeader = document.getElementById("signBudget");
const incomeValueHeader = document.getElementById("incomeValue");
const incomeValueSignHeader = document.getElementById("incomeValueSign");
const expensessValueHeader = document.getElementById("expensessValue");
const expensessValueSignHeader = document.getElementById("expensessValueSign");
const expensessPercentageHeader = document.getElementById(
  "expensessPercentage"
);
const tableIncome = document.getElementById("tableIncome");
const tableExpensess = document.getElementById("tableExpensess");
const form = document.getElementById("form");

//local storage

let arrIncome = JSON.parse(localStorage.getItem("listOfIncome")) || [];
let arrExpenses = JSON.parse(localStorage.getItem("listOfExpenses")) || [];
let wholeArray = JSON.parse(localStorage.getItem("whole")) || [];

//display mont and year

let currentTime = new Date();
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

let calculatedIncome = income(wholeArray);
calculatedIncome = calculatedIncome.toFixed(2);
incomeValueHeader.textContent = calculatedIncome;
if (calculatedIncome > 0) {
  incomeValueSignHeader.textContent = "+";
}

let calculatedExpenses = expensess(wholeArray);
expensessValueHeader.textContent = calculatedExpenses.toFixed(2);
if (calculatedExpenses > 0) {
  expensessValueSignHeader.textContent = "-";
}

let avilableBudget = budget(wholeArray);
valueBudgetHeader.textContent = avilableBudget.toFixed(2);
if (avilableBudget > 0) {
  signBudgetHeader.textContent = "+";
}

let percentTotal = percentExpens(wholeArray);
if (calculatedIncome == 0) {
  expensessPercentageHeader.textContent = "total";
} else {
  expensessPercentageHeader.textContent = percentTotal.toFixed(0) + "%";
}

// add new income or expensess

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let select = document.getElementById("select").value;
  let number = Number(document.getElementById("number").value) || 1;
  let description = document.getElementById("description").value || "x";
  if (select == "plus") {
    let unos = new Unos(select, description, number);
    arrIncome.push(unos);
    let jsonIncome = JSON.stringify(arrIncome);
    localStorage.setItem("listOfIncome", jsonIncome);
  } else {
    let unos = new Unos(select, description, number);
    arrExpenses.push(unos);
    let jsonExpenses = JSON.stringify(arrExpenses);
    localStorage.setItem("listOfExpenses", jsonExpenses);
  }
  wholeArray = myFunction(wholeArray);
  let jsonWhole = JSON.stringify(wholeArray);
  localStorage.setItem("whole", jsonWhole);
  location.reload();
});

//display table Income

createRowI(tableIncome, wholeArray);

//display table expensess

createRowE(tableExpensess, wholeArray);
