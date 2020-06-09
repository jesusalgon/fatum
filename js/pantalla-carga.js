window.addEventListener("load", inicio);

function inicio(){
    metCarga.carga_boton();
}

var propCarga = {
    load: null,
    btn: null,
    pantalla: null,
    header: null,
    cuerpo: null
}

var metCarga = {
    carga_boton: function(){
        propCarga.load = document.getElementById("load");
        propCarga.pantalla = document.getElementsByClassName("pantalla-carga")[0];
        propCarga.header = document.getElementsByTagName("header")[0];
        propCarga.cuerpo = document.getElementsByClassName("cuerpo")[0];

        propCarga.btn = document.getElementById("btn-carga");
        propCarga.btn.addEventListener("click", metCarga.carga_contenido);

        propCarga.load.style.display = "none";
        propCarga.btn.style.display = "flex";
    },

    carga_contenido: function(){
        propCarga.pantalla.style.opacity = "0";

        propCarga.header.style.display = "flex";
        propCarga.cuerpo.style.display = "block";
        setTimeout(function(){
            propCarga.header.style.opacity = "1";
            propCarga.cuerpo.style.opacity = "1";
            propCarga.pantalla.style.display = "none";
        }, 2000);

        metMusic.play_music();
    }
}


