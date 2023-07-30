export let income = (unosi) => {
  let sumIncome = 0;
  for (let i = 0; i < unosi.length; i++) {
    console.log(unosi[i]._cifra);
    if (unosi[i]._sign == true) {
      sumIncome += unosi[i]._cifra;
    }
  }
  return sumIncome;
};
export let percentInTable = (unosi, x) => {
  let incomex = income(unosi);

  let percent = (x._cifra * 100) / incomex;

  return percent;
};
export function createRow(parent, arr) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let span = document.createElement("span");
    let img = document.createElement("img");

    img.src = "image/button.webp";
    img.alt = "delete";
    td1.innerHTML = arr[i]._description;
    td2.innerHTML = arr[i]._cifra;
    console.log(arr[i]._cifra);

    if (arr[i]._sign == false) {
      let button = document.createElement("button");

      button.textContent = percentInTable(arr, arr[i]);
      span.innerHTML = "-";
      td2.append(button);
    } else {
      span.innerHTML = "+";
    }

    td2.prepend(span);
    td2.append(img);
    tr.append(td1, td2);
    parent.append(tr);
  }
}
