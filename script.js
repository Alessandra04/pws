/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var randombomPlaats = 0;
var bomX = -600;
var bomY = 20 + randomVijandPlaats;
var bomSpeed = 15;
var bomRespawn = 5;
var bomGevangen = false;

var score = 0; // aantal behaalde score 
var speed = 0;

var bomSpawned = false;
var tijdGameOver = 0;
var tijdBomGevangen = 0;


function preload() {
  imgadventurine = loadImage('images.kristallen/adventurine.png');
  imgamethyst = loadImage('images.kristallen/amethyst.png');
  imgfluorite = loadImage('images.kristallen/fluorite.png');
  imggemstone = loadImage('images.kristallen/gemstone.png');
  imglapislazuli = loadImage('images.kristallen/lapislazuli.png');
  imgrosequartz = loadImage('images.kristallen/rosequartz.png');
  imgbom = loadImage('images.kristallen/bomb.png');
}




/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  var beweegBom = function() {
  
    if(score > 5){
       bomSpeed = 20;
    }
    if(score >  10){
        bomSpeed = 25;
        bomRespawn =3;
    }
    if(bomSpawned ) {
        bomX = bomX + bomSpeed;
   
  
    }
    if(score > 24){
        bomSpeed = 29;
        bomSpawn = 2;
    }
    if(score == 29){
        bomSpeed = 33;
    }
    if(score > 32){
        bomRespawn = 1;
    }
    if(score > 40){
        bomRespawn = 0;
    }
    if(score > 60){
        bomSpeed = 40;
    }
    if(score > 100){
        bomSpeed = 50;
    }
};

  // speler

};


/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  text ("score = " + score , 30, 110); // score tekenen 


  // vijand
  var tekenBom = function(x, y) {
    if(bomGeraakt == false && round(millis()/600) - tijdBomGevangen > bomRespawn ){
  fill("black");
  image (imgbom, 500, 100, 80, 80);
  bomSpawned = true;
  randomBomPlaats = Math.floor(Math.random() * 600);
    }else{
        bomSpawned = false;
    }
};

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);

  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(61, 58, 57);
  
  // halvce cirkel mijn
  fill(107, 99, 96);
  ellipse(640, 700, 1200, 1200);

  //brokstukken in mijn
  fill(36, 34, 33)
  rect(50, 50, 20, 20);
  rect(70, 90, 20, 20);
  rect(100, 40, 20, 20);
  rect(150, 300, 20, 20);
  rect(130, 250, 20, 20);
  rect(800, 20, 20, 20);
  rect(900, 70, 20, 20);
  rect(600, 40, 20, 20);
  rect(1000, 110, 20, 20);
  rect(400, 10, 20, 20);
  rect(300, 120, 20, 20);
  rect(1180, 400, 20, 20);
  rect(1200, 280, 20, 20);

  //ondergrond
  fill(43, 22, 7);
  rect(0, 700, 1400, 30)

  //afbeeldingen
  image(imgadventurine, 600, 100, 80, 80);
  image(imgamethyst, 600, 150, 60, 60);
  image(imgfluorite, 650, 100, 80, 80);
  image(imggemstone, 650, 150, 70, 70);
  image(imglapislazuli, 550, 100, 80, 80);
  image(imgrosequartz, 550, 150, 80, 80);
  image(imgbom, 500, 100, 80, 80);

  //hokje voor teller
  fill('grey');
  rect(1180, 30, 70, 70);

  //tekst game (crystal catcher)
  fill(225, 230, 96);
  textSize(40);
  textFont('courier');
  text('Crystal Catcher', 470, 40);
  


  

}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();

    if (checkBomGevangen()) {
      // punten erbij
      // nieuwe vijand maken
      score = score + 1;
      score = score + 0;
      bomY = Math.floor(Math.random() * 450);


    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
