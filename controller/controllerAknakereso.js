import Idozito from "../model/idozito.js";
import Modell from "../model/modell.js";
import JatekTer from "../view/jatek/jatekTer.js";

class ControllerAknakereso {
  #jatekos;
  #nehezseg;
  #jatek;
  #idozito

  
  constructor(modell) {
    const articleElem = $("article");
    this.#idozito = new Idozito(articleElem);
    console.log("játék kezdődik");
    this.#jatek = new JatekTer(
      modell.jatekosTerLetrehozas(),
      articleElem,
      modell.nehezseg
    );
    $(window).on("ujra", () =>{
      articleElem.empty();
      $("nav").empty();
      modell.felforditottVissza();
      this.#idozito = new Idozito(articleElem);
      this.#jatek = new JatekTer(
        modell.jatekosTerLetrehozas(),
        articleElem,
        modell.nehezseg
      );
    });
    $(window).on("mezoKattintas", (event) => {
      console.log(this.#idozito.ido);
      const obj = event.detail;
      modell.setFelforditot();
      modell.setGyozelem();
      console.log(this.#idozito.ido)
      if (obj.getErtek() == "akna") {
        console.log(obj.getErtek());
        obj.getDivElem().append(`<div class="akna"> </div>`);
        this.#jatek.setTalalat(true);
        this.#idoMegallito(this.#idozito);
        modell.setIdozito(this.#idozito.ido)
        window.dispatchEvent(new CustomEvent("game_over", {detail:modell}));
      } if(modell.getGyozelem()){
        this.#jatek.setTalalat(true);
        this.#idoMegallito(this.#idozito);
        modell.setIdozito(this.#idozito.ido)
        window.dispatchEvent(new CustomEvent("gyozelem", {detail:modell}));
      }
      else {
        modell.aknaKoruloteEllenorzes(obj.getId());
        if (modell.talalat_akna > 0) {
          obj.getDivElem().append(`${modell.talalat_akna}`);
        } else {
          this.#dominoefektus(
            this.#jatek.getObjektum(),
            obj.getId(),
            modell.oszlop,
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

  #dominoefektus(obj, id, oszlop, palya) {
    console.log(palya.length);
    //felfele
    if (id - oszlop >= 0) {
      obj[id - oszlop].kattintas();
    }
    //lefele
    if (id + oszlop <= palya.length - 1) {
      obj[id + oszlop].kattintas();
    }
    //balra
    if ((id % oszlop) - 1 >= 0) {
      obj[id - 1].kattintas();
    }
    //jobbra
    if ((id % oszlop) + 1 < oszlop) {
      obj[id + 1].kattintas();
    }
    //balLe
    if ((id % oszlop) - 1 >= 0 && id + oszlop <= palya.length - 1) {
      obj[id - 1 + oszlop].kattintas();
    }
    // jobbLe
    if ((id % oszlop) + 1 < oszlop && id + oszlop <= palya.length - 1) {
      obj[id + 1 + oszlop].kattintas();
    }
    // balFel
    if ((id % oszlop) - 1 >= 0 && id - oszlop >= 0) {
      obj[id - 1 - oszlop].kattintas();
    }
    //jobbFel
    if ((id % oszlop) + 1 < oszlop && id - oszlop >= 0) {
      obj[id + 1 - oszlop].kattintas();
    } else {
      return;
    }
  }
}

export default ControllerAknakereso;
