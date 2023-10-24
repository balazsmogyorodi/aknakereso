import GameOver from "../view/eredmey/gameOver.js";
import Gyozelem from "../view/eredmey/gyozelem.js";

class ControllerKiiras{
    constructor(obj, eredmeny){
        if (eredmeny){
            new Gyozelem(obj.jatekos, obj.idozito);
        } else{
            new GameOver(obj.jatekos, obj.idozito)
        }
        $(window).on("closed",()=>{
            console.log("bezár");
            $(".uzenet").remove(".uzenet");
        })
    }
}
export default ControllerKiiras;