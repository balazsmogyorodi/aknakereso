class JatekMezo {
  #id_mezo;
  #ertek;
  #divElem;
  #talalat;

  constructor(id, ertek, szuloElem, talalat) {
    this.#talalat = talalat;
    this.#id_mezo = id;
    this.#ertek = ertek;
    szuloElem.append("<div></div>");
    this.#divElem = szuloElem.children("div:last-child");
    this.#divElem.addClass("mezoNemKattintott");
    this.#kattintas();
  }



  #kattintas() {
    this.#divElem.on("click", () => {
      if (this.#divElem.attr("class") == "mezoKattintott" || this.#talalat) {
        return;
      } else {
        this.#divElem.removeClass("mezoNemKattintott");
        this.#divElem.addClass("mezoKattintott");
        this.#esemenyTrigger();
      }
    });
  }
  #esemenyTrigger() {
    window.dispatchEvent(new CustomEvent("mezoKattintas", { detail: this }));
  }

  getErtek() {
    return this.#ertek;
  }

  getId() {
    return this.#id_mezo;
  }

  getDivElem() {
    return this.#divElem;
  }

  setTalalat(talalat){
    this.#talalat = talalat;
  }


}
export default JatekMezo;
