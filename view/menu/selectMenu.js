class SelectMenu {
  #key;
  #divElem;
  #urlapElem;
  constructor(key, adatok, szuloElem) {
    this.#divElem = szuloElem;
    this.#key = key;
    this.#urlapElem = adatok;
    this.#inputElemKiiras();
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

  /*
    <label for="lname">Nehézségi fokozat</label><br />
            <select  id="lname" name="lname" value="Doe">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
          </select>
          */
}
export default SelectMenu;
