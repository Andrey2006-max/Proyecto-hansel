// ===============================
// Nuestra Historia ❤️
// Alan & María Isabel
// ===============================

// Fecha de inicio de la relación


// Botón comenzar con música 🎵
function irHistoria(){

    const musica = document.getElementById("musica");

    if(musica){
        musica.play();
    }

    document.getElementById("historia").scrollIntoView({
        behavior:"smooth"
    });

}


// ==========================
// Lluvia de corazones
// ==========================

function crearCorazon(){

    const corazon = document.createElement("div");

    corazon.innerHTML="❤️";

    corazon.style.position="fixed";
    corazon.style.left=Math.random()*100+"vw";
    corazon.style.top="-30px";
    corazon.style.fontSize=(20+Math.random()*25)+"px";
    corazon.style.pointerEvents="none";
    corazon.style.zIndex="9999";

    document.body.appendChild(corazon);

    let y=-30;

    const caer=setInterval(()=>{

        y+=4;

        corazon.style.top=y+"px";

        if(y>window.innerHeight){

            clearInterval(caer);

            corazon.remove();

        }

    },20);

}


// ==========================
// Botón Te Amo ❤️
// ==========================

document.getElementById("amor").addEventListener("click",()=>{

    for(let i=0;i<150;i++){

        setTimeout(crearCorazon,i*60);

    }

    setTimeout(()=>{

      alert(
    "❤️ Feliz cumpleaños a una de las personas más especiales que tengo en mi vida ❤️\n\n" +
    "Gracias por todo y por cada momento que hemos compartido.\n\n" +
    "Espero que este sea uno de los muchos cumpleaños que me permitas celebrar a tu lado.\n\n" +
    "Te amo mucho, mi niña ❤️‍🩹\n\n" +
    "Con mucho amor,\nHansel ❤️"
);
    },3000);

});


// ==========================
// Pétalos de rosa 🌹
// ==========================

function crearPetalo(){

    const petalo = document.createElement("div");

    petalo.innerHTML = "🌹";

    petalo.style.position = "fixed";
    petalo.style.top = "-20px";
    petalo.style.left = Math.random()*100 + "vw";
    petalo.style.fontSize = (15 + Math.random()*20) + "px";
    petalo.style.zIndex = "9999";
    petalo.style.pointerEvents = "none";

    document.body.appendChild(petalo);

    let y = -20;

    const caer = setInterval(()=>{

        y += 3;

        petalo.style.top = y + "px";

        petalo.style.transform =
        "rotate(" + y + "deg)";

        if(y > window.innerHeight){

            clearInterval(caer);
            petalo.remove();

        }

    },30);

}


setInterval(crearPetalo,800);
// ==========================
// Álbum de fotos ❤️📸
// ==========================

function abrirFoto(imagen){

    console.log("Foto abierta");

    const visor = document.getElementById("visor");
    const fotoGrande = document.getElementById("fotoGrande");

    if(visor && fotoGrande){

        fotoGrande.src = imagen.src;

        visor.style.display = "flex";

    }else{

        console.log("No existe el visor");

    }

}


function cerrarFoto(){

    const visor = document.getElementById("visor");

    if(visor){

        visor.style.display = "none";

    }

}