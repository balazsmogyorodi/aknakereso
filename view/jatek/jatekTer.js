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
    this.#ujraGomb()
    this.#init();
  }

  #ujraGomb(){
    const navElem = $("nav");
    navElem.append("<button>Új probálkozás</button>")
    const buttonElem = navElem.children("button");
    buttonElem.on("click",() =>{
      this.#buttonEsemeny();
    })
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

  getObjektum(){
    return this.#mezok;
  }

  #buttonEsemeny(){
    window.dispatchEvent(new CustomEvent("ujra"));
  }
}
export default JatekTer;
