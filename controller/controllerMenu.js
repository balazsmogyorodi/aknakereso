import Modell from "../model/modell.js";
import Menu from "../view/menu/menu.js";

class ControllerMenu {
  #modell;
  constructor() {
    this.#modell = new Modell();
    const szuloElem = $("article");
    new Menu(this.#modell.adatok, szuloElem);
    $(window).on("JatekIndul", (event)=>{
      const obj = event.detail;
      this.#modell.setJatekos(obj.nev);
      console.log(obj.nev);
      console.log(obj.nehezseg);
      this.#modell.setNehezseg(obj.nehezseg);
      szuloElem.empty();
      window.dispatchEvent(new CustomEvent("jatek", {detail:this.#modell}));
    });

  }
}
export default ControllerMenu;
