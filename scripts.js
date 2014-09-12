var BuildersB;
var BricksB;

var SoldiersB;
var WeaponsB;

var WizardsB;
var CrystalsB;

var CastleB;
var WallsB;

var BuildersR;
var BricksR;

var SoldiersR;
var WeaponsR;

var WizardsR;
var CrystalsR;

var CastleR;
var WallsR;

var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;

var Count = 0;

function Card(x)
{
  //disable buttons
  document.getElementById('card1').disabled = true;
  document.getElementById('card2').disabled = true;
  document.getElementById('card3').disabled = true;
  document.getElementById('card4').disabled = true;
  document.getElementById('card5').disabled = true;
  document.getElementById('card6').disabled = true;
  document.getElementById('card7').disabled = true;
  document.getElementById('card8').disabled = true;

  //connect to xml file
  var xml = "xml/" + x + ".xml";
  if(window.XMLHttpRequest)
    {
      xhttp = new XMLHttpRequest();
    }
  else
    {
      xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.open("GET",xml,false);
    xhttp.send();
    xmlDoc=xhttp.responseXML;

  //send value to do
  var item = xmlDoc.getElementsByTagName("item")[0];
  var value = xmlDoc.getElementsByTagName("value")[0];
  value = value.childNodes[0];
  BuildersF(value.nodeValue);
  //add new cards
  RandomPicture();
  //enable buttons
  document.getElementById('card1').disabled = false;
  document.getElementById('card2').disabled = false;
  document.getElementById('card3').disabled = false;
  document.getElementById('card4').disabled = false;
  document.getElementById('card5').disabled = false;
  document.getElementById('card6').disabled = false;
  document.getElementById('card7').disabled = false;
  document.getElementById('card8').disabled = false;

}

function RandomPicture()
{
  img1 = Math.floor((Math.random() * 14)+1);
  img2 = Math.floor((Math.random() * 14)+1);
  img3 = Math.floor((Math.random() * 14)+1);
  img4 = Math.floor((Math.random() * 14)+1);
  img5 = Math.floor((Math.random() * 14)+1);
  img6 = Math.floor((Math.random() * 14)+1);
  img7 = Math.floor((Math.random() * 14)+1);
  img8 = Math.floor((Math.random() * 14)+1);

  document.getElementById('card1').src = "obrazky/" + img1 + ".png";
  document.getElementById('card2').src = "obrazky/" + img2 + ".png";
  document.getElementById('card3').src = "obrazky/" + img3 + ".png";
  document.getElementById('card4').src = "obrazky/" + img4 + ".png";
  document.getElementById('card5').src = "obrazky/" + img5 + ".png";
  document.getElementById('card6').src = "obrazky/" + img6 + ".png";
  document.getElementById('card7').src = "obrazky/" + img7 + ".png";
  document.getElementById('card8').src = "obrazky/" + img8 + ".png";

}

function StartGame()
{
  BuildersB = 2;
  BricksB = 8;
  document.getElementById('BuildersB').innerHTML = BuildersB;
  document.getElementById('BricksB').innerHTML = BricksB;

  SoldiersB = 5;
  WeaponsB = 5;
  document.getElementById('SoldiersB').innerHTML = SoldiersB;
  document.getElementById('WeaponsB').innerHTML = WeaponsB;

  WizardsB = 6;
  CrystalsB = 7;
  document.getElementById('WizardsB').innerHTML = WizardsB;
  document.getElementById('CrystalsB').innerHTML = CrystalsB;

  CastleB = 20;
  WallsB = 40;
  document.getElementById('CastleB').innerHTML = CastleB;
  document.getElementById('WallsB').innerHTML = WallsB;

  BuildersR = 2;
  BricksR = 8;
  document.getElementById('BuildersR').innerHTML = BuildersR;
  document.getElementById('BricksR').innerHTML = BricksR;

  SoldiersR = 5;
  WeaponsR = 5;
  document.getElementById('SoldiersR').innerHTML = SoldiersR;
  document.getElementById('WeaponsR').innerHTML = WeaponsR;

  WizardsR = 6;
  CrystalsR = 7;
  document.getElementById('WizardsR').innerHTML = WizardsR;
  document.getElementById('CrystalsR').innerHTML = CrystalsR;

  CastleR = 20;
  WallsR = 40;
  document.getElementById('CastleR').innerHTML = CastleR;
  document.getElementById('WallsR').innerHTML = WallsR;

  RandomPicture();

}
function Reload()
{
  document.getElementById('BuildersB').innerHTML = BuildersB;
  document.getElementById('BricksB').innerHTML = BricksB;
  document.getElementById('SoldiersB').innerHTML = SoldiersB;
  document.getElementById('WeaponsB').innerHTML = WeaponsB;
  document.getElementById('WizardsB').innerHTML = WizardsB;
  document.getElementById('CrystalsB').innerHTML = CrystalsB;
  document.getElementById('CastleB').innerHTML = CastleB;
  document.getElementById('WallsB').innerHTML = WallsB;

  document.getElementById('BuildersR').innerHTML = BuildersR;
  document.getElementById('BricksR').innerHTML = BricksR;
  document.getElementById('SoldiersR').innerHTML = SoldiersR;
  document.getElementById('WeaponsR').innerHTML = WeaponsR;
  document.getElementById('WizardsR').innerHTML = WizardsR;
  document.getElementById('CrystalsR').innerHTML = CrystalsR;
  document.getElementById('CastleR').innerHTML = CastleR;
  document.getElementById('WallsR').innerHTML = WallsR;

}
function BuildersF(x)
{
  if(Count%2 == 0){
    BuildersB = BuildersB + Math.floor(x);
  }else{
    BuildersR = BuildersR + Math.floor(x);
    }
    Count++;
    Reload();
}
