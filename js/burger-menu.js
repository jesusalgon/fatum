window.addEventListener("load", inicio);
function inicio(){
    metMenu.inicio();
}

var propMenu = {
    btn_menu: null,
    contenedor: null, 
    flecha: null,
    elementos_menu: null
} 

var metMenu = {
    init_propiedades: function(){
        propMenu.btn_menu = document.getElementById("btn-menu");
        propMenu.contenedor = document.getElementById("contenedor-burger");
        propMenu.btn_cerrar = document.getElementById("cerrar-icon");
        propMenu.flecha = document.getElementById("flecha-arriba");
        propMenu.elementos_menu = document.getElementsByClassName("seccion-burger");
    },

    inicio: function(){
        this.init_propiedades();
        propMenu.btn_menu.addEventListener("click", this.mueve_menu);
        window.addEventListener("scroll", this.aparecer_flecha);
        for (elem of propMenu.elementos_menu){
            elem.addEventListener("click", this.desaparece_menu);
        }
    },

    mueve_menu: function(){
        if (propMenu.btn_menu.className == "menu-icon"){
            propMenu.contenedor.style.top = "5rem";
            propMenu.btn_menu.className += " cruz";
        } else {
            propMenu.contenedor.style.top = "-100%";
            propMenu.btn_menu.className = propMenu.btn_menu.className.replace(" cruz", "");
        }
    },

    aparecer_flecha: function(){
        if(window.scrollY >= 3*screen.height){
            propMenu.flecha.style.display = "block";
        } else {
            propMenu.flecha.style.display = "none";
        }
    }
}