class GameOver {
  #jatekosNeve;
  #idoRekord;
  #uzenetElem;
  constructor(jatekosNeve, idoRekord) {
    this.#jatekosNeve = jatekosNeve;
    this.#idoRekord = idoRekord;
    $("main").append(`<div class="uzenet">`);
    this.#uzenetElem = $(".uzenet");
    this.#uzenetFejlec();
    this.#uzenetKiiras();
    $(".bezar").on("click",()=>{

        window.dispatchEvent(new CustomEvent("closed"))
    })
  }

  #uzenetFejlec() {
    this.#uzenetElem.append(`<div class="fejlec">`);
    const fejlec = this.#uzenetElem.children(".fejlec");
    fejlec.append(`<button class="bezar">x</button>`);
  }

  #uzenetKiiras() {
    this.#uzenetElem.append(`<div class="tartalom">`);
    const uzenet = this.#uzenetElem.children(".tartalom");
    uzenet.append(`<h1>Game Over</1> <h2>Játékos neve:  ${this.#jatekosNeve} </h2>  <h2> Idő: ${this.#idoRekord}</h2> <p>Legközelebb sikerül!</>`);
  }
}
export default GameOver;
