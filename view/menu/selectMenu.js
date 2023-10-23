class SelectMenu {
  #key;
  #divElem;
  #urlapElem;
  #value
  #selectElem
  constructor(key, adatok, szuloElem) {
    this.#divElem = szuloElem;
    this.#key = key;
    this.#urlapElem = adatok;
    this.#inputElemKiiras();
    this.#selectElem = $(`#${this.#key}`)
    this.#selectElem.on("change", ()=>{
      this.#value = this.#selectElem.val();
      console.log(this.#value);
      this.#selectTrigger();
    })
    
  }


  get value(){
    return this.#value;
  }

  #inputElemKiiras() {
    let txt = `<div><label for="${this.#key}">${
      this.#urlapElem.cim
    }</label><br />
        <${this.#urlapElem.tipus}  id="${this.#key}" name="${
      this.#key
    }" value="${this.#urlapElem.alapValue}">`;
    for (let index = 0; index < this.#urlapElem.opciok.length; index++) {
      txt += `<option value="${this.#urlapElem.opciok[index]}">${
        this.#urlapElem.opciok[index]
      }</option>`;
    }
    txt += `</select> </div>`;
    this.#divElem.append(txt);
  }


  #selectTrigger(){
    window.dispatchEvent(new CustomEvent("valaszt", {detail:this.#value}))
  }

  
}
export default SelectMenu;
