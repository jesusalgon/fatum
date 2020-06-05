window.addEventListener("load", inicio);
function inicio(){
    metMenu.inicio();
}

var propMenu = {
    btn_menu: null,
    contenedor: null,
    btn_cerrar: null, 
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
        propMenu.btn_menu.addEventListener("click", this.aparece_menu);
        propMenu.btn_cerrar.addEventListener("click", this.desaparece_menu);
        window.addEventListener("scroll", this.aparecer_flecha);
        for (elem of propMenu.elementos_menu){
            elem.addEventListener("click", this.desaparece_menu);
        }
    },

    aparece_menu: function(){
        propMenu.contenedor.style.right = "0%";
    },

    desaparece_menu: function(){
        propMenu.contenedor.style.right = "-100%"
    },

    aparecer_flecha: function(){
        if(window.scrollY >= 3*screen.height){
            propMenu.flecha.style.display = "block";
        } else {
            propMenu.flecha.style.display = "none";
        }
    }
}