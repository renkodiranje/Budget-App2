export class Unos {
  constructor(s, d, c) {
    this.sign = s;
    this.description = d;
    this.cifra = c;
  }
  get description() {
    return this._description;
  }
  set description(d) {
    if (d != " " && d.length <= 50) {
      this._description = d;
    }
  }
  get cifra() {
    return this._cifra;
  }
  set cifra(c) {
    if (c >= 1) {
      this._cifra = c;
    }
  }
  get sign() {
    return this._sign;
  }
  set sign(s) {
    if (s == "plus") {
      this._sign = true;
    } else {
      this._sign = false;
    }
  }
}
