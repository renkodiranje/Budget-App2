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
  let percent = 0;
  if (incomex != 0) {
    percent = (x * 100) / incomex;
  } else {
    percent = 100;
  }
  return percent;
};

export function createRowI(parent, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._sign == true) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let span = document.createElement("span");
      let buttonDelete = document.createElement("button");
      buttonDelete.setAttribute("id", "buttonDelete");

      buttonDelete.innerHTML = "&times;";

      buttonDelete.addEventListener("click", (e) => {
        let index = undefined;
        if (
          e.target.parentNode.parentNode.childNodes[0].textContent ==
            arr[i]._description &&
          Number(
            e.target.parentNode.parentNode.childNodes[1].childNodes[1]
              .textContent
          ) == arr[i]._cifra
        ) {
          index = i;
        }
        arr.splice(index, 1);

        localStorage.setItem("whole", JSON.stringify(arr));
        location.reload();
      });

      td1.innerHTML = arr[i]._description;
      td2.innerHTML = arr[i]._cifra;
      span.innerHTML = "+";

      td2.prepend(span);
      td2.append(buttonDelete);
      tr.append(td1, td2);
      parent.append(tr);
    }
  }
}
export function createRowE(parent, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]._sign == false) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let span = document.createElement("span");
      let buttonDelete = document.createElement("button");
      buttonDelete.setAttribute("id", "buttonDelete");

      buttonDelete.innerHTML = "&times;";
      td1.innerHTML = arr[i]._description;
      td2.innerHTML = arr[i]._cifra;
      buttonDelete.addEventListener("click", (e) => {
        e.preventDefault();

        let index = undefined;

        if (
          e.target.parentNode.parentNode.childNodes[0].textContent ==
            arr[i]._description &&
          Number(
            e.target.parentNode.parentNode.childNodes[1].childNodes[1]
              .textContent
          ) == arr[i]._cifra
        ) {
          index = i;
        }

        arr.splice(index, 1);
        localStorage.setItem("whole", JSON.stringify(arr));
        location.reload();
      });

      let buttonPercent = document.createElement("button");
      buttonPercent.setAttribute("id", "buttonPercent");
      let btn = percentInTable(arr, arr[i]._cifra);
      buttonPercent.textContent = btn.toFixed(0) + "%";
      span.innerHTML = "-";
      td2.append(buttonPercent);
      td2.prepend(span);
      td2.append(buttonDelete);
      tr.append(td1, td2);
      parent.append(tr);
    }
  }
}
