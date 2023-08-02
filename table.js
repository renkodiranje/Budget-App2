export let income = (unosi) => {
  let sumIncome = 0;
  for (let i = 0; i < unosi.length; i++) {
    if (unosi[i]._sign == true) {
      sumIncome += unosi[i]._cifra;
    }
  }
  return sumIncome;
};
export let percentInTable = (unosi, x) => {
  let incomex = income(unosi);
  console.log(incomex);
  let percent = (x * 100) / incomex;

  return percent;
};

export function createRowE(parent, arr) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let span = document.createElement("span");
    let img = document.createElement("img");

    img.src = "image/button.webp";
    img.alt = "delete";
    img.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();

      let index = 0;
      for (let i = 0; i < arr.length; i++) {
        if (
          e.target.parentNode.childNodes[0].textContent == arr[i][0] &&
          e.target.parentNode.childNodes[1].textContent.includes(arr[i][1])
        ) {
          index = i;
        }
        arr.splice(index, 1);

        localStorage.setItem("whole", JSON.stringify(arr));
      }
    });
    td1.innerHTML = arr[i]._description;
    td2.innerHTML = arr[i]._cifra;
    // console.log(arr[i]._cifra);

    if (arr[i]._sign == false) {
      let button = document.createElement("button");
      let btn = percentInTable(arr, arr[i]._cifra);
      button.textContent = btn.toFixed(0) + "%";
      console.log(arr);
      span.innerHTML = "-";
      td2.append(button);
      td2.prepend(span);
      td2.append(img);
      tr.append(td1, td2);
      parent.append(tr);
    }
  }
}
export function createRowI(parent, arr) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let span = document.createElement("span");
    let img = document.createElement("img");

    img.src = "image/button.webp";
    img.alt = "delete";
    img.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();

      let index = 0;
      for (let i = 0; i < arr.length; i++) {
        if (
          e.target.parentNode.childNodes[0].textContent == arr[i][0] &&
          e.target.parentNode.childNodes[1].textContent.includes(arr[i][1])
        ) {
          index = i;
        }
        arr.splice(index, 1);

        localStorage.setItem("listOfIncome", JSON.stringify(arr));
      }
    });
    td1.innerHTML = arr[i]._description;
    td2.innerHTML = arr[i]._cifra;
    // console.log(arr[i]._cifra);

    span.innerHTML = "+";

    td2.prepend(span);
    td2.append(img);
    tr.append(td1, td2);
    parent.append(tr);
  }
}
export function createRowM(parent, arr) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let span = document.createElement("span");
    let img = document.createElement("img");

    img.src = "image/button.webp";
    img.alt = "delete";
    img.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();

      let index = 0;
      for (let i = 0; i < arr.length; i++) {
        if (
          e.target.parentNode.childNodes[0].textContent == arr[i][0] &&
          e.target.parentNode.childNodes[1].textContent.includes(arr[i][1])
        ) {
          index = i;
        }
        arr.splice(index, 1);

        localStorage.setItem("whole", JSON.stringify(arr));
      }
    });
    td1.innerHTML = arr[i]._description;
    td2.innerHTML = arr[i]._cifra;
    // console.log(arr[i]._cifra);

    if (arr[i]._sign == false) {
      let button = document.createElement("button");
      let btn = percentInTable(arr, arr[i]._cifra);
      button.textContent = btn.toFixed(0) + "%";
      console.log(arr);
      span.innerHTML = "-";
      td2.append(button);
      td2.prepend(span);
      td2.append(img);
      tr.append(td1, td2);
      parent.append(tr);
    }
  }
}
