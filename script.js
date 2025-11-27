let nombre = "";
const listaDeSis = ["si", "SI", "Si", "sI", "sí", "SÍ", "Sí", "sÍ", "see", "s", "S", "YES", "Yes", "yes", "chi", "Chi", "CHI"];
const listaDeNos = ["NO", "No", "no", "nO", "nop", "noo", "Noo", "ni", "nou", "n", "N", "ño", "Ño", "ÑO"];
const funWords = ["xd", "xD", ":v", "8)"];
const komolosupo = ["komolosupo", "komolosupo?", "komo lo supo", "komo lo supo :v", "komo lo supo?"];

const principal = document.getElementById("principal");

let estado = "pedir_nombre";
let contadorNumero = 0;

function print(texto){
    document.getElementById("preguntarNombre").innerHTML += texto + "<br>";
}

function pertenece(valor, lista){
    return lista.includes(valor.toLowerCase());
}


print("Antes de empezar, me decis tu nombre? ");

function procesar(){
    const entrada = document.getElementById("entrada");
    const texto = entrada.value.trim();
    entrada.value = ""; //esto lo limpia!!!

    if (estado === "pedir_nombre"){
        nombre = texto;
        document.getElementById("preguntarNombre").innerHTML = "";
        print(`Ahora si, hola ${nombre}!`);
        print("te voy a pedir que pienses en un numero del 0 al 63 (?) (no me lo digas)");
        print("despues te voy a hacer unas preguntas, vos responde solo SI o NO");
        print("dale?");
        estado = "confirmacion";
        return;
    }

    if (estado === "confirmacion"){
        if (pertenece(texto, listaDeSis)){
            document.getElementById("principal").style.display = "none";
            document.getElementById("carton1").style.display = "block";
            estado = "primer_carton";
            return;
        } else if (pertenece(texto, listaDeNos)){
            print(":((");
            return;
        } else if (pertenece(texto, funWords)){
            print("dale, pajero");
            return;
        } else{
            print("no me dijiste nada...");
        }
    }
}

function procesarCarton1(){responderCarton("carton1", "carton2", 1);}
function procesarCarton2(){responderCarton("carton2", "carton3", 2);}
function procesarCarton3(){responderCarton("carton3", "carton4", 4);}
function procesarCarton4(){responderCarton("carton4", "carton5", 8);}
function procesarCarton5(){responderCarton("carton5", "carton6", 16);}
function procesarCarton6(){responderCarton("carton6", "fin", 32, true);}

function responderCarton(actual, siguiente, valor, esUltimo = false){
    const input = document.querySelector(`#${actual} input`);
    const texto = input.value.trim();
    input.value = "";

    if (pertenece(texto, listaDeSis)){
        contadorNumero += valor;
    }

    //ojoo
    else if (!pertenece(texto, listaDeNos)){
        alert("no me dijiste nada...")
        return
    }

    document.getElementById(actual).style.display = "none";

    if (esUltimo){
        document.getElementById("fin").style.display = "block";
        document.getElementById("resultado").textContent = `tu numero era ${contadorNumero} :))`
    }

    else {
        document.getElementById(siguiente).style.display = "block"
    }
}
   