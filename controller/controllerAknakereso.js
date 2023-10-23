import Idozito from "../model/idozito.js";
import Modell from "../model/modell.js";
import JatekTer from "../view/jatek/jatekTer.js";

class ControllerAknakereso {
  #jatekos;
  #nehezseg;
  constructor() {
    const articleElem = $("article");
    const idozito = new Idozito(articleElem);
    console.log("játék kezdődik");
    const modell = new Modell();
    const jatek = new JatekTer(
      modell.jatekosTerLetrehozas(),
      articleElem,
      modell.nehezseg
    );
    $(window).on("mezoKattintas", (event) => {
      console.log(idozito.ido);
      const obj = event.detail;
      if (obj.getErtek() == "akna") {
        console.log(obj.getErtek());
        obj.getDivElem().append(`<div class="akna"> </div>`);
        jatek.setTalalat(true);
        this.#idoMegallito(idozito);
      } else {
        modell.aknaKoruloteEllenorzes(obj.getId());
      }
    });
  }

  #idoMegallito(idozito) {
    const time = $(".timer");
    time.removeClass();
    time.addClass("timerStop");
    idozito.setIdokiiro(time);
  }
}

export default ControllerAknakereso;
