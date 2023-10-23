import JatekMezo from "./jatekMezo.js";

class JatekTer {
  #jatekTer;
  #jatekMezo;
  #talalat;
  #mezok = [];

  constructor(adatok, szuloElem, nehezseg) {
    this.#talalat = false;
    this.#jatekTer = adatok;
    szuloElem.append("<div></div>");
    this.#jatekMezo = szuloElem.children("div");
    this.#jatekMezo.addClass(`${nehezseg}`);
    this.#init();
  }

  #init() {
    for (let index = 0; index < this.#jatekTer.length; index++) {
      this.#mezok[index] = new JatekMezo(
        index,
        this.#jatekTer[index],
        this.#jatekMezo,
        this.#talalat
      );
    }
  }

  #ellenorzes() {
    for (let index = 0; index < this.#jatekTer.length; index++) {
      this.#mezok[index].setTalalat(this.#talalat);
    }
  }

  setTalalat(talalat) {
      this.#talalat = talalat;
      this.#ellenorzes();
  }
}
export default JatekTer;
