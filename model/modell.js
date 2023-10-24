import PalyaLetrehozo, { menuReszek } from "./adatok.js";

class Modell {
  #oszlop;
  #sor;
  #akna;
  #talalt_akna;
  #palya = [];
  #jatekos;
  #nehezseg;
  #adatok;
  #mezo_id;
  #idozito
  #felforditot;
  #gyoztel
  constructor() {
    this.#adatok = menuReszek;
    this.#jatekos = "Gipsz Jakab";
    this.#idozito = 0;
    this.#felforditot = 0
  }

  setFelforditot(){
    this.#felforditot = this.#felforditot + 1;
    console.log(this.#felforditot)
    console.log(this.#palya.length-this.#akna)
  }

  felforditottVissza(){
    this.#felforditot = 0;
  }

  setGyozelem(){
    if (this.#felforditot == this.#palya.length-this.#akna){
      this.#gyoztel = true;
    } else {
      this.#gyoztel = false;
    }
  }

  getGyozelem(){
    return this.#gyoztel;
  }

  setIdozito(ido){
    this.#idozito = ido;
  }
  get idozito(){
    return this.#idozito;
  }
  
  get nehezseg() {
    return this.#nehezseg;
  }

  get sor() {
    return this.#sor;
  }

  get oszlop(){
    return this.#oszlop;
  }

  getIRekordIdo(){
    return ido

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
    if (jatekos == ""){
      this.#jatekos = "Anonymus";
    } else{
      this.#jatekos = jatekos;
    }
  }
  get talalat_akna() {
    return this.#talalt_akna;
  }

  jatekosTerLetrehozas() {
    console.log(this.#nehezseg)
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
    console.log(this.#palya)
    return this.#palya;
  }

  get palya(){
    return this.#palya
  }

  aknaKoruloteEllenorzes(id) {
    console.log(this.#palya);
    this.#talalt_akna = 0;
    this.#mezo_id = id;
    this.#bal(this.#mezo_id);
    this.#jobb(this.#mezo_id);
    this.#felette(this.#mezo_id);
    this.#alatta(this.#mezo_id);
    this.#balFelso(this.#mezo_id);
    this.#jobbFelso(this.#mezo_id);
    this.#jobbAlso(this.#mezo_id);
    this.#balAlso(this.#mezo_id);
    console.log(this.#talalt_akna);
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
    if ((mezo % this.#oszlop) + 1 >= this.#oszlop) {
      return;
    } else {
      mezo += 1;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }
  #felette(mezo) {
    if (mezo - this.#oszlop < 0) {
      return;
    } else {
      mezo += -this.#oszlop;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }
  #alatta(mezo) {
    console.log(mezo + this.#oszlop);
    console.log(this.#palya.length - 1);
    if (mezo + this.#oszlop > this.#palya.length - 1) {
      return;
    } else {
      mezo += this.#oszlop;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }

  #jobbFelso(mezo) {
    if (
      mezo - this.#oszlop + 1 < 0 ||
      (mezo % this.#oszlop) + 1 > this.#oszlop - 1
    ) {
      return;
    } else {
      mezo += -this.#oszlop + 1;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }
  #balFelso(mezo) {
    if (mezo - this.#oszlop - 1 < 0 || 0 > (mezo % this.#oszlop) - 1) {
      return;
    } else {
      mezo += -this.#oszlop - 1;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }

  #jobbAlso(mezo) {
    if (
      mezo + this.#oszlop + 1 > this.#palya.length - 1 ||
      (mezo % this.#oszlop) + 1 > this.#oszlop - 1 
    ) {
      return;
    } else {
      mezo += this.#oszlop + 1;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }
  #balAlso(mezo) {
  
    if (
      mezo + this.#oszlop - 1 > this.#palya.length - 1 ||
      0 > (mezo % this.#oszlop) - 1
    ) {
      return;
    } else {
      mezo += this.#oszlop - 1;
      this.#talalt_akna = this.#talalt_akna + this.#mezoCheck(mezo);
    }
  }

  #mezoCheck(mezo) {
    if (this.#palya[mezo] == "akna") {
      return 1;
    } else {
      return 0;
    }
  }
}
export default Modell;
