function selectMokepon(){
    if (inputHipodoge.checked){
        spanTuMokepon.innerHTML = inputHipodoge.id;
    }
    else if (inputCapipepo.checked){
        spanTuMokepon.innerHTML = inputCapipepo.id;
    }
    else if (inputRatigueya.checked){
        spanTuMokepon.innerHTML = inputRatigueya.id;
    }
    else if (inputLangotelvis.checked){
        spanTuMokepon.innerHTML = inputLangotelvis.id;
    }
    else if (inputTucapalma){
        spanTuMokepon.innerHTML = inputTucapalma.id;
    }
    else if(inputPydos){
        spanTuMokepon.innerHTML = inputPydos.id;
    }
    else{
        spanAlert.innerHTML = "Elige un mokepon, por favor"
    }

    if(inputHipodoge || inputCapipepo || inputRatigueya || inputLangotelvis || inputTucapalma || inputPydos){
        sectionSelectAttack.style.display = 'flex';
        sectionSelectMokepon.style.display = "none";
        sectionAlert.style.display = "none";
    }


    selectEnemyMokepon();
}

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}      

function selectEnemyMokepon(){
    let enemyRandom = random(1,6);
    let spanEnemyMokepon = document.getElementById("enemy-mokepon");

    if(enemyRandom == 1){
        enemyMokepon = "Hipodoge";
        spanEnemyMokepon.innerHTML = "Hipodoge"
    }
    else if(enemyRandom == 2){
        enemyMokepon = "Capipepo";
        spanEnemyMokepon.innerHTML = "Capipepo"
    }
    else if(enemyRandom == 3){
        enemyMokepon = "Ratigueya";
        spanEnemyMokepon.innerHTML = "Ratigueya"
    }
    else if(enemyRandom == 4){
        enemyMokepon = "Langotelvis";
        spanEnemyMokepon.innerHTML = "Langotelvis"
    }
    else if(enemyRandom == 5){
        enemyMokepon = "Tucapalma";
        spanEnemyMokepon.innerHTML = "Tucapalma"
    }
    else if(enemyRandom == 6){
        enemyMokepon = "Pydos";
        spanEnemyMokepon.innerHTML = "Pydos"
    }
}

function fireAttack(){
    attack = "Fuego 🔥🥵";
    enemyAttack()
}

function waterAttack(){
    attack = "Agua 💧💦";
    enemyAttack()
}

function earthAttack(){
    attack = "Tierra 🌱🌳";
    enemyAttack()
}

function enemyAttack(){
    let randomAttack = random(1,3)

    if(randomAttack == 1){
        theEnemyAttack = "Fuego 🔥🥵"
    }
    else if(randomAttack == 2){
        theEnemyAttack = "Agua 💧💦"
    }
    else if(randomAttack == 3){
        theEnemyAttack = "Tierra 🌱🌳"
    }
    combatResult();
    mensajeJuego();
    checkLives()
}

function mensajeJuego(){
    sectionMensajes.style.display = 'flex';        
    let sectionResultado = document.getElementById("resultado-ataque");
    let sectionAtaqueJugador = document.getElementById("ataque-jugador");
    let sectionAtaqueEnemigo = document.getElementById("ataque-enemigo");
    
    let movimientoJugador = document.createElement("p");
    let movimientoEnemigo = document.createElement("p");

    sectionResultado.innerHTML = result;
    movimientoEnemigo.innerHTML = theEnemyAttack;
    movimientoJugador.innerHTML = attack;

    sectionAtaqueJugador.appendChild(movimientoJugador);
    sectionAtaqueEnemigo.appendChild(movimientoEnemigo);
} 

function mensajeFinal(){
    sectionMensajes.style.display = 'none'
    sectionReiniciar.style.display = 'flex';

    let parrafo = document.createElement("p");
    parrafo.innerHTML = finalResult;
    
    sectionReiniciar.appendChild(parrafo);

    buttonFire.disabled = true;
    buttonWater.disabled = true;
    buttonEarth.disabled = true;
}

function combatResult(){
    let spanLives = document.getElementById("lives");
    let spanEnemyLives = document.getElementById("enemy-lives");

    if(attack == theEnemyAttack) {
        result = "Empate"
    }
    else if((attack == "Fuego 🔥🥵" && theEnemyAttack == "Tierra 🌱🌳") || (attack == "Agua 💧💦" && theEnemyAttack == "Fuego 🔥🥵") || (attack == "Tierra 🌱🌳" && theEnemyAttack == "Agua 💧💦")){
        result = "Ganaste";
        enemylives--;
        spanEnemyLives.innerHTML = enemylives
    }
    else {
        result = "Perdiste";
        lives--;
        spanLives.innerHTML = lives
    }
}

