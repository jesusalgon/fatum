window.addEventListener("load", inicio);
function inicio(){
    metScroll.inicio();
}

var propScroll = {
    scroll_suave: null,
    volver_arriba: null,
    posicion: null,
    intervalo: null
}

var metScroll = {
    inicio: function(){
        propScroll.scroll_suave = document.getElementsByClassName("scroll-suave");
        propScroll.volver_arriba = document.getElementsByClassName("volver-arriba");
        propScroll.posicion = window.pageYOffset;

        for (elem of propScroll.scroll_suave){
            elem.addEventListener("click", this.mover);
        }

        for (elem of propScroll.volver_arriba){
            elem.addEventListener("click", this.arriba)
        }
    },

    mover: function(e){
        e.preventDefault();

        propScroll.posicion = window.pageYOffset;
        destino = this.getAttribute("href");
        distancia = document.querySelector(destino).offsetTop;

        clearInterval(propScroll.intervalo);
        propScroll.intervalo = setInterval(function(){
            if (propScroll.posicion < distancia){
                propScroll.posicion += 100;

                if (propScroll.posicion >= distancia){
                    clearInterval(propScroll.intervalo);
                }
            } else {
                propScroll.posicion -= 100;

                if (propScroll.posicion <= distancia){
                    clearInterval(propScroll.intervalo);
                }
            }

            window.scrollTo(0, propScroll.posicion);
        }, 15)
    },

    arriba: function(e){
        e.preventDefault();
        clearInterval(propScroll.intervalo);

        propScroll.posicion = window.pageYOffset;
        destino = this.getAttribute("href");

        clearInterval(propScroll.intervalo);
        propScroll.intervalo = setInterval(function(){
            if (propScroll.posicion > 0){
                propScroll.posicion -= 100;

                if (propScroll.posicion <= 0){
                    clearInterval(propScroll.intervalo);
                }
            } else {
                return;
            }

            window.scrollTo(0, propScroll.posicion);
        }, 15)
    }
}
