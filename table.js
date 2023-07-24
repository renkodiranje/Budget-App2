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
    span.innerHTML = "+";
    if (arr[i]._sign == false) {
      let button = document.createElement("button");
      button.id = "percent";
      td2.append(button);
    }

    td2.prepend(span);
    td2.append(img);
    tr.append(td1, td2);
    parent.append(tr);
  }
}
