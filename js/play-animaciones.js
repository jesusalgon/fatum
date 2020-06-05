window.addEventListener("load", inicio);
function inicio(){
    metPlay.inicio();
}

var propPlay = {
    posicion: null,
    animaciones: null,
    slider: null, 
    todo: null,
    off: null,
    on: null,
    isPaused: false,
    piano: null,
    intervalo: null,
    contador_intervalo: 0
}

var metPlay = {
    inicio: function(){
        // Animaciones
        propPlay.posicion = window.pageYOffset;
        propPlay.slider = document.getElementsByClassName("foto-slider")[0];
        propPlay.animaciones = document.getElementsByClassName("animacion-video");
        propPlay.todo = [propPlay.slider];
        for (elem of propPlay.animaciones){
            propPlay.todo.push(elem);
        }

        propPlay.slider.play();
        window.addEventListener("scroll", this.pause_and_play);

        // Música
        propPlay.off = document.getElementsByClassName("off")[0];
        propPlay.on = document.getElementsByClassName("on");
        propPlay.piano = document.getElementById("piano");

        propPlay.off.addEventListener("click", this.play_music);
        for (elem of propPlay.on){
            elem.addEventListener("click", this.pause_music);
        }
    },

    pause_and_play: function(){
        propPlay.posicion = window.pageYOffset;

        for (element of propPlay.todo){
            height = element.offsetHeight;
            element_position = element.offsetTop - screen.height;
            border = element_position + height + screen.height;

            if (propPlay.posicion >= element_position && propPlay.posicion <= border){
                element.play();
            } else {
                element.pause();
            }
        }
    },

    play_music: function(){
        propPlay.off.style.display = "none";
        metPlay.speaker_animation(true);

        propPlay.piano.play();
    },

    pause_music: function(){
        metPlay.speaker_animation(false);
        propPlay.off.style.display = "block";

        propPlay.piano.pause();
    },

    speaker_animation: function(activar){
        propPlay.contador_intervalo = 0;
        if (activar){
            propPlay.intervalo = window.setInterval(function(){
                for (i=0; i<propPlay.on.length; i++){
                    if (i == propPlay.contador_intervalo){
                        propPlay.on[i].style.display = "block";
                    } else {
                        propPlay.on[i].style.display = "none";
                    }
                }
                
                propPlay.contador_intervalo = (propPlay.contador_intervalo + 1) % propPlay.on.length;
            }, 700);
        } else {
            clearInterval(propPlay.intervalo);
            for (elem of propPlay.on){
                elem.style.display = "none";
            }
        }
    }
}