window.addEventListener("load", inicio);
function inicio(){
    metMusic.inicio();
}

var propMusic = {
    off: null,
    on: null,
    isPaused: false,
    piano: null,
    intervalo: null,
    contador_intervalo: 0
}

var metMusic = {
    inicio: function(){
        // Música
        propMusic.off = document.getElementsByClassName("off")[0];
        propMusic.on = document.getElementsByClassName("on");
        propMusic.piano = document.getElementById("piano");

        propMusic.off.addEventListener("click", this.play_music);
        for (elem of propMusic.on){
            elem.addEventListener("click", this.pause_music);
        }
    },

    play_music: function(){
        propMusic.off.style.display = "none";
        metMusic.speaker_animation(true);

        propMusic.piano.play();
    },

    pause_music: function(){
        metMusic.speaker_animation(false);
        propMusic.off.style.display = "block";

        propMusic.piano.pause();
    },

    speaker_animation: function(activar){
        propMusic.contador_intervalo = 0;
        if (activar){
            propMusic.intervalo = window.setInterval(function(){
                for (i=0; i<propMusic.on.length; i++){
                    if (i == propMusic.contador_intervalo){
                        propMusic.on[i].style.display = "block";
                    } else {
                        propMusic.on[i].style.display = "none";
                    }
                }
                
                propMusic.contador_intervalo = (propMusic.contador_intervalo + 1) % propMusic.on.length;
            }, 700);
        } else {
            clearInterval(propMusic.intervalo);
            for (elem of propMusic.on){
                elem.style.display = "none";
            }
        }
    }
}