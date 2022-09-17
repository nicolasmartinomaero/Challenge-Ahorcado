
//PALABRAS DEL JUEGO Y SELECTORES
let palabras = ["COMIDA","ORACLE","HTML","LADRON","MONEDA","GORRA"];
let palabraSecreta = "";
let palabraAdivinando = "";
let vidas = 6;

const imagen = document.getElementById(`imagen`);

//FUNCION PALABRA SECRETA
function elegirPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}


//INICIAR JUEGO
function iniciarJuego(){
document.getElementById("botonReinicio").style.display = "none";
document.getElementById("botonComprobar").style.display = "block";
document.getElementById("palabraAdivinando").style.display = "block";
document.getElementById("letra").style.display = "block";
document.getElementById("inicioJuego").style.display = "none";
document.getElementById("imagen").style.display = "block";
    elegirPalabraSecreta()
    for(i = 0; i < palabraSecreta.length; i++){
        palabraAdivinando = palabraAdivinando + "_ ";
    }
    document.getElementById(`palabraAdivinando`).innerHTML = palabraAdivinando;
}

let errores = 0;
let aciertos = 0;

function comprobar(){
    let acerto = false;
    let letra = document.getElementById("letra").value.toUpperCase();
    let nuevo = "";
    let usada = "";
    for( let i = 0; i < palabraSecreta.length; i++){
        if(letra == palabraSecreta[i]){
            nuevo = nuevo + letra + " ";
            acerto = true;
            aciertos++;
        } else if (nuevo != palabraSecreta){
            nuevo = nuevo + palabraAdivinando[i * 2] + " ";
        }
    }
    palabraAdivinando = nuevo;
    document.getElementById(`palabraAdivinando`).innerHTML = palabraAdivinando;
    document.getElementById("letra").value = "";
    
    if(acerto==false){
       errores++;
       const source = `../Challenge-Ahorcado/imagenes/${errores}.png`;
       const imagen = document.getElementById(`imagen`);
       imagen.src = source;
    }

    if(errores ==7){
        alert("PERDISTE, LA PALABRA ERA " + palabraSecreta)
        document.getElementById("palabraAdivinando").style.display = "none";
        document.getElementById("letra").style.display = "none";
        document.getElementById("botonComprobar").style.display = "none";
        document.getElementById("botonReinicio").style.display = "block";
    } else if(aciertos == palabraSecreta.length) {
        document.getElementById("botonReinicio").style.display = "block";
        document.getElementById("ganaste").style.display="block";
        document.getElementById("palabraAdivinando").style.display = "none";
        document.getElementById("letra").style.display = "none";
        document.getElementById("botonComprobar").style.display = "none";
        document.getElementById("imagen").style.display="none";
    }
}








