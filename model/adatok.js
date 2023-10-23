export const menuReszek = {
  jatekosNev: {
    tipus: "text",
    cim: "Játékos neve:",
    placeHolder: "Kovács Béla",
    pattern: "[A-Za-z]{3}",
    alapValue: "",
    hibaUzenet:
      "Kérem adjon meg egy nagybetűvel kezdödő, minimum 3 betűs nevet!",
  },

  jatekNehezseg: {
    tipus: "select",
    cim: "Játék nehézsége",
    opciok: ["könnyű", "normál", "nehéz"],
    alapValue: "könnyű",
  },
};

class PalyaLetrehozo {
    #palya = [];
  constructor(oszlop, sor, akna) {
    for (let index = 0; index < oszlop * sor; index++) {
      this.#palya.push("ures");
    }
    for (let index = 0; index < akna; index++) {
      this.#palya[index] = "akna";
    }
    this.#palya = this.#shuffle(this.#palya);
    return this.#palya;
  }

  #shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
export default PalyaLetrehozo;
