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

  document.getElementById('card1').disabled = true;
  document.getElementById('card2').disabled = true;
  document.getElementById('card3').disabled = true;
  document.getElementById('card4').disabled = true;
  document.getElementById('card5').disabled = true;
  document.getElementById('card6').disabled = true;
  document.getElementById('card7').disabled = true;
  document.getElementById('card8').disabled = true;

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


  var BuildersRR = xmlDoc.getElementsByTagName("BuildersR")[0].childNodes[0].nodeValue;
  var BricksRR = xmlDoc.getElementsByTagName("BricksR")[0].childNodes[0].nodeValue;
  var SoldiersRR = xmlDoc.getElementsByTagName("SoldiersR")[0].childNodes[0].nodeValue;
  var WeaponsRR = xmlDoc.getElementsByTagName("WeaponsR")[0].childNodes[0].nodeValue;
  var WizardsRR = xmlDoc.getElementsByTagName("WizardsR")[0].childNodes[0].nodeValue;
  var CrystalsRR = xmlDoc.getElementsByTagName("CrystalsR")[0].childNodes[0].nodeValue;

  var BuildersAdd = xmlDoc.getElementsByTagName("BuildersAdd")[0].childNodes[0].nodeValue;
  var BricksAdd = xmlDoc.getElementsByTagName("BricksAdd")[0].childNodes[0].nodeValue;
  var SoldiersAdd = xmlDoc.getElementsByTagName("SoldiersAdd")[0].childNodes[0].nodeValue;
  var WeaponsAdd = xmlDoc.getElementsByTagName("WeaponsAdd")[0].childNodes[0].nodeValue;
  var WizardsAdd = xmlDoc.getElementsByTagName("WizardsAdd")[0].childNodes[0].nodeValue;
  var CrystalsAdd = xmlDoc.getElementsByTagName("CrystalsAdd")[0].childNodes[0].nodeValue;
  var CastleAdd = xmlDoc.getElementsByTagName("CastleAdd")[0].childNodes[0].nodeValue;
  var WallsAdd = xmlDoc.getElementsByTagName("WallsAdd")[0].childNodes[0].nodeValue;

  var BuildersE = xmlDoc.getElementsByTagName("BuildersE")[0].childNodes[0].nodeValue;
  var BricksE = xmlDoc.getElementsByTagName("BricksE")[0].childNodes[0].nodeValue;
  var SoldiersE = xmlDoc.getElementsByTagName("SoldiersE")[0].childNodes[0].nodeValue;
  var WeaponsE = xmlDoc.getElementsByTagName("WeaponsE")[0].childNodes[0].nodeValue;
  var WizardsE = xmlDoc.getElementsByTagName("WizardsE")[0].childNodes[0].nodeValue;
  var CrystalsE = xmlDoc.getElementsByTagName("CrystalsE")[0].childNodes[0].nodeValue;
  var CastleE = xmlDoc.getElementsByTagName("CastleE")[0].childNodes[0].nodeValue;
  var WallsE = xmlDoc.getElementsByTagName("WallsE")[0].childNodes[0].nodeValue;
  var AttackE = xmlDoc.getElementsByTagName("AttackE")[0].childNodes[0].nodeValue;


  if(Count %2 == 0)
  {

    if((Number(BricksB) >= Number(BricksRR)) && (Number(WeaponsB) >= Number(WeaponsRR)) && (Number(CrystalsB) >= Number(CrystalsRR)))
    {
      BricksB = Number(BricksB) - Number(BricksRR);
      WeaponsB = Number(WeaponsB) - Number(WeaponsRR);
      CrystalsB = Number(CrystalsB) - Number(CrystalsRR);

      BuildersB = Number(BuildersB) + Number(BuildersAdd);
      BricksB = Number(BricksB) + Number(BricksAdd);
      SoldiersB = Number(SoldiersB) + Number(SoldiersAdd);
      WeaponsB = Number(WeaponsB) + Number(WeaponsAdd);
      WizardsB = Number(WizardsB) + Number(WizardsAdd);
      CrystalsB = Number(CrystalsB) + Number(CrystalsAdd);
      CastleB = Number(CastleB) + Number(CastleAdd);
      WallsB = Number(WallsB) + Number(WallsAdd);

      BuildersR = Number(BuildersR) + Number(BuildersE);
      BricksR = Number(BricksR) + Number(BricksE);
      SoldiersR = Number(SoldiersR) + Number(SoldiersE);
      WeaponsR = Number(WeaponsR) + Number(WeaponsE);
      WizardsR = Number(WizardsR) + Number(WizardsE);
      CrystalsR = Number(CrystalsR) + Number(CrystalsE);
      CastelR = Number(CastleR) + Number(CastleE);
      WallsR = Number(WallsR) + Number(WallsE);

      WallsR = Number(WallsR) - Number(AttackE);
      if(Number(WallsR) < 0){
        CastleR = Number(CastleR) - Number(WallstR);
        Number(WallsR) = 0;
      }
    }else{
      alert("Not enought supplays Black\n BricksRR: "+BricksRR+ " BricksR: " + BricksB +"\nWeaponsRR: "+WeaponsRR + " WeaponsB: " + WeaponsB +"\nCrystalsRR: " + CrystalsRR + " CrystalsB: " + CrystalsB );
    }

  }else{

        if((Number(BricksR) >= Number(BricksRR)) && (Number(WeaponsR) >= Number(WeaponsRR)) && (Number(CrystalsR) >= Number(CrystalsRR)))
        {
          BricksR = Number(BricksR) - Number(BricksRR);
          WeaponsR = Number (WeaponsR) - Number (WeaponsRR);
          CrystalsR = Number (CrystalsR) - Number (CrystalsRR);

          BuildersR = Number(BuildersR) + Number(BuildersAdd);
          BricksR = Number(BricksR) + Number(BricksAdd);
          SoldiersR = Number(SoldiersR) + Number(SoldiersAdd);
          WeaponsR = Number(WeaponsR) + Number(WeaponsAdd);
          WizardsR = Number(WizardsR) + Number(WizardsAdd);
          CrystalsR = Number(CrystalsR) + Number(CrystalsAdd);
          CastleR = Number(CastleR) + Number(CastleAdd);
          WallsR = Number(WallsR) + Number(WallsAdd);

          BuildersB = Number(BuildersB) + Number(BuildersE);
          BricksB = Number(BricksB) + Number(BricksE);
          SoldiersB = Number(SoldiersB) + Number(SoldiersE);
          WeaponsB = Number(WeaponsB) + Number(WeaponsE);
          WizardsB = Number(WizardsB) + Number(WizardsE);
          CrystalsB = Number(CrystalsB) + Number(CrystalsE);
          CastleB = Number(CastleB) + Number(CastleE);
          WallsB = Number(WallsB) + Number(WallsE);

          WallsB = Number(WallsB) - Number(AttackE);
          if(Number(WallsB) < 0){
            CastleB = Number(CastleB) - Number(WallstR);
            Number(WallsR) = 0;
          }
        }else{
          alert("Not enought supplays Red\n BricksRR: "+BricksRR+ " BricksR: " + BricksR +"\nWeaponsRR: "+WeaponsRR + " WeaponsR: " + WeaponsR +"\nCrystalsRR: " + CrystalsRR + " CrystalsR: " + CrystalsR );
        }
      }

      CountChange();
      Reload();
      RandomPicture();



}

