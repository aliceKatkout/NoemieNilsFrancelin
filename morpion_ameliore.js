function setup() {
  createCanvas(660, 660);
  background(225);
  {
  fill(102);
  rect(0, 210.83, 733.33, 18.33);
  }
  {
  fill(102);
  rect(0, 430.33, 733.33, 18.33);
  }
  {
  fill(102);
  rect(430.33, 0, 18.33, 733.33);
  }
  {
  fill(102);
  rect(210.83, 0, 18.33, 733.33);
  }
  }



var Tableau =[true, true, true, true, true, true, true, true, true]
if (Tableau == [false, false, false, false, false, false, false, false,false]) {
  
}

var pair = true;

//if pair ==false, pair = true, else pair = fals
function mousePressed() {
  let taille = (80);

  if (pmouseX<220 && pmouseY<220 && Tableau[0]==true){
    if (pair == true){
      fill('red');
      ellipse(110, 110, taille);
      pair = false;
    }
    else {
      fill('blue');
      square(70, 70, taille);
      pair=true;
    }
    Tableau[0]= false;
  }

if (pmouseX<440 && pmouseX>220 && pmouseY<220 && Tableau[1]==true){
  if (pair==true){
    fill('red');
    ellipse(330, 110, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(290, 70, taille);
    pair=true;
  }
  Tableau[1]= false;
}

if (pmouseX>440 && pmouseY<220 && Tableau[2]==true){
  if (pair==true){
    fill('red');
    ellipse(550, 110, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(510, 70, taille);
    pair=true;
  }
  Tableau[2]=false;
}

if (pmouseX<220 && pmouseY>220 && pmouseY<440 && Tableau[3]==true){
  if (pair==true){
    fill('red');
    ellipse(110, 330, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(70, 290, taille);
    pair=true;
  }
  Tableau[3]= false;
}

if (pmouseX>220 && pmouseY<440 && pmouseX<440 && pmouseY>220 && Tableau[4]==true){
  if (pair==true){
    fill('red');
    ellipse(330, 330, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(290, 290, taille);
    pair=true;
  }
  Tableau[4]=false;
}

if (pmouseX>440 && pmouseY>220 && pmouseY<440 && Tableau[5]==true) {
  if (pair==true){
    fill('red');
    ellipse(550, 330, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(510, 290, taille);
    pair=true;
  }
  Tableau[5]=false;
}

if (pmouseX<220 && pmouseY>440 && Tableau[6]==true) {
  if (pair==true){
    fill('red');
    ellipse(110, 550, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(70, 510, taille);
    pair=true;
  }
  Tableau[6]=false;
}

if (pmouseX>220 && pmouseY>440 && pmouseX<440 && Tableau[7]==true){
  if(pair==true){
    fill('red');
    ellipse(110, 330, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(290, 510, taille);
    pair=true;
  }
  Tableau[7]=false;
}

if (pmouseX>440 && pmouseY>440 && Tableau[8]==true){
  if(pair==true){
    fill('red');
    ellipse(550, 550, taille);
    pair=false;
  }
  else {
    fill('blue');
    square(510, 510, taille);
    pair=true;
  }
  Tableau[8]=false;
}
}
