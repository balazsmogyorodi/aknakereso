class Idozito {
  #ido;
  #szuloElem;
  #idoKiiro;
  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    this.#szuloElem.append(`<span class="timer">0</span>`);
    this.#idoKiiro = $(".timer");
    this.#ido = 0;

    this.x = setInterval(() => {
      if (this.#idoKiiro.attr("class") == "timer") {
        this.#ido = this.#ido + 1;
        this.#setIdo(this.#ido);
      } else{
        return;
      }
    }, 1000);

    console.log(this.#ido);
  }
  #setIdo(ido) {
    this.#ido = ido;
    this.#idoKiiro.html(this.#ido);
  }
  setIdokiiro(idoKiiro) {
    this.#idoKiiro = idoKiiro;
  }

  get ido(){
    return this.#ido;
  }

 
}
export default Idozito;
