class TextMenu{
    #key;
    #divElem;
    #urlapElem;
    #value
    #inputElem
    constructor(key, adatok, szuloElem){
        this.#divElem = szuloElem;
        this.#key = key;
        this.#urlapElem = adatok;
        this.#inputElemKiiras();
        this.#inputElem = $(`#${this.#key}`);
        this.#inputElem.on("keyup", ()=>{
            this.#value = this.#inputElem.val();
            console.log(this.#value);
            this.#irasTrigger();            
        })
    }

  

    #inputElemKiiras(){
        let txt = `<div><label for="${this.#key}">${this.#urlapElem.cim}</label><br />
        <input type="${this.#key.tipus}" id="${this.#key}" name="${this.#key}" pattern="${this.#urlapElem.pattern}" value="${this.#urlapElem.alapValue}" placeholder="${this.#urlapElem.placeHolder}"/><br/>
        <div class="valid elrejt">OK</div>
        <div class="invalid elrejt">${this.#urlapElem.hibaUzenet}</div>
         </div>`;
        this.#divElem.append(txt);
    }


    #irasTrigger(){
        window.dispatchEvent(new CustomEvent("ir", {detail:this.#value}));
    }
    




/*
    <label for="fname">Játékos neve:</label><br />
    <input type="text" id="fname" name="fname" value="John" /><br />
*/

}
export default TextMenu;