import SelectMenu from "./selectMenu.js";
import TextMenu from "./textMenu.js";

class Menu {
  #adatok;
  #divElem;
  #buttonElem;
  #nev;
  #nehezseg;
  constructor(adatok, szuloElem) {
    this.#nehezseg = "könnyű";
    this.#adatok = adatok;
    szuloElem.append("<div></div>");
    this.#divElem = szuloElem.children("div");
    this.#menuLetrehozasa();
    this.#buttonElem = $(".jatekInditas");
    this.#setText();
    this.#setNehezseg();
    this.#buttonElem.on("click", () => {
      this.#esemenyTrigger();
    });
  }

  #menuLetrehozasa() {
    console.log(this.#adatok);
    for (const key in this.#adatok) {
      console.log(this.#adatok[key].tipus);
      switch (this.#adatok[key].tipus) {
        case "text":
          new TextMenu(key, this.#adatok[key], this.#divElem);
          break;
        case "select":
          new SelectMenu(key, this.#adatok[key], this.#divElem);
          break;
        default:
          break;
      }
    }
    this.#divElem.append(
      `<div><button class="jatekInditas"> Játék inditása</button></div>`
    );
  }
  #setText() {
    $(window).on("ir", (event) => {
      this.#nev = event.detail;
    });
  }

  #setNehezseg(){
    $(window).on("valaszt", (event) => {
      this.#nehezseg = event.detail;
    })
  }

  get nev() {
    return this.#nev;
  }

  get nehezseg() {
    return this.#nehezseg;
  }

  #esemenyTrigger() {
    window.dispatchEvent(new CustomEvent("JatekIndul", { detail: this }));
  }
}
export default Menu;
