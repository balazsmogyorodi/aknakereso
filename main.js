import ControllerAknakereso from "./controller/controllerAknakereso.js";
import ControllerKiiras from "./controller/controllerKiiras.js";
import ControllerMenu from "./controller/controllerMenu.js"

$(function(){

    new ControllerMenu()
    $(window).on("jatek", (event)=>{
        new ControllerAknakereso(event.detail);
    })
    $(window).on("game_over",(event)=>{
        new ControllerKiiras(event.detail, false)

        
    })
    $(window).on("gyozelem", (event)=>{
        new ControllerKiiras(event.detail, true)
    })
})