function RandomPicture()
{
  img1 = Math.floor((Math.random() * 27)+1);
  img2 = Math.floor((Math.random() * 27)+1);
  img3 = Math.floor((Math.random() * 27)+1);
  img4 = Math.floor((Math.random() * 27)+1);
  img5 = Math.floor((Math.random() * 27)+1);
  img6 = Math.floor((Math.random() * 27)+1);
  img7 = Math.floor((Math.random() * 27)+1);
  img8 = Math.floor((Math.random() * 27)+1);

  document.getElementById('card1').src = "cards/" + img1 + ".png";
  document.getElementById('card2').src = "cards/" + img2 + ".png";
  document.getElementById('card3').src = "cards/" + img3 + ".png";
  document.getElementById('card4').src = "cards/" + img4 + ".png";
  document.getElementById('card5').src = "cards/" + img5 + ".png";
  document.getElementById('card6').src = "cards/" + img6 + ".png";
  document.getElementById('card7').src = "cards/" + img7 + ".png";
  document.getElementById('card8').src = "cards/" + img8 + ".png";

  document.getElementById('card1').disabled = false;
  document.getElementById('card2').disabled = false;
  document.getElementById('card3').disabled = false;
  document.getElementById('card4').disabled = false;
  document.getElementById('card5').disabled = false;
  document.getElementById('card6').disabled = false;
  document.getElementById('card7').disabled = false;
  document.getElementById('card8').disabled = false;

}

function StartGame()
{
  BuildersB = 2;
  BricksB = 8;

  SoldiersB = 5;
  WeaponsB = 5;

  WizardsB = 6;
  CrystalsB = 7;

  CastleB = 20;
  WallsB = 40;

  BuildersR = 2;
  BricksR = 8;

  SoldiersR = 5;
  WeaponsR = 5;

  WizardsR = 6;
  CrystalsR = 7;

  CastleR = 20;
  WallsR = 40;
  document.getElementById('player').innerHTML = "Black";
  Reload();
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

function CountChange()
{
  if(Count %2 == 0){
      Count = 1;
      document.getElementById('player').innerHTML = "Red";
  }else{
      Count = 0;
      document.getElementById('player').innerHTML = "Black";
      }

}
