import Modell from "../model/modell.js";
import Menu from "../view/menu/menu.js";

class ControllerMenu {
  constructor() {
    const modell = new Modell();
    const szuloElem = $("article");
    new Menu(modell.adatok, szuloElem);
    $(window).on("JatekIndul", (event)=>{



      szuloElem.empty();
      window.dispatchEvent(new CustomEvent("jatek"));
    });

  }
}
export default ControllerMenu;
