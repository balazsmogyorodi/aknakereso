import SelectMenu from "./selectMenu.js";
import TextMenu from "./textMenu.js";

class Menu {
  #adatok;
  #divElem;
  #buttonElem;
  constructor(adatok, szuloElem) {
    this.#adatok = adatok;
    szuloElem.append("<div></div>");
    this.#divElem = szuloElem.children("div");
    this.#menuLetrehozasa();
    this.#buttonElem = $(".jatekInditas");
    this.#buttonElem.on("click", () =>{
      this.#esemenyTrigger();
    })
    

  }

  #menuLetrehozasa() {
    console.log(this.#adatok)
    
    for (const key in this.#adatok) {
        console.log(this.#adatok[key].tipus);
        switch (this.#adatok[key].tipus) {
            case "text":
                (new TextMenu(key, this.#adatok[key], this.#divElem))
              break;
            case "select":
              (new SelectMenu(key, this.#adatok[key], this.#divElem))
              break;
            default:
              break;
          }      
    }
    this.#divElem.append(`<div><button class="jatekInditas"> Játék inditása</button></div>`)
  }


  #esemenyTrigger(){
    window.dispatchEvent(new CustomEvent("JatekIndul", {detail: this}))
  }
}
export default Menu;
