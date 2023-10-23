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
        if (modell.talalat_akna > 0) {
          obj.getDivElem().append(`${modell.talalat_akna}`);
        } else {
          this.#dominoefektus(
            jatek.getObjektum(),
            obj.getId(),
            modell.sor,
            modell.palya
          );
        }
      }
    });
  }

  #idoMegallito(idozito) {
    const time = $(".timer");
    time.removeClass();
    time.addClass("timerStop");
    idozito.setIdokiiro(time);
  }

  #dominoefektus(obj, id, sor, palya) {
    console.log(palya.length);
    //felfele
    if (id - sor >= 0) {
      obj[id - sor].kattintas();
    }
    //lefele
    if (id + sor <= palya.length - 1) {
      obj[id + sor].kattintas();
    }
    //balra
    if ((id % sor) - 1 >= 0) {
      obj[id - 1].kattintas();
    }
    //jobbra
    if ((id % sor) + 1 < sor) {
      obj[id + 1].kattintas();
    }
    //balLe
    if ((id % sor) - 1 >= 0 && id + sor <= palya.length - 1) {
      obj[id - 1 + sor].kattintas();
    }
    // jobbLe
    if ((id % sor) + 1 < sor && id + sor <= palya.length - 1) {
      obj[id + 1 + sor].kattintas();
    }
    // balFel
    if ((id % sor) - 1 >= 0 && id - sor >= 0) {
      obj[id - 1 - sor].kattintas();
    }
    //jobbFel
    if ((id % sor) + 1 < sor && id - sor >= 0) {
      obj[id + 1 - sor].kattintas();
    } else {
      return;
    }
  }
}

export default ControllerAknakereso;
