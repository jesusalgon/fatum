window.addEventListener("load", inicio);
function inicio(){
    metMenu.inicio();
}

var propMenu = {
    btn_menu: null,
    contenedor: null, 
    secciones: null,
    flecha: null,
    elementos_menu: null,
    cuerpo: null,
    cuerpo2: null
} 

var metMenu = {
    init_propiedades: function(){
        propMenu.btn_menu = document.getElementById("btn-menu");
        propMenu.contenedor = document.getElementById("contenedor-burger");
        propMenu.secciones = document.getElementsByClassName("seccion-burger");
        propMenu.btn_cerrar = document.getElementById("cerrar-icon");
        propMenu.flecha = document.getElementById("flecha-arriba");
        propMenu.elementos_menu = document.getElementsByClassName("seccion-burger");
        propMenu.cuerpo = document.getElementsByClassName("cuerpo")[0];
        propMenu.cuerpo2 = document.getElementsByClassName("cuerpo2")[0];
    },

    inicio: function(){
        this.init_propiedades();
        propMenu.btn_menu.addEventListener("click", this.mueve_menu);
        window.addEventListener("scroll", this.aparecer_flecha);
        for (var i = 0; i < propMenu.elementos_menu.length - 1; i++){
            propMenu.elementos_menu[i].addEventListener("click", this.desaparece_menu);
        }
        propMenu.elementos_menu[propMenu.elementos_menu.length - 1].addEventListener("click", this.cambia_pantalla);
        console.log(propMenu.elementos_menu[propMenu.elementos_menu.length - 1]);
    },

    mueve_menu: function(){
        if (propMenu.btn_menu.className == "menu-icon flecha"){
            propMenu.btn_menu.className = propMenu.btn_menu.className.replace(" flecha", "");
            window.scroll(0, 0);
            propMenu.cuerpo2.style.display = "none";
            propMenu.cuerpo.style.display = "block";
        }else if (propMenu.btn_menu.className == "menu-icon"){
            propMenu.contenedor.style.top = "5rem";
            propMenu.btn_menu.className += " cruz";
        } else {
            metMenu.desaparece_menu();
        }
    },

    desaparece_menu: function(){
        propMenu.contenedor.style.top = "-100%";
        propMenu.btn_menu.className = propMenu.btn_menu.className.replace(" cruz", "");
    },

    cambia_pantalla: function(e){
        e.preventDefault();
        propMenu.contenedor.style.top = "-100%";
        propMenu.btn_menu.className = propMenu.btn_menu.className.replace("cruz", "flecha");
        window.scroll(0, 0);
        propMenu.cuerpo.style.display = "none";
        propMenu.cuerpo2.style.display = "block";
    },

    aparecer_flecha: function(){
        if(window.scrollY >= 3*screen.height){
            propMenu.flecha.style.display = "block";
        } else {
            propMenu.flecha.style.display = "none";
        }
    }
}