function checkLives(){
    if(enemylives == 0) {
        finalResult = "El enemigo se ha quedado sin vidas. ¡Felicitaciones, ganaste!✨🎉🙌";
        mensajeFinal()
    }
    else if(lives == 0) {
        finalResult = "Te quedaste sin vidas. ¡Perdiste! 😥💀👎";
        mensajeFinal()
    }
}

function reload(){
    location.reload()
}

class Mokepon {
    constructor(name, look, life){
        this.name = name;
        this.look = look;
        this.life = life;
        this.attacks = []
    }
}

let mokepones = [];
let hipodoge = new Mokepon("Hipodoge", "mokepons_mokepon_hipodoge_attack.png", 100);
let capipepo = new Mokepon("Capipepo", "mokepons_mokepon_capipepo_attack.png", 100);
let ratigueya = new Mokepon("Ratigueya", "mokepons_mokepon_ratigueya_attack.png", 100);
let langotelvis = new Mokepon("Langotelvis", "langotelvis.png", 100);
let tucapalma = new Mokepon("Tucapalma", "tucapalma.png", 100);
let pydos = new Mokepon("Pydos", "pydos.png", 100);

mokepones.push(hipodoge, capipepo, ratigueya, langotelvis, tucapalma, pydos);

hipodoge.attacks.push(
    { name: "💧", id: "buttonWater" },
    { name: "💧", id: "buttonWater" },
    { name: "💧", id: "buttonWater" },
    { name: "🔥", id: "buttonFire" },
    { name: "🌱", id: "buttonEarth" }
)
capipepo.attacks.push(
    { name: "💧", id: "buttonWater" },
    { name: "🔥", id: "buttonFire" },
    { name: "🌱", id: "buttonEarth" },
    { name: "🌱", id: "buttonEarth" },
    { name: "🌱", id: "buttonEarth" }
)
ratigueya.attacks.push(
    { name: "💧", id: "buttonWater" },
    { name: "🌱", id: "buttonEarth" },
    { name: "🔥", id: "buttonFire" },
    { name: "🔥", id: "buttonFire" },
    { name: "🔥", id: "buttonFire" }

)
langotelvis.attacks.push(
    { name: "💧", id: "buttonWater" },
    { name: "💧", id: "buttonWater" },
    { name: "🔥", id: "buttonFire" },
    { name: "🔥", id: "buttonFire" },
    { name: "🌱", id: "buttonEarth" }
)
tucapalma.attacks.push(
    { name: "💧", id: "buttonWater" },
    { name: "💧", id: "buttonWater" },
    { name: "🔥", id: "buttonFire" },
    { name: "🌱", id: "buttonEarth" },
    { name: "🌱", id: "buttonEarth" }
)
pydos.attacks.push(
    { name: "💧", id: "buttonWater" },
    { name: "🔥", id: "buttonFire" },
    { name: "🔥", id: "buttonFire" },
    { name: "🌱", id: "buttonEarth" },
    { name: "🌱", id: "buttonEarth" }
)

let optionMokepon;
const sectionCard = document.getElementById("card-container");

const sectionSelectAttack = document.getElementById("select-attack");
sectionSelectAttack.style.display = 'none';

const sectionReiniciar = document.getElementById("reiniciar");
sectionReiniciar.style.display = 'none';

const sectionMensajes = document.getElementById("mensajes");
sectionMensajes.style.display = 'none';

const sectionSelectMokepon = document.getElementById("select-mokepon");

const sectionAlert = document.getElementById("alert");


let lives = 3;
let enemylives = 3;
let result;
let finalResult;
let yourMokepon;
let enemyMokepon;
let attack;
let theEnemyAttack;
const buttonFire = document.getElementById("fire");
buttonFire.addEventListener("click", fireAttack);
const buttonWater = document.getElementById("water");
buttonWater.addEventListener("click", waterAttack);
const buttonEarth = document.getElementById("earth");
buttonEarth.addEventListener("click", earthAttack);
const buttonReload = document.getElementById("reload");
buttonReload.addEventListener("click", reload);

const buttonMokepon = document.getElementById("mokepon");
buttonMokepon.addEventListener("click", selectMokepon);

let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputLangotelvis;
let inputTucapalma;
let inputPydos;

const spanTuMokepon = document.getElementById("tu-mokepon");
const spanAlert = document.getElementById("alert");

spanYourAttack = document.getElementById("your-attack");

mokepones.forEach((mokepon) => {
    optionMokepon = `
    <input type="radio" name="Mokepon" id=${mokepon.name} />
    <label class="tarjeta-de-mokepon" for=${mokepon.name}>
        <p>${mokepon.name}</p>
        <img src=${mokepon.look} alt=${mokepon.name}></label><br/>
    `
    sectionCard.innerHTML += optionMokepon;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    inputLangotelvis = document.getElementById("Langotelvis");
    inputTucapalma = document.getElementById("Tucapalma");
    inputPydos = document.getElementById("Pydos");
})


