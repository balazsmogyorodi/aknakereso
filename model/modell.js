import PalyaLetrehozo, { menuReszek } from "./adatok.js";

class Modell {
  #oszlop;
  #sor;
  #akna;
  #talalt_akna;
  #palya = [];
  #jatekos;
  #nehezseg = "könnyű";
  #adatok;
  #mezo_id;
  #ellenorzo_id;
  constructor() {
    this.#adatok = menuReszek;
  }

  get nehezseg() {
    return this.#nehezseg;
  }
  setNehezseg(nehezseg) {
    this.#nehezseg = nehezseg;
  }

  get adatok() {
    return this.#adatok;
  }

  get jatekos() {
    return this.#jatekos;
  }

  setJatekos(jatekos) {
    this.#jatekos = jatekos;
  }

  jatekosTerLetrehozas() {
    switch (this.#nehezseg) {
      case "könnyű":
        this.#akna = 10;
        this.#oszlop = 9;
        this.#sor = 9;
        this.#palya = new PalyaLetrehozo(this.#oszlop, this.#sor, this.#akna);
        break;
      case "normál":
        this.#akna = 40;
        this.#oszlop = 16;
        this.#sor = 16;
        this.#palya = new PalyaLetrehozo(this.#oszlop, this.#sor, this.#akna);
        break;
      case "nehéz":
        this.#akna = 99;
        this.#oszlop = 30;
        this.#sor = 16;
        this.#palya = new PalyaLetrehozo(this.#oszlop, this.#sor, this.#akna);
        break;
      default:
        break;
    }
    return this.#palya;
  }
/*
  aknaKoruloteEllenorzes(id) {
    this.#talalt_akna = 0;
    this.#mezo_id = id;
    this.#bal(this.#mezo_id);
    this.#jobb(this.#mezo_id);

  }

  #bal(mezo) {
    if ((mezo % this.#oszlop) - 1 < 0) {
      return;
    } else {
      mezo += -1;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }
  #jobb(mezo) {
    if ((mezo % this.#oszlop) + 1 <= this.#palya.length - 1) {
      return;
    } else {
      mezo += 1;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }
  #felette() {
    this.#mezo_id += -this.#palya.length / this.#oszlop;
    if (this.#mezo_id > this.#adatok.length - 1) {
      return;
    } else {
    }
  }
  #alatta() {
    this.#mezo_id += this.#palya.length / this.#oszlop;
    if (this.#mezo_id > this.#palya.length - 1) {
      return;
    } else {
    }
  }

  #mezoCheck(mezo) {
    if (this.#palya[mezo] == "akna") {
      return 1;
    } else {
      return 0;
    }
  }

*/
}
export default Modell;
