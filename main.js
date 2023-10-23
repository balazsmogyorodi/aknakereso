import ControllerAknakereso from "./controller/controllerAknakereso.js";
import ControllerMenu from "./controller/controllerMenu.js"

$(function(){

    new ControllerMenu()
    $(window).on("jatek", ()=>{
        new ControllerAknakereso();
    })
})