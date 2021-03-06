$(document).ready(function() {
  $("button").hover(
  function() {
    $(this).addClass("highlight");
  },
  function() {
    $(this).removeClass("highlight");
  }
  );
});

$(document).ready(function(){
  $('#tutorialLink').on('click', 'button', function() {
    $('#tutorial').fadeToggle(400, "linear");    
  });
});
$(document).ready(function(){
  $('#testStatsLink').on('click', 'button', function() {
    $('#testStats').fadeToggle(400, "linear");    
  });
});
var startDate = new Date();
var hpStartDate = new Date();
var foodHp = 0;
var foodEnergy = 0;
var fighting = false;
var shop = [];
var tier = [ "1", "2", "3", "4", "5", "Food & Potions"];
var TierNumber = "";
var shopTier = 1;
var berserkScore = 5;
var invulnerableScore = 4;
var potionPrice = 100;
function ranInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
$(document).ready(function() {
if (document.getElementById("sellItems")!=null) {
document.getElementById("sellItems").style.visibility='hidden';
document.getElementById("useItems").style.visibility='hidden';
document.getElementById("buy").style.visibility='hidden';
document.getElementById("newStock").style.visibility='hidden'; 
document.getElementById("findItem").style.visibility='hidden';
document.getElementById("shopStock").style.visibility='hidden'; 
document.getElementById("shop_Tier").style.visibility='hidden';
} 
if (document.getElementById("attackMouse")!=null) {
document.getElementById("attackMouse").style.visibility='hidden';
document.getElementById("attackRat").style.visibility='hidden';
document.getElementById("attackDog").style.visibility='hidden';
document.getElementById("attackWolf").style.visibility='hidden';
document.getElementById("attackGoblin").style.visibility='hidden';
document.getElementById("attackOrc").style.visibility='hidden';
document.getElementById("attackOgre").style.visibility='hidden';
document.getElementById("berserkMouse").style.visibility='hidden';
document.getElementById("berserkRat").style.visibility='hidden';
document.getElementById("berserkDog").style.visibility='hidden';
document.getElementById("berserkWolf").style.visibility='hidden';
document.getElementById("berserkGoblin").style.visibility='hidden';
document.getElementById("berserkOrc").style.visibility='hidden';
document.getElementById("berserkOgre").style.visibility='hidden';
document.getElementById("invulnerableMouse").style.visibility='hidden';
document.getElementById("invulnerableRat").style.visibility='hidden';
document.getElementById("invulnerableDog").style.visibility='hidden';
document.getElementById("invulnerableWolf").style.visibility='hidden';
document.getElementById("invulnerableGoblin").style.visibility='hidden';
document.getElementById("invulnerableOrc").style.visibility='hidden';
document.getElementById("invulnerableOgre").style.visibility='hidden';
document.getElementById("close").style.visibility='hidden';
}
});
var mouse = {
  name: "Mouse",
  plural: "Mice",
  energyCost: 3,
  level: 1,
  hp: 6,
  maxHp: 6,
  str: 1,
  hit: 3,
  def: 2,
  dodge: 1,
  xpWin: 9,
  xpDraw: 5,
  xpLose: 3,
  //  dropTable: "lowDrop",
  realDifficulty: 1,
  difficulty: 1,
  defeats: 0,
  levelUps: 0,
  veteranCount: 5
};
var rat = {
  name: "Rat",
  plural: "Rats",
  energyCost: 4,
  level: 3,
  hp: 22,
  maxHp: 22,
  str: 5,
  hit: 6,
  def: 4,
  dodge: 3,
  xpWin: 15,
  xpDraw: 7,
  xpLose: 4,
  //  dropTable: "lowDrop",
  realDifficulty: 3,
  difficulty: 3,
  defeats: 0,
  levelUps: 0,
  veteranCount: 5
};
var dog = {
  name: "Dog",
  plural: "Dogs",
  energyCost: 5,
  level: 5,
  hp: 41,
  maxHp: 41,
  str: 8,
  hit: 9,
  def: 8,
  dodge: 6,
  xpWin: 21,
  xpDraw: 10,
  xpLose: 5,
  //  dropTable: "lowDrop",
  realDifficulty: 5,
  difficulty: 5,
  defeats: 0,
  levelUps: 0,
  veteranCount: 5
};
var wolf = {
  name: "Wolf",
  plural: "Wolves",
  level: 7,
  energyCost: 6,
  hp: 68,
  maxHp: 68,
  str: 14,
  hit: 12,
  def: 11,
  dodge: 12,
  xpWin: 27,
  xpDraw: 14,
  xpLose: 7,
  //  dropTable: "lowDrop",
  realDifficulty: 8,
  difficulty: 8,
  defeats: 0,
  levelUps: 0,
  veteranCount: 5
};
var goblin = {
  name: "Goblin",
  plural: "Goblins",
  level: 10,
  energyCost: 7,
  hp: 85,
  maxHp: 85,
  str: 21,
  hit: 19,
  def: 17,
  dodge: 17,
  xpWin: 39,
  xpDraw: 19,
  xpLose: 9,
  //  dropTable: "medDrop",
  realDifficulty: 11,
  difficulty: 11,
  defeats: 0,
  levelUps: 0,
  veteranCount: 5
};
var orc = {
  name: "Orc",
  plural: "Orcs",
  level: 13,
  energyCost: 8,
  hp: 99,
  maxHp: 99,
  str: 27,
  hit: 28,
  def: 24,
  dodge: 24,
  xpWin: 53,
  xpDraw: 26,
  xpLose: 13,
  //  dropTable: "medDrop",
  realDifficulty: 14,
  difficulty: 14,
  defeats: 0,
  levelUps: 0,
  veteranCount: 5
};
var ogre = {
  name: "Ogre",
  plural: "Ogres",
  level: 16,
  energyCost: 9,
  hp: 110,
  maxHp: 110,
  str: 38,
  hit: 32,
  def: 37,
  dodge: 29,
  xpWin: 67,
  xpDraw: 34,
  xpLose: 17,
  //  dropTable: "medDrop",
  realDifficulty: 17,
  difficulty: 17,
  defeats: 0,
  levelUps: 0,
  veteranCount: 5
};
function stats() {
  mouseStats.innerHTML = mouse.name + ", " + mouse.str + ", " + mouse.hit + ", " + mouse.def + ", " + mouse.dodge + ", " + mouse.maxHp + ", " + mouse.xpWin + ", " + mouse.difficulty + ", " + ((mouse.levelUps*5)+mouse.defeats);
  ratStats.innerHTML = rat.name + ", " + rat.str + ", " + rat.hit + ", " + rat.def + ", " + rat.dodge + ", " + rat.maxHp + ", " + rat.xpWin + ", " + rat.difficulty + ", " + ((rat.levelUps*5)+rat.defeats);
  dogStats.innerHTML = dog.name + ", " + dog.str + ", " + dog.hit + ", " + dog.def + ", " + dog.dodge + ", " + dog.maxHp + ", " + dog.xpWin + ", " + dog.difficulty + ", " + ((dog.levelUps*5)+dog.defeats);
  wolfStats.innerHTML = wolf.name + ", " + wolf.str + ", " + wolf.hit + ", " + wolf.def + ", " + wolf.dodge + ", " + wolf.maxHp + ", " + wolf.xpWin + ", " + wolf.difficulty + ", " + ((wolf.levelUps*5)+wolf.defeats);
  goblinStats.innerHTML = goblin.name + ", " + goblin.str + ", " + goblin.hit + ", " + goblin.def + ", " + goblin.dodge + ", " + goblin.maxHp + ", " + goblin.xpWin + ", " + goblin.difficulty + ", " + ((goblin.levelUps*5)+goblin.defeats);
  orcStats.innerHTML = orc.name + ", " + orc.str + ", " + orc.hit + ", " + orc.def + ", " + orc.dodge + ", " + orc.maxHp + ", " + orc.xpWin + ", " + orc.difficulty + ", " + ((orc.levelUps*5)+orc.defeats);
  ogreStats.innerHTML = ogre.name + ", " + ogre.str + ", " + ogre.hit + ", " + ogre.def + ", " + ogre.dodge + ", " + ogre.maxHp + ", " + ogre.xpWin + ", " + ogre.difficulty + ", " + ((ogre.levelUps*5)+ogre.defeats);
}

function showMouse() {
    $('.mouse').removeClass('noDisplay'); 
    $('.rat').addClass('noDisplay');
    $('.dog').addClass('noDisplay'); 
    $('.wolf').addClass('noDisplay');   
    $('.goblin').addClass('noDisplay');   
    $('.orc').addClass('noDisplay'); 
    $('.ogre').addClass('noDisplay'); 
}
function showRat() {
    $('.rat').removeClass('noDisplay'); 
    $('.mouse').addClass('noDisplay'); 
    $('.dog').addClass('noDisplay'); 
    $('.wolf').addClass('noDisplay');  
    $('.goblin').addClass('noDisplay');    
    $('.orc').addClass('noDisplay');    
    $('.ogre').addClass('noDisplay');
}
function showDog() {
    $('.dog').removeClass('noDisplay'); 
    $('.mouse').addClass('noDisplay'); 
    $('.rat').addClass('noDisplay');
    $('.wolf').addClass('noDisplay');   
    $('.goblin').addClass('noDisplay');
    $('.orc').addClass('noDisplay');   
    $('.ogre').addClass('noDisplay');      
}
function showWolf() {
    $('.wolf').removeClass('noDisplay'); 
    $('.mouse').addClass('noDisplay'); 
    $('.rat').addClass('noDisplay');
    $('.dog').addClass('noDisplay');  
    $('.goblin').addClass('noDisplay');  
    $('.orc').addClass('noDisplay');      
    $('.ogre').addClass('noDisplay');      
}
function showGoblin() {
    $('.goblin').removeClass('noDisplay'); 
    $('.mouse').addClass('noDisplay'); 
    $('.rat').addClass('noDisplay');
    $('.dog').addClass('noDisplay');  
    $('.wolf').addClass('noDisplay'); 
    $('.orc').addClass('noDisplay'); 
    $('.ogre').addClass('noDisplay');      
}
function showOrc() {
    $('.orc').removeClass('noDisplay'); 
    $('.mouse').addClass('noDisplay'); 
    $('.rat').addClass('noDisplay');
    $('.dog').addClass('noDisplay');  
    $('.wolf').addClass('noDisplay');  
    $('.goblin').addClass('noDisplay');  
    $('.ogre').addClass('noDisplay');      
}
function showOgre() {
    $('.ogre').removeClass('noDisplay'); 
    $('.mouse').addClass('noDisplay'); 
    $('.rat').addClass('noDisplay');
    $('.dog').addClass('noDisplay');  
    $('.wolf').addClass('noDisplay');  
    $('.goblin').addClass('noDisplay'); 
    $('.orc').addClass('noDisplay');      
}
  
function fight(enemy) {  
  this.updateStatus();
  fightResult.innerHTML = "";
  result.innerHTML = "";
  other.innerHTML = "";
  yourHP.innerHTML = "";
  enemyHP.innerHTML = "";
  if (this.points > 0) {
    result.innerHTML = "You should spend your attribute points before you fight.";
  }
  else {
    if (fighting) {
      result.innerHTML = "You are already in a fight, finish your current battle first.";
    }
    else if (this.energy < enemy.energyCost) {
      result.innerHTML = "You don't have enough energy to fight a " + enemy.name + ". You regain 1 energy every minute.";
    }
    else if (this.level < enemy.level) {
      result.innerHTML = "You need to be at least level " + enemy.level + " to fight a " + enemy.name + ". You should fight something else.";
    }
    else {
      if (this.energy === this.maxEnergy) {
        startDate = new Date();
      }
  fighting = true; //'close' button changes fighting to 'false'
  $('#wrapper').removeClass('noDisplay');
  $('#stock').addClass('noDisplay');
  $('#tutorial').fadeOut(100, "linear");
  $('#testStats').fadeOut(100, "linear");
  if (enemy.name=="Mouse") {    
    showMouse();
  }
  else if (enemy.name=="Rat") {    
    showRat();
  }   
  else if (enemy.name=="Dog") {    
    showDog();
  }  
  else if (enemy.name=="Wolf") {    
    showWolf();
  }  
  else if (enemy.name=="Goblin") {    
    showGoblin();
  }  
  else if (enemy.name=="Orc") {    
    showOrc();
  }  
  else if (enemy.name=="Ogre") {    
    showOgre();
  }  
  enemyLevel();      
  enemy.hp = enemy.maxHp;
  document.getElementById("attack" + enemy.name).style.visibility='visible';
  this.energy -= enemy.energyCost;
  var yourDamageThisRound = 0;
  var enemyDamageThisRound = 0;
  var space = "<br/>";
  yourHP.innerHTML = "Your health: " + this.hp;
  enemyHP.innerHTML = enemy.name + " health: " + enemy.hp;
  var self = this;  
  function enemyLevel() {
    if ((enemy.defeats%5) === 0) {
      other.innerHTML = "The " + enemy.plural + " are growing wise to you. Be careful.";
    }
    else {
      other.innerHTML = "";
    } 
    while(enemy.defeats>=5) {       
      enemy.levelUps ++;
      enemy.defeats -= 5;
      enemy.realDifficulty += 0.5,
      enemy.difficulty = Math.floor(enemy.realDifficulty);      
      enemy.maxHp += 2 + Math.floor(enemy.maxHp/60);
      enemy.str = (enemy.str + 1) + Math.floor(enemy.str/25);
      enemy.hit = (enemy.hit + 1) + Math.floor(enemy.hit/25);
      enemy.def = (enemy.def + 1) + Math.floor(enemy.def/25);
      enemy.dodge = (enemy.dodge + 1) + Math.floor(enemy.dodge/25);
      enemy.xpWin = (enemy.xpWin + 1) + Math.floor(enemy.xpWin/45);
      enemy.xpDraw = (enemy.xpDraw + 1) + Math.floor(enemy.xpDraw/25);
      enemy.xpLose = (enemy.xpLose + 1) + Math.floor(enemy.xpLose/25);
      if (enemy.xpWin/enemy.energyCost<8 && enemy.levelUps>=enemy.veteranCount){
        enemy.veteranCount +=5;
        enemy.str ++;
        enemy.hit ++;
        enemy.def ++;
        enemy.dodge ++;
      }
      else if (enemy.xpWin/enemy.energyCost>=10 && enemy.levelUps>=enemy.veteranCount) {
        enemy.veteranCount +=2;
        enemy.str += 2;
        enemy.hit += 1;
        enemy.def += 1;
        enemy.dodge += 1;
        enemy.maxHp += 4;
      }
      else if (enemy.xpWin/enemy.energyCost>=8 && enemy.levelUps>=enemy.veteranCount) {
        enemy.veteranCount +=4;
        enemy.str += 2;
        enemy.hit += 2;
        enemy.def += 2;
        enemy.dodge += 2;
        enemy.maxHp += 2;
      }
    }
    console.log(enemy.name + ', s: ' + enemy.str + ', h: ' + enemy.hit + ', d: ' + enemy.def + ', e: ' + enemy.dodge + ', hp: ' + enemy.maxHp);
  }
  attack = function()  {
    var randomize = (Math.random(0,1) + 0.25);
    var score = (self.luck/10)/randomize; 
    highRoll = Math.floor(enemy.level/3) + 4;
//    scaler = Math.floor(enemy.level/5);
    enemyRoll = ranInt(1, highRoll);
    yourRoll = ranInt(1, highRoll) + score;
    mitigate = 1-((enemy.def + enemyRoll)/(self.str + yourRoll));
    enemyMitigate = 1-((self.def + yourRoll)/(enemy.str + enemyRoll))
    if (mitigate<0.1){
      yourDamageThisRound = Math.round((self.str + yourRoll) * ((self.hit + yourRoll)/(enemy.dodge + enemyRoll)) * 0.1)
    }
    else {
      yourDamageThisRound = Math.round((self.str + yourRoll) * ((self.hit + yourRoll)/(enemy.dodge + enemyRoll)) * mitigate)
    };
/*      if (((self.str + yourRoll) - (enemy.def + enemyRoll)) > 0){
        if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) > (2 + scaler)) {
          yourDamageThisRound = 2* ((self.str + yourRoll) - (enemy.def + enemyRoll));         
        }
        else if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) < 1) {
          yourDamageThisRound = 0;          
        }
        else {
          yourDamageThisRound = (self.str + yourRoll) - (enemy.def + enemyRoll);         
        }
      }
      else {
        if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) > (2 + scaler)) {
          yourDamageThisRound = 2 + scaler;         
        }
        else if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) < 1) {
          yourDamageThisRound = 0;      
        }
        else {
          yourDamageThisRound = 1;          
        }
      }*/
  if (yourDamageThisRound>=10) {
    $('#hit').css('left', '510px');
  }
  else {
    $('#hit').css('left', '525px');  
  }      
  hit.innerHTML = " " + yourDamageThisRound;   
  enemy.hp -= yourDamageThisRound; 
  enemyHP.innerHTML = enemy.name + " health: " + enemy.hp;
  if (enemyMitigate<0.1){
    enemyDamageThisRound = Math.round((enemy.str + enemyRoll) * ((enemy.hit + enemyRoll)/(self.dodge + yourRoll)) * 0.1)
    }
  else {
    enemyDamageThisRound = Math.round((enemy.str + enemyRoll) * ((enemy.hit + enemyRoll)/(self.dodge + yourRoll)) * enemyMitigate)
  };
  /*      if (((enemy.str + enemyRoll) - (self.def + yourRoll)) > 0 ){
        if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) > (2 + scaler)) {
          enemyDamageThisRound = 2* ((enemy.str + enemyRoll) - (self.def + yourRoll));          
        }
        else if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) < 1) {
          enemyDamageThisRound = 0;         
        }
        else {
          enemyDamageThisRound = (enemy.str + enemyRoll) - (self.def + yourRoll);         
        }
      }
      else {
        if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) > (2 + scaler)) {
          enemyDamageThisRound = (2 + scaler);         
        }
        else if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) < 1) {
          enemyDamageThisRound = 0;         
        }
        else {
          enemyDamageThisRound = 1;          
        } 
      }*/
  if (enemyDamageThisRound>=10) {
    $('#enemyhit').css('left', '410px');
  }
  else {
    $('#enemyhit').css('left', '425px');  
  }         
  enemyhit.innerHTML = enemyDamageThisRound;
  if (this.hp === this.maxHp && enemyDamageThisRound>0) {
        hpStartDate = new Date();
      }  
  self.hp -= enemyDamageThisRound;
  yourHP.innerHTML = "Your health: " + self.hp;
  if (berserkScore > 0) {
    berserkScore--;  
  } 
  if (invulnerableScore > 0) {
    invulnerableScore--;   
  }  
  if (enemy.name === "Mouse" && berserkScore === 0) {
  document.getElementById("berserkMouse").style.visibility='visible';   
  } 
  if (enemy.name === "Rat" && berserkScore === 0) {
  document.getElementById("berserkRat").style.visibility='visible';  
  }  
  if (enemy.name === "Dog" && berserkScore === 0) {
  document.getElementById("berserkDog").style.visibility='visible';  
  }  
  if (enemy.name === "Wolf" && berserkScore === 0) {
  document.getElementById("berserkWolf").style.visibility='visible';  
  }      
  if (enemy.name === "Goblin" && berserkScore === 0) {
  document.getElementById("berserkGoblin").style.visibility='visible';  
  }  
  if (enemy.name === "Orc" && berserkScore === 0) {
  document.getElementById("berserkOrc").style.visibility='visible';  
  }  
  if (enemy.name === "Ogre" && berserkScore === 0) {
  document.getElementById("berserkOgre").style.visibility='visible';  
  }    
  if (enemy.name === "Mouse" && invulnerableScore === 0) {
  document.getElementById("invulnerableMouse").style.visibility='visible';  
  } 
  if (enemy.name === "Rat" && invulnerableScore === 0) {
  document.getElementById("invulnerableRat").style.visibility='visible';  
  }  
  if (enemy.name === "Dog" && invulnerableScore === 0) {
  document.getElementById("invulnerableDog").style.visibility='visible';  
  }  
  if (enemy.name === "Wolf" && invulnerableScore === 0) {
  document.getElementById("invulnerableWolf").style.visibility='visible';  
  }      
  if (enemy.name === "Goblin" && invulnerableScore === 0) {
  document.getElementById("invulnerableGoblin").style.visibility='visible';  
  }  
  if (enemy.name === "Orc" && invulnerableScore === 0) {
  document.getElementById("invulnerableOrc").style.visibility='visible';  
  }  
  if (enemy.name === "Ogre" && invulnerableScore === 0) {
  document.getElementById("invulnerableOgre").style.visibility='visible';  
  } 
    if (enemy.hp < 1 && self.hp > 0) {
      self.xp += enemy.xpWin;
      enemy.defeats ++;
      enemyLevel();
      document.getElementById('close').style.visibility='visible'; 
      self.lowDrop(enemy.difficulty); // need to amend drop method to take table and difficulty
      fightResult.innerHTML = "You win! You receive " + enemy.xpWin + " Experience Points and " + drop + "." + space + "You have " + self.hp + " Hit Points left and " + self.xp + " Experience Points.";
      self.updateStatus();
      document.getElementById("attack" + enemy.name).style.visibility='hidden';
      berserkScore = 5;
      invulnerableScore = 4; 
      // character.sendData();       
    }
    else if (enemy.hp < 1 && self.hp < 1) {
      fightResult.innerHTML = "The exhausted " + enemy.name + " lashes out with the last of it's strength, you have fought each other to a stalemate. You receive " + enemy.xpDraw + " Experience Points and pay 2 Energy for revival.";
      self.xp += enemy.xpDraw;
      document.getElementById('close').style.visibility='visible'; 
      self.updateStatus();
      document.getElementById("attack" + enemy.name).style.visibility='hidden';
      berserkScore = 5;
      invulnerableScore = 4; 
      // character.sendData();
       
    }
    else if (self.hp < 1 && enemy.hp > 0) {
      fightResult.innerHTML = "You lose! You receive " + enemy.xpLose + " Experience Points and pay 2 Energy for revival.";
      self.xp += enemy.xpLose;
      document.getElementById('close').style.visibility='visible'; 
      self.updateStatus();
      document.getElementById("attack" + enemy.name).style.visibility='hidden';
      berserkScore = 5;
      invulnerableScore = 4;   
      // character.sendData();         
     }
  };
    berserk = function()  {
    $('.eye').css('background-color', 'red'); 
    var randomize = (Math.random(0,1) + 0.2);
    var score = (self.luck/10)/randomize; 
    var berserkModifier = 2 + Math.floor(0.46*((self.str + self.hit + self.luck) / 3)) 
    highRoll = Math.floor(enemy.level/3) + 4;
//    scaler = Math.floor(enemy.level/5);
    enemyRoll = ranInt(1, highRoll);
    yourRoll = ranInt(1, highRoll) + score;
    mitigate = 1-((enemy.def + enemyRoll)/(self.str + yourRoll + berserkModifier));
    enemyMitigate = 1-((self.def + yourRoll)/(enemy.str + enemyRoll))
    if (mitigate<0.1){
      yourDamageThisRound = Math.round((self.str + yourRoll + berserkModifier) * ((self.hit + yourRoll + berserkModifier)/(enemy.dodge + enemyRoll)) * 0.1)
    }
    else {
      yourDamageThisRound = Math.round((self.str + yourRoll + berserkModifier) * ((self.hit + yourRoll + berserkModifier)/(enemy.dodge + enemyRoll)) * mitigate)
    };   
/*      if (((self.str + yourRoll + berserkModifier) - (enemy.def + enemyRoll)) > 0){
        if ((self.hit + yourRoll + berserkModifier) - (enemy.dodge + enemyRoll) > (2 + scaler)) {
          yourDamageThisRound = 2* ((self.str + yourRoll + berserkModifier) - (enemy.def + enemyRoll));         
        }
        else if ((self.hit + yourRoll + berserkModifier) - (enemy.dodge + enemyRoll) < 1) {
          yourDamageThisRound = 0;          
        }
        else {
          yourDamageThisRound = (self.str + yourRoll + berserkModifier) - (enemy.def + enemyRoll);         
        }
      }
      else {
        if ((self.hit + yourRoll + berserkModifier) - (enemy.dodge + enemyRoll) > (2 + scaler)) {
          yourDamageThisRound = 2 + scaler;         
        }
        else if ((self.hit + yourRoll + berserkModifier) - (enemy.dodge + enemyRoll) < 1) {
          yourDamageThisRound = 0;      
        }
        else {
          yourDamageThisRound = 1;          
        }
      }*/
  if (yourDamageThisRound>=10) {
    $('#hit').css('left', '510px');
  }
  else {
    $('#hit').css('left', '525px');  
  }    
  hit.innerHTML = yourDamageThisRound;   
  enemy.hp -= yourDamageThisRound; 
  enemyHP.innerHTML = enemy.name + " health: " + enemy.hp;
  if (enemyMitigate<0.1){
    enemyDamageThisRound = Math.round((enemy.str + enemyRoll) * ((enemy.hit + enemyRoll)/(self.dodge + yourRoll)) * 0.1)
    }
  else {
    enemyDamageThisRound = Math.round((enemy.str + enemyRoll) * ((enemy.hit + enemyRoll)/(self.dodge + yourRoll)) * enemyMitigate)
  };
    /*      if (((enemy.str + enemyRoll) - (self.def + yourRoll)) > 0 ){
        if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) > (2 + scaler)) {
          enemyDamageThisRound = 2* ((enemy.str + enemyRoll) - (self.def + yourRoll));          
        }
        else if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) < 1) {
          enemyDamageThisRound = 0;         
        }
        else {
          enemyDamageThisRound = (enemy.str + enemyRoll) - (self.def + yourRoll);         
        }
      }
      else {
        if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) > (2 + scaler)) {
          enemyDamageThisRound = (2 + scaler);         
        }
        else if ((enemy.hit + enemyRoll) - (self.dodge + yourRoll) < 1) {
          enemyDamageThisRound = 0;         
        }
        else {
          enemyDamageThisRound = 1;          
        } 
      }*/
  if (enemyDamageThisRound>=10) {
    $('#enemyhit').css('left', '410px');
  }
  else {
    $('#enemyhit').css('left', '425px');  
  }     
  enemyhit.innerHTML = enemyDamageThisRound;
  if (this.hp === this.maxHp && enemyDamageThisRound>0) {
        hpStartDate = new Date();
      }  
  self.hp -= enemyDamageThisRound;
  yourHP.innerHTML = "Your health: " + self.hp;
  berserkScore = 4;
  document.getElementById("berserk" + enemy.name).style.visibility='hidden';  
    if (enemy.hp < 1 && self.hp > 0) {
      self.xp += enemy.xpWin;
      enemy.defeats ++;
      enemyLevel();
      document.getElementById('close').style.visibility='visible'; 
      self.lowDrop(enemy.difficulty); // need to amend drop method to take table and difficulty
      fightResult.innerHTML = "You win! You receive " + enemy.xpWin + " Experience Points and " + drop + "." + space + "You have " + self.hp + " Hit Points left and " + self.xp + " Experience Points.";
      self.updateStatus();
      document.getElementById("attack" + enemy.name).style.visibility='hidden';
      berserkScore = 5;
      invulnerableScore = 4;
      // character.sendData();             
    }
    else if (enemy.hp < 1 && self.hp < 1) {
      fightResult.innerHTML = "The exhausted " + enemy.name + " lashes out with the last of it's strength, you have fought each other to a stalemate. You receive " + enemy.xpDraw + " Experience Points and pay 2 Energy for revival.";
      self.xp += enemy.xpDraw;
      document.getElementById('close').style.visibility='visible'; 
      self.updateStatus();
      document.getElementById("attack" + enemy.name).style.visibility='hidden';
      berserkScore = 5;
      invulnerableScore = 4;
      // character.sendData();       
    }
    else if (self.hp < 1 && enemy.hp > 0) {
      fightResult.innerHTML = "You lose! You receive " + enemy.xpLose + " Experience Points and pay 2 Energy for revival.";
      self.xp += enemy.xpLose;
      document.getElementById('close').style.visibility='visible'; 
      self.updateStatus();
      document.getElementById("attack" + enemy.name).style.visibility='hidden';
      berserkScore = 5;
      invulnerableScore = 4; 
      // character.sendData();             
     }
  };
  
    
  invulnerable = function()  {
    $('#shield').css({'width': '150px', 'height': '150px'});  
    var randomize = (Math.random(0,1) + 0.2);
    var score = (self.luck/10)/randomize; 
    highRoll = Math.floor(enemy.level/3) + 4;
//    scaler = Math.floor(enemy.level/5);
    enemyRoll = ranInt(1, highRoll);
    yourRoll = ranInt(1, highRoll) + score;
    mitigate = 1-((enemy.def + enemyRoll)/(self.str + yourRoll));
    enemyMitigate = 1-((self.def + yourRoll)/(enemy.str + enemyRoll))
    if (mitigate<0.1){
      yourDamageThisRound = Math.round((self.str + yourRoll) * ((self.hit + yourRoll)/(enemy.dodge + enemyRoll)) * 0.1)
    }
    else {
      yourDamageThisRound = Math.round((self.str + yourRoll) * ((self.hit + yourRoll)/(enemy.dodge + enemyRoll)) * mitigate)
    };
    /*      if (((self.str + yourRoll) - (enemy.def + enemyRoll)) > 0){
        if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) > (2 + scaler)) {
          yourDamageThisRound = 2* ((self.str + yourRoll) - (enemy.def + enemyRoll));         
        }
        else if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) < 1) {
          yourDamageThisRound = 0;          
        }
        else {
          yourDamageThisRound = (self.str + yourRoll) - (enemy.def + enemyRoll);         
        }
      }
      else {
        if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) > (2 + scaler)) {
          yourDamageThisRound = 2 + scaler;         
        }
        else if ((self.hit + yourRoll) - (enemy.dodge + enemyRoll) < 1) {
          yourDamageThisRound = 0;      
        }
        else {
          yourDamageThisRound = 1;          
        }
      } */
  if (yourDamageThisRound>=10) {
    $('#hit').css('left', '510px');
  }
  else {
    $('#hit').css('left', '525px');  
  }     
  hit.innerHTML = yourDamageThisRound;  
  enemy.hp -= yourDamageThisRound; 
  enemyHP.innerHTML = enemy.name + " health: " + enemy.hp;
  enemyDamageThisRound = 0; 
  enemyhit.innerHTML = enemyDamageThisRound;
  if (this.hp === this.maxHp && enemyDamageThisRound>0) {
        hpStartDate = new Date();
      }  
  self.hp -= enemyDamageThisRound;
  yourHP.innerHTML = "Your health: " + self.hp;
  invulnerableScore = 3;
  document.getElementById("invulnerable" + enemy.name).style.visibility='hidden';     
    if (enemy.hp < 1 && self.hp > 0) {
      self.xp += enemy.xpWin;
      enemy.defeats ++;
      enemyLevel();
      document.getElementById('close').style.visibility='visible'; 
      self.lowDrop(enemy.difficulty); // need to amend drop method to take table and difficulty
      fightResult.innerHTML = "You win! You receive " + enemy.xpWin + " Experience Points and " + drop + "." + space + "You have " + self.hp + " Hit Points left and " + self.xp + " Experience Points.";
      self.updateStatus();
      document.getElementById("attack" + enemy.name).style.visibility='hidden';
      berserkScore = 5;
      invulnerableScore = 4;    
      // character.sendData();          
    }    
  };     
  }
  }
}
function updateStatus() {
  this.updateTime();
  this.healthRegen();
  this.checkLevel();
  this.equipDef = this.chestDef + this.legDef + this.helmDef;
  this.equipDodge = this.shieldDodge + this.bootDodge;
  this.str = this.baseStr + this.equipStr;
  this.hit = this.baseHit + this.equipHit;
  this.def = this.baseDef + this.equipDef;
  this.dodge = this.baseDodge + this.equipDodge; 
  this.luck = this.baseLuck + this.equipLuck;
  this.maxHp = this.equipHp + this.baseMaxHp;
  if (this.hp <= 0) {
    this.hp = this.maxHp;
    if (this.energy > 1) {
      this.energy -= 2;
    }
    else {
      (this.energy = 0);
    }
  }
  display_HP.innerHTML = "Health: " + this.hp + "/" + this.maxHp;
  display_energy.innerHTML = "Energy: " + this.energy + "/" + this.maxEnergy;
  display_Xp.innerHTML = "Experience Points: " + this.xp;
  display_NextLevelAt.innerHTML = "Next Level at: " + this.nextLevelXp;
  display_Gold.innerHTML = "Gold: " + this.gold;  
  if (document.querySelector('#level_value')!=null) {
  display_level.innerHTML = "Your level is " + this.level + ".";
  display_strength.innerHTML = "You have " + this.str + " Strength.";
  display_hit.innerHTML = "You have " + this.hit + " Accuracy.";
  display_def.innerHTML = "You have " + this.def + " Defence.";
  display_dodge.innerHTML = "You have " + this.dodge + " Evade.";
  display_luck.innerHTML = "You have " + this.luck + " Luck.";
  display_points.innerHTML = "You have " + this.points + " Attribute Points to  spend.";
  display_Equipment.innerHTML = "Equipment:" + this.equipment;
  display_Weapon.innerHTML = "Weapon: " + this.weapon;
  display_Chest.innerHTML = "Chest: " + this.chest;
  display_Shield.innerHTML = "Shield: " + this.shield;
  display_Legs.innerHTML = "Legs: " + this.legs;
  display_Helm.innerHTML = "Helm: " + this.helm;
  display_Gloves.innerHTML = "Gloves: " + this.gloves;
  display_Boots.innerHTML = "Boots: " + this.boots;
  display_Ring.innerHTML = "Ring: " + this.ring;
  display_Amulet.innerHTML = "Amulet: " + this.amulet; 
  }
  if (document.getElementById("berserkMouse")!=null) {
  document.getElementById("berserkMouse").style.visibility='hidden';
  document.getElementById("berserkRat").style.visibility='hidden';
  document.getElementById("berserkDog").style.visibility='hidden';
  document.getElementById("berserkWolf").style.visibility='hidden';
  document.getElementById("berserkGoblin").style.visibility='hidden';
  document.getElementById("berserkOrc").style.visibility='hidden';
  document.getElementById("berserkOgre").style.visibility='hidden';
  document.getElementById("invulnerableMouse").style.visibility='hidden';
  document.getElementById("invulnerableRat").style.visibility='hidden';
  document.getElementById("invulnerableDog").style.visibility='hidden';
  document.getElementById("invulnerableWolf").style.visibility='hidden';
  document.getElementById("invulnerableGoblin").style.visibility='hidden';
  document.getElementById("invulnerableOrc").style.visibility='hidden';
  document.getElementById("invulnerableOgre").style.visibility='hidden';  
  }  
}
function strPlus() {
  if (this.points > 0) {
    this.baseStr += 1;
    this.points -= 1;
    result.innerHTML = "Your Base Strength is increased to " + this.baseStr + ".";
    this.updateStatus();
    character.sendData();
  }
  else {
    result.innerHTML = "You don't have enough points, go and fight something.";
  }
}
function hitPlus() {
  if (this.points > 0) {
    this.baseHit += 1;
    this.points -= 1;
    result.innerHTML = "Your Base Accuracy is increased to " + this.baseHit + ".";
    this.updateStatus();
    character.sendData();
  }
  else {
    result.innerHTML = "You don't have enough points, go and fight something.";
  }
}
function defPlus() {
  if (this.points > 0) {
    this.baseDef += 1;
    this.points -= 1;
    result.innerHTML = "Your Base Defence is increased to " + this.baseDef + ".";
    this.updateStatus();
    character.sendData();
  }
  else {
    result.innerHTML = "You don't have enough points, go and fight something.";
  }
}
function dodgePlus() {
  if (this.points > 0) {
    this.baseDodge += 1;
    this.points -= 1;
    result.innerHTML = "Your Base Evade is increased to " + this.baseDodge + ".";
    this.updateStatus();
    character.sendData();
  }
  else {
    result.innerHTML = "You don't have enough points, go and fight something.";
  }
}
function luckPlus() {
  if (this.points > 0) {
    this.baseLuck += 1;
    this.points -= 1;
    result.innerHTML = "Your Base Luck is increased to " + this.baseLuck + ".";
    this.updateStatus();
    character.sendData();
  }
  else {
    result.innerHTML = "You don't have enough points, go and fight something.";
  }
}
function checkLevel() {
  if (this.xp >= this.nextLevelXp) {
  this.xp -= this.nextLevelXp;
  this.level ++;
  this.nextLevelXp = 6 + (this.level-1)*(27 + this.level);
  this.baseMaxHp = this.baseMaxHp + 5;
  this.maxHp = this.equipHp + this.baseMaxHp;  
  if (this.hp < this.maxHp) {
    this.hp = this.maxHp;
  }
  this.points = this.points + 2;
  if (this.level%10===0) {
    this.maxEnergy += 5;
  }
  else {
  this.maxEnergy ++;
  }
  if (this.energy < this.maxEnergy) {
    this.energy = this.maxEnergy;
  }  
  this.gold += 10;
  result.innerHTML = "Congratulations, you reach level " + this.level + " and claim 10 gold as a reward. <br/>You have " + this.points + " Attribute Points to spend and your Hit Points have increased to " + this.hp + ".<br/>You now have " + this.xp + " Experience Points. Next level at " + this.nextLevelXp + ".";
  this.updateStatus(); 
    }
}
function lowDrop(difficulty) {
  var luckNerf = Math.round(this.luck*0.75);
  var luckValue = 1;
  if (luckNerf<1) {
    luckValue = 1;
  }
  else {
    luckValue = luckNerf;
  }
  var dropRoll = luckValue + difficulty + ranInt(0, 9);
  switch(dropRoll) {
    case 2: drop = "1 gold coin";
        this.gold += 1;
        break;
    case 3: drop = "3 gold coins";
        this.gold += 3;
        break;
    case 4: drop = "a Crust of Bread";
        this.equipment[this.equipment.length] = " Bread";        
        break;
    case 5: drop = "4 gold coins";
        this.gold += 4;
        break; 
    case 6: drop = "a Crust of Bread and 2 gold coins";
        this.equipment[this.equipment.length] = " Bread";   
        this.gold += 2;     
        break;                  
    case 7: drop = "a Cloth Hat";
        this.equipment[this.equipment.length] = " Cloth Hat";
        break;      
    case 8: drop = "6 gold coins";
        this.gold += 6;        
        break; 
    case 9: drop = "8 gold coins";
        this.gold += 8;
        break;
    case 10: if (this.hp%2 === 0) {
        drop = "a Wooden Shield";
        this.equipment[this.equipment.length] = " Wooden Shield";
        }
        else {
          drop = "9 gold coins"
          this.gold += 9;
        }
        break;         
    case 11: drop = "a Crust of Bread and 6 gold coins";
        this.equipment[this.equipment.length] = " Bread";   
        this.gold += 6;     
        break;  
    case 12: drop = "a Piece of Cheese";
        this.equipment[this.equipment.length] = " Cheese";        
        break;                          
    case 13: drop = "a Wooden Shield";
        this.equipment[this.equipment.length] = " Wooden Shield";        
        break; 
    case 14: drop = "10 gold coins";
        this.gold += 10;
        break;           
    case 15: drop = "a Piece of Cheese and 2 gold coins";
        this.equipment[this.equipment.length] = " Cheese"; 
        this.gold += 2;    
        break;   
    case 16: drop = "a Wooden Training Sword";
        this.equipment[this.equipment.length] = " Wooden Sword";
        break;
    case 17: drop = "11 gold coins";
        this.gold += 11;
        break;        
    case 18: if (this.hp%2 === 0) {
        drop = "a Cloth Shirt";
        this.equipment[this.equipment.length] = " Cloth Shirt";
        }
        else {
          drop = "12 gold coins"
          this.gold += 12;
        }
        break;         
    case 19: drop = "a Piece of Cheese and 4 gold coins";
        this.equipment[this.equipment.length] = " Cheese"; 
        this.gold += 4;      
        break;         
    case 20: drop = "14 gold coins";
        this.gold += 14;
        break;        
    case 21: drop = "a Cloth Shirt";
        this.equipment[this.equipment.length] = " Cloth Shirt";        
        break;    
    case 22: drop = "16 gold coins";
        this.gold += 16;
        break; 
    case 23: drop = "a Leather Hat";
        this.equipment[this.equipment.length] = " Leather Hat";        
        break; 
    case 24: drop = "17 gold coins";
        this.gold += 17;
        break;         
    case 25: if (this.hp%2 === 0) {
        drop = "a Pair of Leather Gloves";
        this.equipment[this.equipment.length] = " Leather Gloves";
        }
        else {
          drop = "20 gold coins"
          this.gold += 20;
        }
        break;     
    case 26: drop = "a Leg of Ham";
        this.equipment[this.equipment.length] = " Ham";        
        break;
    case 27: drop = "20 gold coins";
        this.gold += 20;
        break; 
    case 28: if (this.hp%2 === 0) {
        drop = "a Pair of Leather Leggings";
        this.equipment[this.equipment.length] = " Leather Legs";
        }
        else {
          drop = "22 gold coins"
          this.gold += 22;
        }
        break;               
    case 29: drop = "a Leg of Ham and 3 gold coins";
        this.gold += 3;      
        this.equipment[this.equipment.length] = " Ham";        
        break;
    case 30: drop = "22 gold coins";
        this.gold += 22;
        break;               
    case 31: drop = "a Bone Helm and 6 gold coins";
        this.equipment[this.equipment.length] = " Bone Helm";
        this.gold += 6;
        break;       
    case 32: drop = "25 gold coins";
        this.gold += 25;
        break; 
    case 33: drop = "a Bone Club";
        this.equipment[this.equipment.length] = " Bone Club";
        break;
    case 34: drop = "27 gold coins";
        this.gold += 27;
        break;
    case 35: drop = "a Leg of Ham and 9 gold coins";
        this.gold += 9;      
        this.equipment[this.equipment.length] = " Ham";        
        break;                
    case 36: drop = "a Bone Chestplate";
        this.equipment[this.equipment.length] = " Bone Chestplate";        
        break;
    case 37: drop = "30 gold coins";
        this.gold += 30;
        break; 
    case 38: if (this.hp%2 === 0) {
        drop = "a Pair of Studded Gloves";
        this.equipment[this.equipment.length] = " Studded Gloves";
        }
        else {
          drop = "32 gold coins"
          this.gold += 32;
        }
        break;  
    case 39: drop = "33 gold coins";
        this.gold += 33;
        break; 
    case 40: drop = "a Pair of Studded Gloves";
        this.equipment[this.equipment.length] = " Studded Gloves";
        break;        
    case 41: drop = "34 gold coins";
        this.gold += 34;
        break; 
    case 42: if (this.hp%2 === 0) {
        drop = "a Kite Shield";
        this.equipment[this.equipment.length] = " Kite Shield";
        }
        else {
          drop = "35 gold coins"
          this.gold += 35;
        }
        break; 
    case 43: drop = "36 gold coins";
        this.gold += 36;
        break;                
    case 44: drop = "a Kite Shield";
        this.equipment[this.equipment.length] = " Kite Shield";        
        break; 
    case 45: drop = "two Legs of Ham";
        this.equipment[this.equipment.length] = " Ham";     
        this.equipment[this.equipment.length] = " Ham";        
        break;              
    case 46: drop = "38 gold coins";
        this.gold += 38;
        break; 
    case 47: drop = "a Pair of Studded Leggings";
        this.equipment[this.equipment.length] = " Studded Legs";
        break;     
    case 48: drop = "38 gold coins";   
        this.gold += 38;
        break; 
    case 49: drop = "40 gold coins";   
        this.gold += 40;
        break; 
    case 50: if (this.hp%2 === 0) {
        drop = "a Pair of Bronze Gloves";
        this.equipment[this.equipment.length] = " Bronze Gloves";
        }
        else {
          drop = "42 gold coins"
          this.gold += 42;
        }
        break; 
    case 51: if (this.hp%5 === 0) {
        drop = "a Bronze Chainmail Shirt";
        this.equipment[this.equipment.length] = " Bronze Chainmail";
        }
        else {
          drop = "44 gold coins"
          this.gold += 44;
        }
        break;
    case 52: drop = "a Pair of Bronze Gloves";
        this.equipment[this.equipment.length] = " Bronze Gloves";
        break; 
    default: if (this.hp%11 === 0) {
        drop = "a Power Potion";
        this.equipment[this.equipment.length] = " Power Potion";
        }
        else {
          drop = "50 gold coins"
          this.gold += 50;
        }
        break;      
  }
}

function updateTime() {
  if (this.energy < this.maxEnergy) {
    var updatedDate = new Date();
    currentDate = updatedDate.getTime();
    startNum = startDate.getTime(); 
    var difference = currentDate - startNum;
    if (difference >= 60000) {
    var minutes = difference/60000;
      if (this.energy + (Math.floor(minutes)) >= this.maxEnergy) {
        this.energy = this.maxEnergy;
      }
      else {
        this.energy += Math.floor(minutes);     
      }
      startDate = new Date();   
    }
  }
}
function healthRegen() {
  if (this.hp < this.maxHp) {
    var updatedDateHealth = new Date();
    currentDateHealth = updatedDateHealth.getTime();
    var startNumHealth = hpStartDate.getTime(); 
    var difference = currentDateHealth - startNumHealth;
    if (difference >= 60000) {
    var minutes = difference/60000;
      if (this.hp + (Math.floor(minutes)) >= this.maxHp) {
        this.hp = this.maxHp;
      }
      else {
        this.hp += Math.floor(minutes);
      }
      hpStartDate = new Date();   
    }
  }
}
function find() {
  equipment.innerHTML = "";
  this.select();  
  document.getElementById("sellItems").style.visibility='visible';
  document.getElementById("useItems").style.visibility='visible';
}
function sell() {
  var item = document.getElementById("equipment").value;
  var id_tag = item,
  position = this.equipment.indexOf(id_tag);
  if ( ~position ) this.equipment.splice(position, 1);
  switch(item) {
    case " Bread": this.gold += 3;
    break;
    case " Stick": this.gold += 6;
    break;
    case " Swimming Trunks": this.gold += 6;
    break;
    case " Sandals": this.gold += 6;
    break;
    case " Cheese": this.gold += 5;
    break;
    case " Cloth Shirt": this.gold += 13;
    break;
    case " Cloth Legs": this.gold += 13;
    break;
    case " Cloth Hat": this.gold += 8;
    break;
    case " Cloth Gloves": this.gold += 14;
    break;
    case " Cloth Boots": this.gold += 14;
    break;    
    case " Wooden Sword": this.gold += 13;
    break;
    case " Wooden Shield": this.gold += 13;
    break;
    case " Worn Ring": this.gold += 15;
    break;
    case " Tarnished Ring": this.gold += 32;
    break;
    case " Shiny Ring": this.gold += 48;
    break;
    case " Worn Amulet": this.gold += 15;
    break;
    case " Tarnished Amulet": this.gold += 32;
    break;
    case " Shiny Amulet": this.gold += 48;
    break;
    case " Ham": this.gold += 10;
    break;     
    case " Leather Shirt": this.gold += 31;
    break;
    case " Leather Legs": this.gold += 27;
    break;
    case " Leather Hat": this.gold += 13;
    break;
    case " Leather Gloves": this.gold += 25;
    break;
    case " Leather Boots": this.gold += 25;
    break;    
    case " Truncheon": this.gold += 25;
    break;
    case " Hardwood Shield": this.gold += 26;
    break;
    case " Bone Chestplate": this.gold += 46;
    break;
    case " Hard Leather Legs": this.gold += 43;
    break;
    case " Bone Helm": this.gold += 23;
    break;
    case " Hard Leather Mitts": this.gold += 45;
    break;
    case " Hard Leather Boots": this.gold += 40;
    break;    
    case " Bone Club": this.gold += 40;
    break;
    case " Reinforced Shield": this.gold += 42;
    break;    
    case " Hatchet": this.gold += 55;
    break;    
    case " Kite Shield": this.gold += 50;
    break;
    case " Tin Helm": this.gold += 27;
    break;
    case " Studded Harness": this.gold += 55;
    break;
    case " Studded Legs": this.gold += 53;
    break;
    case " Studded Gloves": this.gold += 50;
    break;
    case " Hobnail Boots": this.gold += 50;
    break;
    case " Engraved Ring": this.gold += 56;
    break;    
    case " Engraved Amulet": this.gold += 56;
    break;
    case " Stew": this.gold += 15;
    break; 
    case " Bronze Dagger": this.gold += 75;
    break;    
    case " Bronze Shield": this.gold += 67;
    break;
    case " Bronze Helm": this.gold += 35;
    break;
    case " Bronze Chainmail": this.gold += 73;
    break;
    case " Bronze Chainlegs": this.gold += 71;
    break;
    case " Bronze Gloves": this.gold += 70;
    break;
    case " Bronze Boots": this.gold += 66;
    break;
    case " Jade Ring": this.gold += 76;
    break;    
    case " Jade Amulet": this.gold += 76;
    break;
    case " Power Potion": this.gold += 50;
    break;    
    }
    document.getElementById("sellItems").style.visibility='hidden';
    document.getElementById("useItems").style.visibility='hidden';
    this.updateStatus();
    character.sendData();
}
function use() {
  var item = document.getElementById("equipment").value;
  var id_tag = item,
  position = this.equipment.indexOf(id_tag);
  if ( ~position ) this.equipment.splice(position, 1);
    switch(item) {
    case " Bread": foodHp = 3;
      foodEnergy = 1;
      this.hp += foodHp;
      this.energy += foodEnergy;
      break;
    case " Cheese": foodHp = 5;
      foodEnergy = 2;
      this.hp += foodHp;
      this.energy += foodEnergy;
      break; 
    case " Ham": foodHp = 8;
      foodEnergy = 3;
      this.hp += foodHp;
      this.energy += foodEnergy;
      break;  
    case " Stew": foodHp = 9;
      foodEnergy = 5;
      this.hp += foodHp;
      this.energy += foodEnergy;
      break;     
    case " Power Potion": this.points ++;
      break;       
    case " Stick": if(this.weapon !== "None") {
      this.equipment[this.equipment.length] = this.weapon;
    }
      this.weapon = " Stick";
      this.equipStr = 1;   
      break;
    case " Swimming Trunks": if(this.legs !== "None") {
      this.equipment[this.equipment.length] = this.legs;
    }
      this.legs = " Swimming Trunks"; 
      this.legDef = 1;   
      break; 
    case " Sandals": if(this.boots !== "None") {
      this.equipment[this.equipment.length] = this.boots;
    }
      this.boots = " Sandals"; 
      this.bootDodge = 1;  
      break; 
    case " Wooden Sword": if(this.weapon !== "None") {
      this.equipment[this.equipment.length] = this.weapon;
    }
      this.weapon = " Wooden Sword"; 
      this.equipStr = 5;  
      break;
    case " Wooden Shield": if(this.shield !== "None") {
      this.equipment[this.equipment.length] = this.shield;
    }
      this.shield = " Wooden Shield"; 
      this.shieldDodge = 4;  
      break;   
    case " Cloth Shirt": if(this.chest !== "None") {
      this.equipment[this.equipment.length] = this.chest;
    }
      this.chest = " Cloth Shirt"; 
      this.chestDef = 4;   
      break;
    case " Cloth Legs": if(this.legs !== "None") {
      this.equipment[this.equipment.length] = this.legs;
    }
      this.legs = " Cloth Legs"; 
      this.legDef = 4;   
      break;   
    case " Cloth Hat": if(this.helm !== "None") {
      this.equipment[this.equipment.length] = this.helm;
    }
      this.helm = " Cloth Hat"; 
      this.helmDef = 2;  
      break;  
    case " Cloth Boots": if(this.boots !== "None") {
      this.equipment[this.equipment.length] = this.boots;
    }
      this.boots = " Cloth Boots"; 
      this.bootDodge = 4;  
      break; 
    case " Cloth Gloves": if(this.gloves !== "None") {
      this.equipment[this.equipment.length] = this.gloves;
    }
      this.gloves = " Cloth Gloves"; 
      this.equipHit = 5;  
      break; 
    case " Worn Ring": if(this.ring !== "None") {
      this.equipment[this.equipment.length] = this.ring;
    }
      this.ring = " Worn Ring"; 
      this.equipLuck = 2;  
      break;   
    case " Worn Amulet": if(this.amulet !== "None") {
      this.equipment[this.equipment.length] = this.amulet;
    }
      this.amulet = " Worn Amulet"; 
      this.equipHp = 10;  
      break;       
    case " Truncheon": if(this.weapon !== "None") {
      this.equipment[this.equipment.length] = this.weapon;
    }
      this.weapon = " Truncheon"; 
      this.equipStr = 10;  
      break;
    case " Hardwood Shield": if(this.shield !== "None") {
      this.equipment[this.equipment.length] = this.shield;
    }
      this.shield = " Hardwood Shield"; 
      this.shieldDodge = 8;  
      break;   
    case " Leather Shirt": if(this.chest !== "None") {
      this.equipment[this.equipment.length] = this.chest;
    }
      this.chest = " Leather Shirt"; 
      this.chestDef = 8;   
      break;
    case " Leather Legs": if(this.legs !== "None") {
      this.equipment[this.equipment.length] = this.legs;
    }
      this.legs = " Leather Legs"; 
      this.legDef = 8;   
      break;   
    case " Leather Hat": if(this.helm !== "None") {
      this.equipment[this.equipment.length] = this.helm;
    }
      this.helm = " Leather Hat"; 
      this.helmDef = 4;  
      break;  
    case " Leather Boots": if(this.boots !== "None") {
      this.equipment[this.equipment.length] = this.boots;
    }
      this.boots = " Leather Boots"; 
      this.bootDodge = 8;  
      break; 
    case " Leather Gloves": if(this.gloves !== "None") {
      this.equipment[this.equipment.length] = this.gloves;
    }
      this.gloves = " Leather Gloves"; 
      this.equipHit = 10;  
      break; 
    case " Tarnished Ring": if(this.ring !== "None") {
      this.equipment[this.equipment.length] = this.ring;
    }
      this.ring = " Tarnished Ring"; 
      this.equipLuck = 4;  
      break;
    case " Tarnished Amulet": if(this.amulet !== "None") {
      this.equipment[this.equipment.length] = this.amulet;
    }
      this.amulet = " Tarnished Amulet"; 
      this.equipHp = 20;  
      break;       
    case " Bone Club": if(this.weapon !== "None") {
      this.equipment[this.equipment.length] = this.weapon;
    }
      this.weapon = " Bone Club"; 
      this.equipStr = 15;  
      break;
    case " Reinforced Shield": if(this.shield !== "None") {
      this.equipment[this.equipment.length] = this.shield;
    }
      this.shield = " Reinforced Shield"; 
      this.shieldDodge = 12;  
      break;   
    case " Bone Chestplate": if(this.chest !== "None") {
      this.equipment[this.equipment.length] = this.chest;
    }
      this.chest = " Bone Chestplate"; 
      this.chestDef = 12;   
      break;
    case " Hard Leather Legs": if(this.legs !== "None") {
      this.equipment[this.equipment.length] = this.legs;
    }
      this.legs = " Hard Leather Legs"; 
      this.legDef = 12;   
      break;   
    case " Bone Helm": if(this.helm !== "None") {
      this.equipment[this.equipment.length] = this.helm;
    }
      this.helm = " Bone Helm"; 
      this.helmDef = 6;  
      break;  
    case " Hard Leather Boots": if(this.boots !== "None") {
      this.equipment[this.equipment.length] = this.boots;
    }
      this.boots = " Hard Leather Boots"; 
      this.bootDodge = 12;  
      break; 
    case " Hard Leather Mitts": if(this.gloves !== "None") {
      this.equipment[this.equipment.length] = this.gloves;
    }
      this.gloves = " Hard Leather Mitts"; 
      this.equipHit = 15;  
      break; 
    case " Shiny Ring": if(this.ring !== "None") {
      this.equipment[this.equipment.length] = this.ring;
    }
      this.ring = " Shiny Ring"; 
      this.equipLuck = 6;  
      break; 
    case " Shiny Amulet": if(this.amulet !== "None") {
      this.equipment[this.equipment.length] = this.amulet;
    }
      this.amulet = " Shiny Amulet"; 
      this.equipHp = 30;  
      break;   
    case " Hatchet": if(this.weapon !== "None") {
      this.equipment[this.equipment.length] = this.weapon;
    }
      this.weapon = " Hatchet"; 
      this.equipStr = 20;  
      break;
    case " Kite Shield": if(this.shield !== "None") {
      this.equipment[this.equipment.length] = this.shield;
    }
      this.shield = " Kite Shield"; 
      this.shieldDodge = 16;  
      break;   
    case " Studded Harness": if(this.chest !== "None") {
      this.equipment[this.equipment.length] = this.chest;
    }
      this.chest = " Studded Harness"; 
      this.chestDef = 16;   
      break;
    case " Studded Legs": if(this.legs !== "None") {
      this.equipment[this.equipment.length] = this.legs;
    }
      this.legs = " Studded Legs"; 
      this.legDef = 16;   
      break;   
    case " Tin Helm": if(this.helm !== "None") {
      this.equipment[this.equipment.length] = this.helm;
    }
      this.helm = " Tin Helm"; 
      this.helmDef = 8;  
      break;  
    case " Hobnail Boots": if(this.boots !== "None") {
      this.equipment[this.equipment.length] = this.boots;
    }
      this.boots = " Hobnail Boots"; 
      this.bootDodge = 16;  
      break; 
    case " Studded Gloves": if(this.gloves !== "None") {
      this.equipment[this.equipment.length] = this.gloves;
    }
      this.gloves = " Studded Gloves"; 
      this.equipHit = 20;  
      break; 
    case " Engraved Ring": if(this.ring !== "None") {
      this.equipment[this.equipment.length] = this.ring;
    }
      this.ring = " Engraved Ring"; 
      this.equipLuck = 8;  
      break; 
    case " Engraved Amulet": if(this.amulet !== "None") {
      this.equipment[this.equipment.length] = this.amulet;
    }
      this.amulet = " Engraved Amulet"; 
      this.equipHp = 40;  
      break;     
    case " Bronze Dagger": if(this.weapon !== "None") {
      this.equipment[this.equipment.length] = this.weapon;
    }
      this.weapon = " Bronze Dagger"; 
      this.equipStr = 25;  
      break;
    case " Bronze Shield": if(this.shield !== "None") {
      this.equipment[this.equipment.length] = this.shield;
    }
      this.shield = " Bronze Shield"; 
      this.shieldDodge = 20;  
      break;   
    case " Bronze Chainmail": if(this.chest !== "None") {
      this.equipment[this.equipment.length] = this.chest;
    }
      this.chest = " Bronze Chainmail"; 
      this.chestDef = 20;   
      break;
    case " Bronze Chainlegs": if(this.legs !== "None") {
      this.equipment[this.equipment.length] = this.legs;
    }
      this.legs = " Bronze Chainlegs"; 
      this.legDef = 20;   
      break;   
    case " Bronze Helm": if(this.helm !== "None") {
      this.equipment[this.equipment.length] = this.helm;
    }
      this.helm = " Bronze Helm"; 
      this.helmDef = 10;  
      break;  
    case " Bronze Boots": if(this.boots !== "None") {
      this.equipment[this.equipment.length] = this.boots;
    }
      this.boots = " Bronze Boots"; 
      this.bootDodge = 20;  
      break; 
    case " Bronze Gloves": if(this.gloves !== "None") {
      this.equipment[this.equipment.length] = this.gloves;
    }
      this.gloves = " Bronze Gloves"; 
      this.equipHit = 25;  
      break; 
    case " Jade Ring": if(this.ring !== "None") {
      this.equipment[this.equipment.length] = this.ring;
    }
      this.ring = " Jade Ring"; 
      this.equipLuck = 10;  
      break; 
    case " Jade Amulet": if(this.amulet !== "None") {
      this.equipment[this.equipment.length] = this.amulet;
    }
      this.amulet = " Jade Amulet"; 
      this.equipHp = 50;  
      break;        
    }      
    this.updateStatus (); 
    character.sendData();    
    document.getElementById("sellItems").style.visibility='hidden';
    document.getElementById("useItems").style.visibility='hidden';
}
function select() {
  var sel = document.getElementById("equipment");
  for (var i=0; i< this.equipment.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = this.equipment[i];
    opt.value = this.equipment[i];
    sel.appendChild(opt);
  }
}
function selectTier() {
  var sel = document.getElementById("shop_Tier");
  for (var i=0; i< tier.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = tier[i];
    opt.value = tier[i];
    sel.appendChild(opt);
  }
}
function findTier() {
  shop_Tier.innerHTML = "";
  this.selectTier();  
  document.getElementById("shop_Tier").style.visibility='visible'; 
  document.getElementById("newStock").style.visibility='visible';  
}
function selectShop() {
  var sel = document.getElementById("shopStock");
  for (var i=0; i< shop.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = shop[i];
    opt.value = shop[i];
    sel.appendChild(opt);
  }
}
function findShop() {
  shopStock.innerHTML = "";
  this.selectShop();  
  document.getElementById("buy").style.visibility='visible';  
}
function changeStock() {
  var shopTier = document.getElementById("shop_Tier").value;
  TierNumber = shopTier;
  var stockTable = document.getElementById('stock');
  document.getElementById("findItem").style.visibility='visible';
  document.getElementById("shopStock").style.visibility='visible'; 
  if (shopTier==="1") {
    shop = [" Wooden Sword", " Wooden Shield", " Cloth Hat", " Cloth Shirt", " Cloth Legs", " Cloth Gloves", " Cloth Boots", " Worn Ring", " Worn Amulet"];
    stockTable.rows[1].cells[0].innerHTML = 'Wooden Sword'; 
    stockTable.rows[1].cells[1].innerHTML = 'Strength +5'; 
    stockTable.rows[1].cells[2].innerHTML = '58 gold'; 
    stockTable.rows[2].cells[0].innerHTML = 'Wooden Shield';
    stockTable.rows[2].cells[1].innerHTML = 'Evade +4';        
    stockTable.rows[2].cells[2].innerHTML = '50 gold';        
    stockTable.rows[3].cells[0].innerHTML = 'Cloth Hat';        
    stockTable.rows[3].cells[1].innerHTML = 'Defence +2';        
    stockTable.rows[3].cells[2].innerHTML = '24 gold';        
    stockTable.rows[4].cells[0].innerHTML = 'Cloth Shirt';  
    stockTable.rows[4].cells[1].innerHTML = 'Defence +4';    
    stockTable.rows[4].cells[2].innerHTML = '54 gold';    
    stockTable.rows[5].cells[0].innerHTML = 'Cloth Legs'; 
    stockTable.rows[5].cells[1].innerHTML = 'Defence +4';    
    stockTable.rows[5].cells[2].innerHTML = '48 gold'; 
    stockTable.rows[6].cells[0].innerHTML = 'Cloth Gloves';  
    stockTable.rows[6].cells[1].innerHTML = 'Accuracy +5';    
    stockTable.rows[6].cells[2].innerHTML = '60 gold';    
    stockTable.rows[7].cells[0].innerHTML = 'Cloth Boots'; 
    stockTable.rows[7].cells[1].innerHTML = 'Evade +4';    
    stockTable.rows[7].cells[2].innerHTML = '48 gold';
    stockTable.rows[8].cells[0].innerHTML = 'Worn Ring'; 
    stockTable.rows[8].cells[1].innerHTML = 'Luck +2';    
    stockTable.rows[8].cells[2].innerHTML = '65 gold'; 
    stockTable.rows[9].cells[0].innerHTML = 'Worn Amulet'; 
    stockTable.rows[9].cells[1].innerHTML = 'Max Health +10';    
    stockTable.rows[9].cells[2].innerHTML = '65 gold';    
  }
  else if (shopTier ==="2") { 
    shop = [" Truncheon", " Hardwood Shield", " Leather Hat", " Leather Shirt", " Leather Legs", " Leather Gloves", " Leather Boots", " Tarnished Ring", " Tarnished Amulet"];
    stockTable.rows[1].cells[0].innerHTML = 'Truncheon'; 
    stockTable.rows[1].cells[1].innerHTML = 'Strength +10'; 
    stockTable.rows[1].cells[2].innerHTML = '131 gold'; 
    stockTable.rows[2].cells[0].innerHTML = 'Hardwood Shield';
    stockTable.rows[2].cells[1].innerHTML = 'Evade +8';        
    stockTable.rows[2].cells[2].innerHTML = '120 gold';        
    stockTable.rows[3].cells[0].innerHTML = 'Leather Hat';        
    stockTable.rows[3].cells[1].innerHTML = 'Defence +4';        
    stockTable.rows[3].cells[2].innerHTML = '67 gold';        
    stockTable.rows[4].cells[0].innerHTML = 'Leather Shirt';  
    stockTable.rows[4].cells[1].innerHTML = 'Defence +8';    
    stockTable.rows[4].cells[2].innerHTML = '124 gold';    
    stockTable.rows[5].cells[0].innerHTML = 'Leather Legs'; 
    stockTable.rows[5].cells[1].innerHTML = 'Defence +8';    
    stockTable.rows[5].cells[2].innerHTML = '115 gold'; 
    stockTable.rows[6].cells[0].innerHTML = 'Leather Gloves';  
    stockTable.rows[6].cells[1].innerHTML = 'Accuracy +10';    
    stockTable.rows[6].cells[2].innerHTML = '131 gold';    
    stockTable.rows[7].cells[0].innerHTML = 'Leather Boots'; 
    stockTable.rows[7].cells[1].innerHTML = 'Evade +8';    
    stockTable.rows[7].cells[2].innerHTML = '112 gold'; 
    stockTable.rows[8].cells[0].innerHTML = 'Tarnished Ring'; 
    stockTable.rows[8].cells[1].innerHTML = 'Luck +4';    
    stockTable.rows[8].cells[2].innerHTML = '135 gold'; 
    stockTable.rows[9].cells[0].innerHTML = 'Tarnished Amulet'; 
    stockTable.rows[9].cells[1].innerHTML = 'Max Health +20';    
    stockTable.rows[9].cells[2].innerHTML = '135 gold';      
  }
  else if (shopTier ==="3") { 
    shop = [" Bone Club", " Reinforced Shield", " Bone Helm", " Bone Chestplate", " Hard Leather Legs", " Hard Leather Mitts", " Hard Leather Boots", " Shiny Ring", " Shiny Amulet"];
    stockTable.rows[1].cells[0].innerHTML = 'Bone Club'; 
    stockTable.rows[1].cells[1].innerHTML = 'Strength +15'; 
    stockTable.rows[1].cells[2].innerHTML = '213 gold'; 
    stockTable.rows[2].cells[0].innerHTML = 'Reinforced Shield';
    stockTable.rows[2].cells[1].innerHTML = 'Evade +12';        
    stockTable.rows[2].cells[2].innerHTML = '183 gold';        
    stockTable.rows[3].cells[0].innerHTML = 'Bone Helm';        
    stockTable.rows[3].cells[1].innerHTML = 'Defence +6';        
    stockTable.rows[3].cells[2].innerHTML = '103 gold';        
    stockTable.rows[4].cells[0].innerHTML = 'Bone Chestplate';  
    stockTable.rows[4].cells[1].innerHTML = 'Defence +12';    
    stockTable.rows[4].cells[2].innerHTML = '196 gold';    
    stockTable.rows[5].cells[0].innerHTML = 'Hard Leather Legs'; 
    stockTable.rows[5].cells[1].innerHTML = 'Defence +12';    
    stockTable.rows[5].cells[2].innerHTML = '181 gold'; 
    stockTable.rows[6].cells[0].innerHTML = 'Hard Leather Mitts';  
    stockTable.rows[6].cells[1].innerHTML = 'Accuracy +15';    
    stockTable.rows[6].cells[2].innerHTML = '213 gold';    
    stockTable.rows[7].cells[0].innerHTML = 'Hard Leather Boots'; 
    stockTable.rows[7].cells[1].innerHTML = 'Evade +12';    
    stockTable.rows[7].cells[2].innerHTML = '178 gold';
    stockTable.rows[8].cells[0].innerHTML = 'Shiny Ring'; 
    stockTable.rows[8].cells[1].innerHTML = 'Luck +6';    
    stockTable.rows[8].cells[2].innerHTML = '215 gold'; 
    stockTable.rows[9].cells[0].innerHTML = 'Shiny Amulet'; 
    stockTable.rows[9].cells[1].innerHTML = 'Max Health +30';    
    stockTable.rows[9].cells[2].innerHTML = '215 gold';    
  }
  else if (shopTier ==="4") { 
    shop = [" Hatchet", " Kite Shield", " Tin Helm", " Studded Harness", " Studded Legs", " Studded Gloves", " Hobnail Boots", " Engraved Ring", " Engraved Amulet"];
    stockTable.rows[1].cells[0].innerHTML = 'Hatchet'; 
    stockTable.rows[1].cells[1].innerHTML = 'Strength +20'; 
    stockTable.rows[1].cells[2].innerHTML = '301 gold'; 
    stockTable.rows[2].cells[0].innerHTML = 'Kite Shield';
    stockTable.rows[2].cells[1].innerHTML = 'Evade +16';        
    stockTable.rows[2].cells[2].innerHTML = '265 gold';        
    stockTable.rows[3].cells[0].innerHTML = 'Tin Helm';        
    stockTable.rows[3].cells[1].innerHTML = 'Defence +8';        
    stockTable.rows[3].cells[2].innerHTML = '139 gold';        
    stockTable.rows[4].cells[0].innerHTML = 'Studded Harness';  
    stockTable.rows[4].cells[1].innerHTML = 'Defence +16';    
    stockTable.rows[4].cells[2].innerHTML = '274 gold';    
    stockTable.rows[5].cells[0].innerHTML = 'Studded Legs'; 
    stockTable.rows[5].cells[1].innerHTML = 'Defence +16';    
    stockTable.rows[5].cells[2].innerHTML = '262 gold'; 
    stockTable.rows[6].cells[0].innerHTML = 'Studded Gloves';  
    stockTable.rows[6].cells[1].innerHTML = 'Accuracy +20';    
    stockTable.rows[6].cells[2].innerHTML = '301 gold';    
    stockTable.rows[7].cells[0].innerHTML = 'Hobnail Boots'; 
    stockTable.rows[7].cells[1].innerHTML = 'Evade +16';    
    stockTable.rows[7].cells[2].innerHTML = '256 gold';
    stockTable.rows[8].cells[0].innerHTML = 'Engraved Ring'; 
    stockTable.rows[8].cells[1].innerHTML = 'Luck +8';    
    stockTable.rows[8].cells[2].innerHTML = '305 gold';
    stockTable.rows[9].cells[0].innerHTML = 'Engraved Amulet'; 
    stockTable.rows[9].cells[1].innerHTML = 'Max Health +40';    
    stockTable.rows[9].cells[2].innerHTML = '305 gold';     
  }
  else if (shopTier ==="5") { 
    shop = [" Bronze Dagger", " Bronze Shield", " Bronze Helm", " Bronze Chainmail", " Bronze Chainlegs", " Bronze Gloves", " Bronze Boots", " Jade Ring", " Jade Amulet"];
    stockTable.rows[1].cells[0].innerHTML = 'Bronze Dagger'; 
    stockTable.rows[1].cells[1].innerHTML = 'Strength +25'; 
    stockTable.rows[1].cells[2].innerHTML = '403 gold'; 
    stockTable.rows[2].cells[0].innerHTML = 'Bronze Shield';
    stockTable.rows[2].cells[1].innerHTML = 'Evade +20';        
    stockTable.rows[2].cells[2].innerHTML = '333 gold';        
    stockTable.rows[3].cells[0].innerHTML = 'Bronze Helm';        
    stockTable.rows[3].cells[1].innerHTML = 'Defence +10';        
    stockTable.rows[3].cells[2].innerHTML = '175 gold';        
    stockTable.rows[4].cells[0].innerHTML = 'Bronze Chainmail';  
    stockTable.rows[4].cells[1].innerHTML = 'Defence +20';    
    stockTable.rows[4].cells[2].innerHTML = '346 gold';    
    stockTable.rows[5].cells[0].innerHTML = 'Bronze Chainlegs'; 
    stockTable.rows[5].cells[1].innerHTML = 'Defence +20';    
    stockTable.rows[5].cells[2].innerHTML = '334 gold'; 
    stockTable.rows[6].cells[0].innerHTML = 'Bronze Gloves';  
    stockTable.rows[6].cells[1].innerHTML = 'Accuracy +25';    
    stockTable.rows[6].cells[2].innerHTML = '403 gold';    
    stockTable.rows[7].cells[0].innerHTML = 'Bronze Boots'; 
    stockTable.rows[7].cells[1].innerHTML = 'Evade +20';    
    stockTable.rows[7].cells[2].innerHTML = '328 gold';
    stockTable.rows[8].cells[0].innerHTML = 'Jade Ring'; 
    stockTable.rows[8].cells[1].innerHTML = 'Luck +10';    
    stockTable.rows[8].cells[2].innerHTML = '405 gold';
    stockTable.rows[9].cells[0].innerHTML = 'Jade Amulet'; 
    stockTable.rows[9].cells[1].innerHTML = 'Max Health +50';    
    stockTable.rows[9].cells[2].innerHTML = '405 gold';     
  }  
  else if (shopTier ==="Food & Potions") {
    shop = [" Bread", " Cheese", " Ham", " Stew", " Power Potion"];
    stockTable.rows[1].cells[0].innerHTML = 'Crust of Bread'; 
    stockTable.rows[1].cells[1].innerHTML = 'Health +3, Energy +1';    
    stockTable.rows[1].cells[2].innerHTML = '19 gold';     
    stockTable.rows[2].cells[0].innerHTML = 'Piece of Cheese'; 
    stockTable.rows[2].cells[1].innerHTML = 'Health +5, Energy +2';    
    stockTable.rows[2].cells[2].innerHTML = '31 gold';     
    stockTable.rows[3].cells[0].innerHTML = 'Leg of Ham'; 
    stockTable.rows[3].cells[1].innerHTML = 'Health +8, Energy +3';    
    stockTable.rows[3].cells[2].innerHTML = '47 gold';     
    stockTable.rows[4].cells[0].innerHTML = 'Hot Stew'; 
    stockTable.rows[4].cells[1].innerHTML = 'Health +9, Energy +5';    
    stockTable.rows[4].cells[2].innerHTML = '70 gold'; 
    stockTable.rows[5].cells[0].innerHTML = 'Power Potion'; 
    stockTable.rows[5].cells[1].innerHTML = 'Attribute Points +1';    
    stockTable.rows[5].cells[2].innerHTML = potionPrice + ' gold';    
    stockTable.rows[6].cells[0].innerHTML = ''; 
    stockTable.rows[6].cells[1].innerHTML = '';    
    stockTable.rows[6].cells[2].innerHTML = '';    
    stockTable.rows[7].cells[0].innerHTML = ''; 
    stockTable.rows[7].cells[1].innerHTML = '';    
    stockTable.rows[7].cells[2].innerHTML = '';    
    stockTable.rows[8].cells[0].innerHTML = ''; 
    stockTable.rows[8].cells[1].innerHTML = '';    
    stockTable.rows[8].cells[2].innerHTML = '';      
    stockTable.rows[9].cells[0].innerHTML = ''; 
    stockTable.rows[9].cells[1].innerHTML = '';    
    stockTable.rows[9].cells[2].innerHTML = '';         
  }
  document.getElementById("shop_Tier").style.visibility='hidden';
  document.getElementById("newStock").style.visibility='hidden';
}
function setStock() {
  if (document.getElementById("findItem")!=null) {
    var shopTier = TierNumber;
    var stockTable = document.getElementById('stock');
    document.getElementById("findItem").style.visibility='visible';
    document.getElementById("shopStock").style.visibility='visible'; 
    if (shopTier=="1") {
      shop = [" Wooden Sword", " Wooden Shield", " Cloth Hat", " Cloth Shirt", " Cloth Legs", " Cloth Gloves", " Cloth Boots", " Worn Ring", " Worn Amulet"];
      stockTable.rows[1].cells[0].innerHTML = 'Wooden Sword'; 
      stockTable.rows[1].cells[1].innerHTML = 'Strength +5'; 
      stockTable.rows[1].cells[2].innerHTML = '58 gold'; 
      stockTable.rows[2].cells[0].innerHTML = 'Wooden Shield';
      stockTable.rows[2].cells[1].innerHTML = 'Evade +4';        
      stockTable.rows[2].cells[2].innerHTML = '50 gold';        
      stockTable.rows[3].cells[0].innerHTML = 'Cloth Hat';        
      stockTable.rows[3].cells[1].innerHTML = 'Defence +2';        
      stockTable.rows[3].cells[2].innerHTML = '24 gold';        
      stockTable.rows[4].cells[0].innerHTML = 'Cloth Shirt';  
      stockTable.rows[4].cells[1].innerHTML = 'Defence +4';    
      stockTable.rows[4].cells[2].innerHTML = '54 gold';    
      stockTable.rows[5].cells[0].innerHTML = 'Cloth Legs'; 
      stockTable.rows[5].cells[1].innerHTML = 'Defence +4';    
      stockTable.rows[5].cells[2].innerHTML = '48 gold'; 
      stockTable.rows[6].cells[0].innerHTML = 'Cloth Gloves';  
      stockTable.rows[6].cells[1].innerHTML = 'Accuracy +5';    
      stockTable.rows[6].cells[2].innerHTML = '60 gold';    
      stockTable.rows[7].cells[0].innerHTML = 'Cloth Boots'; 
      stockTable.rows[7].cells[1].innerHTML = 'Evade +4';    
      stockTable.rows[7].cells[2].innerHTML = '48 gold';
      stockTable.rows[8].cells[0].innerHTML = 'Worn Ring'; 
      stockTable.rows[8].cells[1].innerHTML = 'Luck +2';    
      stockTable.rows[8].cells[2].innerHTML = '65 gold'; 
      stockTable.rows[9].cells[0].innerHTML = 'Worn Amulet'; 
      stockTable.rows[9].cells[1].innerHTML = 'Max Health +10';    
      stockTable.rows[9].cells[2].innerHTML = '65 gold';    
    }
    else if (shopTier =="2") { 
      shop = [" Truncheon", " Hardwood Shield", " Leather Hat", " Leather Shirt", " Leather Legs", " Leather Gloves", " Leather Boots", " Tarnished Ring", " Tarnished Amulet"];
      stockTable.rows[1].cells[0].innerHTML = 'Truncheon'; 
      stockTable.rows[1].cells[1].innerHTML = 'Strength +10'; 
      stockTable.rows[1].cells[2].innerHTML = '131 gold'; 
      stockTable.rows[2].cells[0].innerHTML = 'Hardwood Shield';
      stockTable.rows[2].cells[1].innerHTML = 'Evade +8';        
      stockTable.rows[2].cells[2].innerHTML = '120 gold';        
      stockTable.rows[3].cells[0].innerHTML = 'Leather Hat';        
      stockTable.rows[3].cells[1].innerHTML = 'Defence +4';        
      stockTable.rows[3].cells[2].innerHTML = '67 gold';        
      stockTable.rows[4].cells[0].innerHTML = 'Leather Shirt';  
      stockTable.rows[4].cells[1].innerHTML = 'Defence +8';    
      stockTable.rows[4].cells[2].innerHTML = '124 gold';    
      stockTable.rows[5].cells[0].innerHTML = 'Leather Legs'; 
      stockTable.rows[5].cells[1].innerHTML = 'Defence +8';    
      stockTable.rows[5].cells[2].innerHTML = '115 gold'; 
      stockTable.rows[6].cells[0].innerHTML = 'Leather Gloves';  
      stockTable.rows[6].cells[1].innerHTML = 'Accuracy +10';    
      stockTable.rows[6].cells[2].innerHTML = '131 gold';    
      stockTable.rows[7].cells[0].innerHTML = 'Leather Boots'; 
      stockTable.rows[7].cells[1].innerHTML = 'Evade +8';    
      stockTable.rows[7].cells[2].innerHTML = '112 gold'; 
      stockTable.rows[8].cells[0].innerHTML = 'Tarnished Ring'; 
      stockTable.rows[8].cells[1].innerHTML = 'Luck +4';    
      stockTable.rows[8].cells[2].innerHTML = '135 gold'; 
      stockTable.rows[9].cells[0].innerHTML = 'Tarnished Amulet'; 
      stockTable.rows[9].cells[1].innerHTML = 'Max Health +20';    
      stockTable.rows[9].cells[2].innerHTML = '135 gold';      
    }
    else if (shopTier =="3") { 
      shop = [" Bone Club", " Reinforced Shield", " Bone Helm", " Bone Chestplate", " Hard Leather Legs", " Hard Leather Mitts", " Hard Leather Boots", " Shiny Ring", " Shiny Amulet"];
      stockTable.rows[1].cells[0].innerHTML = 'Bone Club'; 
      stockTable.rows[1].cells[1].innerHTML = 'Strength +15'; 
      stockTable.rows[1].cells[2].innerHTML = '213 gold'; 
      stockTable.rows[2].cells[0].innerHTML = 'Reinforced Shield';
      stockTable.rows[2].cells[1].innerHTML = 'Evade +12';        
      stockTable.rows[2].cells[2].innerHTML = '183 gold';        
      stockTable.rows[3].cells[0].innerHTML = 'Bone Helm';        
      stockTable.rows[3].cells[1].innerHTML = 'Defence +6';        
      stockTable.rows[3].cells[2].innerHTML = '103 gold';        
      stockTable.rows[4].cells[0].innerHTML = 'Bone Chestplate';  
      stockTable.rows[4].cells[1].innerHTML = 'Defence +12';    
      stockTable.rows[4].cells[2].innerHTML = '196 gold';    
      stockTable.rows[5].cells[0].innerHTML = 'Hard Leather Legs'; 
      stockTable.rows[5].cells[1].innerHTML = 'Defence +12';    
      stockTable.rows[5].cells[2].innerHTML = '181 gold'; 
      stockTable.rows[6].cells[0].innerHTML = 'Hard Leather Mitts';  
      stockTable.rows[6].cells[1].innerHTML = 'Accuracy +15';    
      stockTable.rows[6].cells[2].innerHTML = '213 gold';    
      stockTable.rows[7].cells[0].innerHTML = 'Hard Leather Boots'; 
      stockTable.rows[7].cells[1].innerHTML = 'Evade +12';    
      stockTable.rows[7].cells[2].innerHTML = '178 gold';
      stockTable.rows[8].cells[0].innerHTML = 'Shiny Ring'; 
      stockTable.rows[8].cells[1].innerHTML = 'Luck +6';    
      stockTable.rows[8].cells[2].innerHTML = '215 gold'; 
      stockTable.rows[9].cells[0].innerHTML = 'Shiny Amulet'; 
      stockTable.rows[9].cells[1].innerHTML = 'Max Health +30';    
      stockTable.rows[9].cells[2].innerHTML = '215 gold';    
    }
    else if (shopTier =="4") { 
      shop = [" Hatchet", " Kite Shield", " Tin Helm", " Studded Harness", " Studded Legs", " Studded Gloves", " Hobnail Boots", " Engraved Ring", " Engraved Amulet"];
      stockTable.rows[1].cells[0].innerHTML = 'Hatchet'; 
      stockTable.rows[1].cells[1].innerHTML = 'Strength +20'; 
      stockTable.rows[1].cells[2].innerHTML = '301 gold'; 
      stockTable.rows[2].cells[0].innerHTML = 'Kite Shield';
      stockTable.rows[2].cells[1].innerHTML = 'Evade +16';        
      stockTable.rows[2].cells[2].innerHTML = '265 gold';        
      stockTable.rows[3].cells[0].innerHTML = 'Tin Helm';        
      stockTable.rows[3].cells[1].innerHTML = 'Defence +8';        
      stockTable.rows[3].cells[2].innerHTML = '139 gold';        
      stockTable.rows[4].cells[0].innerHTML = 'Studded Harness';  
      stockTable.rows[4].cells[1].innerHTML = 'Defence +16';    
      stockTable.rows[4].cells[2].innerHTML = '274 gold';    
      stockTable.rows[5].cells[0].innerHTML = 'Studded Legs'; 
      stockTable.rows[5].cells[1].innerHTML = 'Defence +16';    
      stockTable.rows[5].cells[2].innerHTML = '262 gold'; 
      stockTable.rows[6].cells[0].innerHTML = 'Studded Gloves';  
      stockTable.rows[6].cells[1].innerHTML = 'Accuracy +20';    
      stockTable.rows[6].cells[2].innerHTML = '301 gold';    
      stockTable.rows[7].cells[0].innerHTML = 'Hobnail Boots'; 
      stockTable.rows[7].cells[1].innerHTML = 'Evade +16';    
      stockTable.rows[7].cells[2].innerHTML = '256 gold';
      stockTable.rows[8].cells[0].innerHTML = 'Engraved Ring'; 
      stockTable.rows[8].cells[1].innerHTML = 'Luck +8';    
      stockTable.rows[8].cells[2].innerHTML = '305 gold';
      stockTable.rows[9].cells[0].innerHTML = 'Engraved Amulet'; 
      stockTable.rows[9].cells[1].innerHTML = 'Max Health +40';    
      stockTable.rows[9].cells[2].innerHTML = '305 gold';     
    }
    else if (shopTier =="5") { 
      shop = [" Bronze Dagger", " Bronze Shield", " Bronze Helm", " Bronze Chainmail", " Bronze Chainlegs", " Bronze Gloves", " Bronze Boots", " Jade Ring", " Jade Amulet"];
      stockTable.rows[1].cells[0].innerHTML = 'Bronze Dagger'; 
      stockTable.rows[1].cells[1].innerHTML = 'Strength +25'; 
      stockTable.rows[1].cells[2].innerHTML = '403 gold'; 
      stockTable.rows[2].cells[0].innerHTML = 'Bronze Shield';
      stockTable.rows[2].cells[1].innerHTML = 'Evade +20';        
      stockTable.rows[2].cells[2].innerHTML = '333 gold';        
      stockTable.rows[3].cells[0].innerHTML = 'Bronze Helm';        
      stockTable.rows[3].cells[1].innerHTML = 'Defence +10';        
      stockTable.rows[3].cells[2].innerHTML = '175 gold';        
      stockTable.rows[4].cells[0].innerHTML = 'Bronze Chainmail';  
      stockTable.rows[4].cells[1].innerHTML = 'Defence +20';    
      stockTable.rows[4].cells[2].innerHTML = '346 gold';    
      stockTable.rows[5].cells[0].innerHTML = 'Bronze Chainlegs'; 
      stockTable.rows[5].cells[1].innerHTML = 'Defence +20';    
      stockTable.rows[5].cells[2].innerHTML = '334 gold'; 
      stockTable.rows[6].cells[0].innerHTML = 'Bronze Gloves';  
      stockTable.rows[6].cells[1].innerHTML = 'Accuracy +25';    
      stockTable.rows[6].cells[2].innerHTML = '403 gold';    
      stockTable.rows[7].cells[0].innerHTML = 'Bronze Boots'; 
      stockTable.rows[7].cells[1].innerHTML = 'Evade +20';    
      stockTable.rows[7].cells[2].innerHTML = '328 gold';
      stockTable.rows[8].cells[0].innerHTML = 'Jade Ring'; 
      stockTable.rows[8].cells[1].innerHTML = 'Luck +10';    
      stockTable.rows[8].cells[2].innerHTML = '405 gold';
      stockTable.rows[9].cells[0].innerHTML = 'Jade Amulet'; 
      stockTable.rows[9].cells[1].innerHTML = 'Max Health +50';    
      stockTable.rows[9].cells[2].innerHTML = '405 gold';     
    }  
    else if (shopTier =="Food & Potions") {
      shop = [" Bread", " Cheese", " Ham", " Stew", " Power Potion"];
      stockTable.rows[1].cells[0].innerHTML = 'Crust of Bread'; 
      stockTable.rows[1].cells[1].innerHTML = 'Health +3, Energy +1';    
      stockTable.rows[1].cells[2].innerHTML = '19 gold';     
      stockTable.rows[2].cells[0].innerHTML = 'Piece of Cheese'; 
      stockTable.rows[2].cells[1].innerHTML = 'Health +5, Energy +2';    
      stockTable.rows[2].cells[2].innerHTML = '31 gold';     
      stockTable.rows[3].cells[0].innerHTML = 'Leg of Ham'; 
      stockTable.rows[3].cells[1].innerHTML = 'Health +8, Energy +3';    
      stockTable.rows[3].cells[2].innerHTML = '47 gold';     
      stockTable.rows[4].cells[0].innerHTML = 'Hot Stew'; 
      stockTable.rows[4].cells[1].innerHTML = 'Health +9, Energy +5';    
      stockTable.rows[4].cells[2].innerHTML = '70 gold'; 
      stockTable.rows[5].cells[0].innerHTML = 'Power Potion'; 
      stockTable.rows[5].cells[1].innerHTML = 'Attribute Points +1';    
      stockTable.rows[5].cells[2].innerHTML = potionPrice + ' gold';    
      stockTable.rows[6].cells[0].innerHTML = ''; 
      stockTable.rows[6].cells[1].innerHTML = '';    
      stockTable.rows[6].cells[2].innerHTML = '';    
      stockTable.rows[7].cells[0].innerHTML = ''; 
      stockTable.rows[7].cells[1].innerHTML = '';    
      stockTable.rows[7].cells[2].innerHTML = '';    
      stockTable.rows[8].cells[0].innerHTML = ''; 
      stockTable.rows[8].cells[1].innerHTML = '';    
      stockTable.rows[8].cells[2].innerHTML = '';      
      stockTable.rows[9].cells[0].innerHTML = ''; 
      stockTable.rows[9].cells[1].innerHTML = '';    
      stockTable.rows[9].cells[2].innerHTML = '';         
    }
    document.getElementById("shop_Tier").style.visibility='hidden';
    document.getElementById("newStock").style.visibility='hidden';
  }
}
function buy() {
  var item = document.getElementById("shopStock").value;
  switch(item) {   
      case " Wooden Sword": if (this.gold >= 58) {
        this.gold -= 58;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Wooden Shield": if (this.gold >= 50) {
        this.gold -= 50;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Cloth Hat": if (this.gold >= 24) {
        this.gold -= 24;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Cloth Shirt": if (this.gold >= 54) {
        this.gold -= 54;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Cloth Legs": if (this.gold >= 48) {
        this.gold -= 48;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Cloth Gloves": if (this.gold >= 60) {
        this.gold -= 60;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Cloth Boots": if (this.gold >= 48) {
        this.gold -= 48;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Worn Ring": if (this.gold >= 65) {
        this.gold -= 65;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Worn Amulet": if (this.gold >= 65) {
        this.gold -= 65;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bread": if (this.gold >= 19) {
        this.gold -= 19;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;      
      case " Truncheon": if (this.gold >= 131) {
        this.gold -= 131;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Hardwood Shield": if (this.gold >= 120) {
        this.gold -= 120;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Leather Hat": if (this.gold >= 67) {
        this.gold -= 67;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Leather Shirt": if (this.gold >= 124) {
        this.gold -= 124;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Leather Legs": if (this.gold >= 115) {
        this.gold -= 115;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Leather Gloves": if (this.gold >= 131) {
        this.gold -= 131;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Leather Boots": if (this.gold >= 112) {
        this.gold -= 112;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Tarnished Ring": if (this.gold >= 135) {
        this.gold -= 135;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break; 
      case " Tarnished Amulet": if (this.gold >= 135) {
        this.gold -= 135;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;      
      case " Cheese": if (this.gold >= 31) {
        this.gold -= 31;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;      
      case " Bone Club": if (this.gold >= 213) {
        this.gold -= 213;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Reinforced Shield": if (this.gold >= 183) {
        this.gold -= 183;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bone Helm": if (this.gold >= 103) {
        this.gold -= 103;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bone Chestplate": if (this.gold >= 196) {
        this.gold -= 196;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Hard Leather Legs": if (this.gold >= 181) {
        this.gold -= 181;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Hard Leather Mitts": if (this.gold >= 213) {
        this.gold -= 213;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Hard Leather Boots": if (this.gold >= 178) {
        this.gold -= 178;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Shiny Ring": if (this.gold >= 215) {
        this.gold -= 215;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break; 
      case " Shiny Amulet": if (this.gold >= 215) {
        this.gold -= 215;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;      
      case " Ham": if (this.gold >= 47) {
        this.gold -= 47;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;  
      case " Hatchet": if (this.gold >= 301) {
        this.gold -= 301;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Kite Shield": if (this.gold >= 265) {
        this.gold -= 265;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Tin Helm": if (this.gold >= 139) {
        this.gold -= 139;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Studded Harness": if (this.gold >= 274) {
        this.gold -= 274;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Studded Legs": if (this.gold >= 262) {
        this.gold -= 262;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Studded Gloves": if (this.gold >= 301) {
        this.gold -= 301;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Hobnail Boots": if (this.gold >= 256) {
        this.gold -= 256;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Engraved Ring": if (this.gold >= 305) {
        this.gold -= 305;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break; 
      case " Engraved Amulet": if (this.gold >= 305) {
        this.gold -= 305;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;      
      case " Stew": if (this.gold >= 70) {
        this.gold -= 70;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;  
      case " Bronze Dagger": if (this.gold >= 403) {
        this.gold -= 403;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bronze Shield": if (this.gold >= 333) {
        this.gold -= 333;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bronze Helm": if (this.gold >= 175) {
        this.gold -= 175;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bronze Chainmail": if (this.gold >= 346) {
        this.gold -= 346;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;    
      case " Bronze Chainlegs": if (this.gold >= 334) {
        this.gold -= 334;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bronze Gloves": if (this.gold >= 403) {
        this.gold -= 403;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Bronze Boots": if (this.gold >= 328) {
        this.gold -= 328;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Jade Ring": if (this.gold >= 405) {
        this.gold -= 405;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;
      case " Jade Amulet": if (this.gold >= 405) {
        this.gold -= 405;
        this.equipment[this.equipment.length] = item;
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;  
      case " Power Potion": if (this.gold >= potionPrice) {
        this.gold -= potionPrice;
        this.equipment[this.equipment.length] = item;
        potionPrice += Math.floor(potionPrice/33) + 11;
        setStock();
      }
      else {
        result.innerHTML = "You don't have enough gold to buy that.";
      }
      break;             
  }
  document.getElementById("buy").style.visibility='hidden'; 
  this.updateStatus();
  character.sendData();
}
function mouseMove() {
  if ($('.mouse').hasClass('noDisplay')) {    
  }
  else {
  $('#mouseHead').css({'top': '380px', 'left': '320px'});
  $('#mouseLeftEar').css({'top': '352px', 'left': '325px'});
  $('#mouseRightEar').css({'top': '360px', 'left': '365px'});
  $('#mouseBody').css({'top': '400px', 'left': '345px'});
  $('#mouseFloor').css({'top': '456px', 'left': '347px'});
  $('#mouseTail').css({'top': '410px', 'left': '405px'});
  $('#mouseNose').css({'top': '418px', 'left': '328px'});
  $('#mouseWhisker1').css({'top': '423px', 'left': '306px'});
  $('#mouseWhisker2').css({'top': '418px', 'left': '307px'});
  $('#mouseWhisker3').css({'top': '428px', 'left': '308px'});
  $('#mouseWhisker4').css({'top': '426px', 'left': '341px'});
  $('#mouseWhisker5').css({'top': '423px', 'left': '341px'});
  $('#mouseWhisker6').css({'top': '433px', 'left': '341px'});
  $('#mouseLeftPupil').css({'top': '0px', 'left': '2px'});
  $('#mouseRightPupil').css({'top': '0px', 'left': '2px'});    
  }
}
function mouseBack() {
  if ($('.mouse').hasClass('noDisplay')) {    
  }
  else {
  $('#mouseHead').css({'top': '600px', 'left': '690px'});
  $('#mouseLeftEar').css({'top': '572px', 'left': '695px'});
  $('#mouseRightEar').css({'top': '580px', 'left': '735px'});
  $('#mouseBody').css({'top': '620px', 'left': '715px'});
  $('#mouseFloor').css({'top': '676px', 'left': '717px'});
  $('#mouseTail').css({'top': '630px', 'left': '775px'});
  $('#mouseNose').css({'top': '638px', 'left': '698px'});
  $('#mouseWhisker1').css({'top': '643px', 'left': '676px'});
  $('#mouseWhisker2').css({'top': '638px', 'left': '677px'});
  $('#mouseWhisker3').css({'top': '648px', 'left': '678px'});
  $('#mouseWhisker4').css({'top': '646px', 'left': '711px'});
  $('#mouseWhisker5').css({'top': '643px', 'left': '711px'});
  $('#mouseWhisker6').css({'top': '653px', 'left': '711px'});
  $('#mouseLeftPupil').css({'top': '8px', 'left': '2px'});
  $('#mouseRightPupil').css({'top': '8px', 'left': '3px'});     
  }
}
function ratMove() {
  if ($('.rat').hasClass('noDisplay')) {    
  }
  else {
  $('#ratHead').css('transform', 'rotate(-35deg)'); 
  $('#ratNose').css({'top': '578px', 'left': '671px'}); 
  $('#ratLeftEar').css({'top': '480px', 'left': '700px'}); 
  $('#ratRightEar').css({'top': '515px', 'left': '755px'});
  $('#ratLeftTooth').css({'top': '585px', 'left': '671px'});
  $('#ratRightTooth').css({'top': '587px', 'left': '681px'});
  $('#ratWhisker1').css({'top': '573px', 'left': '633px', 'transform': 'rotate(20deg)'}); 
  $('#ratWhisker2').css({'top': '566px', 'left': '639px', 'transform': 'rotate(45deg)'});
  $('#ratWhisker3').css({'top': '584px', 'left': '633px', 'transform': 'rotate(-5deg)'});
  $('#ratWhisker4').css({'top': '605px', 'left': '690px', 'transform': 'rotate(35deg)'});
  $('#ratWhisker5').css({'top': '595px', 'left': '692px', 'transform': 'rotate(10deg)'});
  $('#ratWhisker6').css({'top': '611px', 'left': '681px', 'transform': 'rotate(60deg)'});
  $('#ratLeftPupil').css({'width': '8px', 'height': '8px', 'top': '6px'}); 
  $('#ratRightPupil').css({'width': '8px', 'height': '8px', 'top': '6px'}); 
  $('#ratLaser').css('display','block');
  }
}
function ratBack() {
  if ($('.rat').hasClass('noDisplay')) {    
  }
  else {
  $('#ratHead').css('transform', 'rotate(-55deg)'); 
  $('#ratNose').css({'top': '590px', 'left': '688px'}); 
  $('#ratLeftEar').css({'top': '480px', 'left': '690px'}); 
  $('#ratRightEar').css({'top': '495px', 'left': '755px'});
  $('#ratLeftTooth').css({'top': '597px', 'left': '688px'});
  $('#ratRightTooth').css({'top': '599px', 'left': '698px'});
  $('#ratWhisker1').css({'top': '600px', 'left': '647px', 'transform': 'rotate(0deg)'}); 
  $('#ratWhisker2').css({'top': '590px', 'left': '648px', 'transform': 'rotate(25deg)'});
  $('#ratWhisker3').css({'top': '610px', 'left': '648px', 'transform': 'rotate(-25deg)'});
  $('#ratWhisker4').css({'top': '609px', 'left': '708px', 'transform': 'rotate(15deg)'});
  $('#ratWhisker5').css({'top': '600px', 'left': '708px', 'transform': 'rotate(-10deg)'});
  $('#ratWhisker6').css({'top': '618px', 'left': '705px', 'transform': 'rotate(40deg)'});
  $('#ratLeftPupil').css({'width': '3px', 'height': '3px', 'top': '8px'}); 
  $('#ratRightPupil').css({'width': '3px', 'height': '3px', 'top': '8px'}); 
  $('#ratLaser').css('display','none');
  }
}
function dogMove() {
  if ($('.dog').hasClass('noDisplay')) {    
  }
  else {
  $('#dogHead').css({'left': '170px'});
  $('#dogLeftEar').css({'left': '205px'});
  $('#dogLeftEarBorder1').css({'left': '215px'});
  $('#dogLeftEarBorder2').css({'left': '235px'});
  $('#dogRightEar').css({'left': '283px'});
  $('#dogRightEarBorder1').css({'left': '303px'});
  $('#dogRightEarBorder2').css({'left': '316px'});
  $('#dogBelly').css({'left': '215px'}); 
  $('#dogBody').css({'left': '215px'}); 
  $('#dogFloor').css({'left': '195px'}); 
  $('#dogTail').css({'left': '394px'}); 
  $('#dogNose').css({'left': '191px'});  
  $('#dogNosePoint').css({'left': '193px'}); 
  $('#dogFoot1').css({'left': '195px'});
  $('#dogLeg').css({'left': '263px'}); 
  $('#dogFoot2').css({'left': '234px'}); 
  $('#dogFoot3').css({'left': '289px'});
  $('#leftPupil').css('top', '32px');
  }
}
function dogBack() {
  if ($('.dog').hasClass('noDisplay')) {    
  }
  else {
  $('#dogHead').css({'left': '670px'});
  $('#dogLeftEar').css({'left': '705px'});
  $('#dogLeftEarBorder1').css({'left': '715px'});
  $('#dogLeftEarBorder2').css({'left': '735px'});
  $('#dogRightEar').css({'left': '783px'});
  $('#dogRightEarBorder1').css({'left': '803px'});
  $('#dogRightEarBorder2').css({'left': '816px'});
  $('#dogBelly').css({'left': '715px'}); 
  $('#dogBody').css({'left': '715px'}); 
  $('#dogFloor').css({'left': '695px'}); 
  $('#dogTail').css({'left': '894px'}); 
  $('#dogNose').css({'left': '691px'});  
  $('#dogNosePoint').css({'left': '693px'}); 
  $('#dogFoot1').css({'left': '695px'});
  $('#dogLeg').css({'left': '763px'}); 
  $('#dogFoot2').css({'left': '734px'}); 
  $('#dogFoot3').css({'left': '789px'});
  $('#leftPupil').css('top', '22px');    
  }
}
function wolfMove() {
  if ($('.wolf').hasClass('noDisplay')) {    
  }
  else {
  $('#wolfHead').css({'top': '320px', 'left': '520px', 'transform': 'rotate(-150deg)'}); 
  $('#wolfRightEye').css({'display': 'none'});  
  $('#wolfLeftEye').css({'top': '70px', 'left': '100px'}); 
  $('#wolfLeftPupil').css({'top': '20px', 'left': '40px'});  
  $('#wolfRightEarBorder1').css({'left': '727px'}); 
  $('#wolfRightEarBorder2').css({'left': '737px'}); 
  $('#wolfRightEar').css({'left': '690px'});
  $('#wolfNose').css({'top': '315px', 'left': '520px', 'width': '40px', 'transform': 'rotate(30deg)', 'border-radius': '50%'});     
  $('#wolfNosePoint').css({'display': 'none'}); 
  $('#wolfLeftToothLeft').css({'display': 'none'}); 
  $('#wolfLeftToothRight').css({'display': 'none'});
  $('#wolfRightToothLeft').css({'display': 'none'}); 
  $('#wolfRightToothRight').css({'display': 'none'}); 
  $('#wolfMouth').css({'display': 'block'});
  $('#wolfFoot1').css({'left': '585px'});  
  $('#wolfLeg').css({'left': '675px'});     
  $('#wolfFoot2').css({'left': '634px'}); 
  $('#wolfFoot3').css({'left': '710px'});
  $('#wolfBelly').css({'width': '140px'});
  $('#wolfFloor').css({'width': '232px', 'left': '585px'});  
  $('#wolfHowl').css({'display': 'block'});    
  }
}
function wolfBack() {
  if ($('.wolf').hasClass('noDisplay')) {    
  }
  else {
  $('#wolfHead').css({'top': '370px', 'left': '550px',  'transform': 'rotate(-55deg)'});  
  $('#wolfRightEye').css({'display': 'block'}); 
  $('#wolfLeftEye').css({'top': '-10px','left': '75px'});  
  $('#wolfLeftPupil').css({'top': '6px', 'left': '6px'});  
  $('#wolfRightEarBorder1').css({'left': '757px'}); 
  $('#wolfRightEarBorder2').css({'left': '767px'}); 
  $('#wolfRightEar').css({'left': '720px'});
  $('#wolfNose').css({'top': '499px', 'left': '583px', 'width': '65px', 'transform': 'rotate(18deg)', 'border-radius': '40%'});    
  $('#wolfNosePoint').css({'display': 'block'}); 
  $('#wolfLeftToothLeft').css({'display': 'block'}); 
  $('#wolfLeftToothRight').css({'display': 'block'});
  $('#wolfRightToothLeft').css({'display': 'block'}); 
  $('#wolfRightToothRight').css({'display': 'block'});
  $('#wolfMouth').css({'display': 'none'});
  $('#wolfFoot1').css({'left': '575px'});  
  $('#wolfLeg').css({'left': '685px'});     
  $('#wolfFoot2').css({'left': '644px'}); 
  $('#wolfFoot3').css({'left': '720px'});
  $('#wolfBelly').css({'width': '150px'}); 
  $('#wolfFloor').css({'width': '242px', 'left': '575px'});
  $('#wolfHowl').css({'display': 'none'}); 
  }
}
function goblinMove() {
  if ($('.goblin').hasClass('noDisplay')) {    
  }
  else {
  $('#goblinRightArm').css({'top': '427px', 'transform': 'rotate(80deg)'}); 
  $('#goblinWeapon2').css({'left': '250px', 'transform': 'rotate(-80deg)'});  
  $('#goblinHilt2').css({'top': '415px', 'left': '260px', 'transform': 'rotate(10deg)'});    
  }
}
function goblinBack() {
  if ($('.goblin').hasClass('noDisplay')) {    
  }
  else {
  $('#goblinRightArm').css({'top': '409px', 'transform': 'rotate(110deg)'}); 
  $('#goblinWeapon2').css({'left': '595px', 'transform': 'rotate(20deg)'});  
  $('#goblinHilt2').css({'top': '419px', 'left': '593px', 'transform': 'rotate(110deg)'});    
  }
}
function orcMove() {
  if ($('.orc').hasClass('noDisplay')) {    
  }
  else {
  $('#orcRightArm').css({'top': '345px', 'left': '615px', 'transform': 'rotate(65deg)'}); 
  $('#orcAxeHead').css({'top': '270px', 'left': '500px', 'transform': 'rotate(-115deg)'});  
  $('#orcAxeHandle').css({'top': '270px', 'left': '565px', 'transform': 'rotate(-25deg)'});    
  }  
}
function orcBack() {
  if ($('.orc').hasClass('noDisplay')) {    
  }
  else {
  $('#orcRightArm').css({'top': '300px', 'left': '620px', 'transform': 'rotate(110deg)'}); 
  $('#orcAxeHead').css({'top': '200px', 'left': '580px', 'transform': 'rotate(-70deg)'});  
  $('#orcAxeHandle').css({'top': '200px', 'left': '610px', 'transform': 'rotate(20deg)'});    
  }  
}
function ogreMove() {
  if ($('.ogre').hasClass('noDisplay')) {    
  }
  else {
  $('#ogreRightArm').css({'top': '305px', 'left': '613px', 'transform': 'rotate(65deg)'}); 
  $('#ogreWeaponHead').css({'top': '180px', 'left': '480px', 'transform': 'rotate(-25deg)'});  
  $('#ogreWeaponHandle').css({'top': '245px', 'left': '555px', 'transform': 'rotate(-25deg)'});   
  }  
}
function ogreBack() {
  if ($('.ogre').hasClass('noDisplay')) {    
  }
  else {
  $('#ogreRightArm').css({'top': '275px', 'left': '610px', 'transform': 'rotate(90deg)'}); 
  $('#ogreWeaponHead').css({'top': '135px', 'left': '545px', 'transform': 'rotate(0deg)'});  
  $('#ogreWeaponHandle').css({'top': '200px', 'left': '580px', 'transform': 'rotate(0deg)'});    
  }  
}
function heroMove() {
  $('#weapon').css({'left': '345px','top':'270px', 'transform':'rotate(40deg)'}); 
  $('#hilt').css({'left': '306px', 'top':'389px', 'transform':'rotate(40deg)'});
  $('#hitsplat').css('display','block');
  $('#hit').css('display','block');
  $('#rightEye').css('display', 'none');
  $('#leftEye').css('left', '53px');
  $('#leftPupil').css({'left': '27px', 'top': '22px'}); 
  $('#leftEyebrow').css('transform', 'rotate(25deg)');  
  $('#leftArm').css('left', '202px');  
  $('#rightArm').css({'transform': 'rotate(45deg)', 'left': '218px', 'top': '362px'});
  $('#shield').css('left', '220px');
  $('#leftLeg').css('left', '200px');
  $('#rightLeg').css({'left': '215px', 'top': '511px', 'height': '120px'});
  $('#leftFoot').css('left', '204px');
  $('#leftSole').css('left', '204px'); 
  $('#rightFoot').css({'left': '218px', 'top': '618px'});
  $('#rightSole').css({'left': '218px', 'top': '630px'});  

}
function heroBack() {
  $('#weapon').css({'left': '340px', 'top': '202px', 'transform': 'rotate(0deg)'}); 
  $('#hilt').css({'left': '332px', 'top': '330px', 'transform': 'rotate(0deg)'});
  $('#rightArm').css({'transform': 'rotate(0deg)', 'left': '241px', 'top': '339px'});
  $('#hitsplat').css('display','none');
  $('#hit').css('display','none');
}
// event handler
$(document).ready(function(){
    $('#attackButtonDiv').on('click', 'button', function() {
    heroMove();
    setTimeout(function() {
      heroBack();
    }, [500]);
    setTimeout(function() {
      ratMove();
      mouseMove();
      dogMove();
      wolfMove();
      goblinMove();
      orcMove();
      ogreMove();
      $('#enemysplat').css('display','block');
      $('#enemyhit').css('display','block');
      $('#leftEyebrow').css('transform', 'rotate(-5deg)'); 
      setTimeout(function() {
        ratBack(); 
        mouseBack();
        dogBack();
        wolfBack();
        goblinBack();
        orcBack();
        ogreBack();
        $('#enemysplat').css('display','none');
        $('#enemyhit').css('display','none');
        $('#leftEyebrow').css('transform', 'rotate(25deg)'); 
        $('.eye').css('background-color', 'white'); 
        $('#shield').css({'width': '100px', 'height': '100px'}); 
      }, [500]);
    }, [600]);
  });  
});
$(document).ready(function(){
  $('#close').on('click', 'button', function() {
  $('#wrapper').addClass('noDisplay');
  $('#stock').removeClass('noDisplay');
  document.getElementById("close").style.visibility='hidden';
  fighting = false;    //ends the fight
  character.sendData();
  });
});
function Character() {
  this.level = 1;
  this.nextLevelXp = 10;
  this.xp = 0;
  this.hp = 15;
  this.equipHp = 0;
  this.baseMaxHp = 15;
  this.maxHp = this.equipHp + this.baseMaxHp;
  this.baseStr = 1;  
  this.baseHit = 1;
  this.equipStr = 1;
  this.equipHit = 0; 
  this.baseDef = 1;
  this.baseDodge = 1;
  this.equipDef = this.chestDef + this.legDef + this.helmDef;
  this.equipDodge = this.shieldDodge + this.bootDodge;
  this.chestDef = 0; 
  this.legDef = 1;   
  this.helmDef = 0;
  this.shieldDodge = 0;
  this.bootDodge = 1;
  this.baseLuck = 1;
  this.equipLuck = 0;
  this.str = this.baseStr + this.equipStr;
  this.hit = this.baseHit + this.equipHit;
  this.def = this.baseDef + this.equipDef;
  this.dodge = this.baseDodge + this.equipDodge;  
  this.luck = this.baseLuck + this.equipLuck;
  this.use = use;
  this.weapon = " Stick";
  this.shield = "None";
  this.helm = "None";
  this.chest = "None"; 
  this.legs = " Swimming Trunks";
  this.gloves = "None";
  this.boots = " Sandals"; 
  this.ring = "None";
  this.amulet = "None";  
  this.points = 2;
  this.gold = 10;
  this.equipment = [];
  this.energy = 20;
  this.maxEnergy = 20;
  this.updateTime = updateTime;
  this.healthRegen = healthRegen;
  this.strPlus = strPlus;
  this.hitPlus = hitPlus;
  this.dodgePlus = dodgePlus;
  this.defPlus = defPlus;
  this.luckPlus = luckPlus;
  this.checkLevel = checkLevel;
  this.fight = fight;
  this.lowDrop = lowDrop;
  this.select = select;
  this.find = find;
  this.selectShop = selectShop;
  this.findShop = findShop;
  this.buy = buy;
  this.sell = sell;
  this.changeStock = changeStock;
  this.setStock = setStock;
  this.findTier = findTier;
  this.selectTier = selectTier;
  this.updateStatus = updateStatus;
  this.welcome = welcome;
  this.sendData = sendData;
}
function welcome() {
  if (document.querySelector('#level_value')!=null) {
  var levelValue = document.querySelector('#level_value').value;
  this.level = levelValue;
//  this.level += 0;
//  this.level = this.level/10;  
  display_level.innerHTML = "Your level is " + this.level;
  var xpValue = document.querySelector('#xp_value').value;
  this.xp = xpValue;
  this.xp += 0;
  this.xp = this.xp/10;  
  display_Xp.innerHTML = "Experience Points: " + this.xp;
  var next_level_xpValue = document.querySelector('#next_level_xp_value').value;
  this.nextLevelXp = next_level_xpValue;
//  this.nextLevelXp += 0;
//  this.nextLevelXp = this.nextLevelXp/10;  
  display_NextLevelAt.innerHTML = "Next Level at: " + this.nextLevelXp;  
  var energyValue = document.querySelector('#energy_value').value;
  this.energy = energyValue;
  this.energy += 0;
  this.energy = this.energy/10;  
  var max_energyValue = document.querySelector('#max_energy_value').value;
  this.maxEnergy = max_energyValue;
  this.maxEnergy += 0;
  this.maxEnergy = this.maxEnergy/10;    
  display_energy.innerHTML = "Energy: " + this.energy + "/" + this.maxEnergy;  
  var hpValue = document.querySelector('#hp_value').value;
  this.hp = hpValue;
  this.hp += 0;
  this.hp = this.hp/10;  
  var max_hpValue = document.querySelector('#max_hp_value').value;
  this.maxHp = max_hpValue;
  this.maxHp += 0;
  this.maxHp = this.maxHp/10;   
  var base_max_hpValue = document.querySelector('#base_max_hp_value').value;
  this.baseMaxHp = base_max_hpValue;
  this.baseMaxHp += 0;
  this.baseMaxHp = this.baseMaxHp/10;
  var equip_max_hpValue = document.querySelector('#equip_max_hp_value').value;
  this.equipHp = equip_max_hpValue;
  this.equipHp += 0;
  this.equipHp = this.equipHp/10;
  display_HP.innerHTML = "Health: " + this.hp + "/" + this.maxHp;     
  var strengthValue = document.querySelector('#strength_value').value;
  this.str = strengthValue;
  this.str += 0;
  this.str = this.str/10;  
  display_strength.innerHTML = "You have " + this.str + " Strength";
  var baseStrengthValue = document.querySelector('#base_strength_value').value;
  this.baseStr = baseStrengthValue;
  this.baseStr += 0;
  this.baseStr = this.baseStr/10; 
  var equipStrengthValue = document.querySelector('#equip_strength_value').value;
  this.equipStr = equipStrengthValue;
  this.equipStr += 0;
  this.equipStr = this.equipStr/10;
  var hitValue = document.querySelector('#hit_value').value;
  this.hit = hitValue;
  this.hit += 0;
  this.hit = this.hit/10;  
  display_hit.innerHTML = "You have " + this.hit + " Accuracy";
  var baseHitValue = document.querySelector('#base_hit_value').value;
  this.baseHit = baseHitValue;
  this.baseHit += 0;
  this.baseHit = this.baseHit/10; 
  var equipHitValue = document.querySelector('#equip_hit_value').value;
  this.equipHit = equipHitValue;
  this.equipHit += 0;
  this.equipHit = this.equipHit/10; 
  var defenceValue = document.querySelector('#defence_value').value;
  this.def = defenceValue;
  this.def += 0;
  this.def = this.def/10;  
  display_def.innerHTML = "You have " + this.def + " Defence";
  var baseDefenceValue = document.querySelector('#base_defence_value').value;
  this.baseDef = baseDefenceValue;
  this.baseDef += 0;
  this.baseDef = this.baseDef/10; 
  var equipDefenceValue = document.querySelector('#equip_defence_value').value;
  this.equipDef = equipDefenceValue;
  this.equipDef += 0;
  this.equipDef = this.equipDef/10;  
  var chestDefenceValue = document.querySelector('#chest_defence_value').value;
  this.chestDef = chestDefenceValue;
  this.chestDef += 0;
  this.chestDef = this.chestDef/10; 
  var legDefenceValue = document.querySelector('#leg_defence_value').value;
  this.legDef = legDefenceValue;
  this.legDef += 0;
  this.legDef = this.legDef/10;  
  var helmDefenceValue = document.querySelector('#helm_defence_value').value;
  this.helmDef = helmDefenceValue;
  this.helmDef += 0;
  this.helmDef = this.helmDef/10;  
  var evadeValue = document.querySelector('#evade_value').value;
  this.dodge = evadeValue;
  this.dodge += 0;
  this.dodge = this.dodge/10;  
  display_dodge.innerHTML = "You have " + this.dodge + " Evade";
  var baseEvadeValue = document.querySelector('#base_evade_value').value;
  this.baseDodge = baseEvadeValue;
  this.baseDodge += 0;
  this.baseDodge = this.baseDodge/10; 
  var equipEvadeValue = document.querySelector('#equip_evade_value').value;
  this.equipDodge = equipEvadeValue;
  this.equipDodge += 0;
  this.equipDodge = this.equipDodge/10;
  var shieldEvadeValue = document.querySelector('#shield_evade_value').value;
  this.shieldDodge = shieldEvadeValue;
  this.shieldDodge += 0;
  this.shieldDodge = this.shieldDodge/10;   
  var bootEvadeValue = document.querySelector('#boot_evade_value').value;
  this.bootDodge = bootEvadeValue;
  this.bootDodge += 0;
  this.bootDodge = this.bootDodge/10;        
  var luckValue = document.querySelector('#luck_value').value;
  this.luck = luckValue;
  this.luck += 0;
  this.luck = this.luck/10;  
  display_luck.innerHTML = "You have " + this.luck + " Luck";
  var baseLuckValue = document.querySelector('#base_luck_value').value;
  this.baseLuck = baseLuckValue;
  this.baseLuck += 0;
  this.baseLuck = this.baseLuck/10; 
  var equipLuckValue = document.querySelector('#equip_luck_value').value;
  this.equipLuck = equipLuckValue;
  this.equipLuck += 0;
  this.equipLuck = this.equipLuck/10;   
  var equipmentValue = document.querySelector('#equipment_value').value;
  this.equipment = equipmentValue.split(",");  
  if (this.equipment[0] === "") {
    this.equipment.splice(0, 1);
  }
  display_Equipment.innerHTML = "Equipment:" + this.equipment;      
  var goldValue = document.querySelector('#gold_value').value;
  this.gold = goldValue;
  this.gold += 0;
  this.gold = this.gold/10;  
  display_Gold.innerHTML = "Gold: " + this.gold;
  var weaponValue = document.querySelector('#weapon_value').value;
  this.weapon = weaponValue;
  display_Weapon.innerHTML = "Weapon:" + this.weapon;
  var shieldValue = document.querySelector('#shield_value').value;
  this.shield = shieldValue;  
  display_Shield.innerHTML = "Shield:" + this.shield;
  var helmValue = document.querySelector('#helm_value').value;
  this.helm = helmValue;  
  display_Helm.innerHTML = "Helm:" + this.helm;  
  var chestValue = document.querySelector('#chest_value').value;
  this.chest = chestValue;  
  display_Chest.innerHTML = "Chest:" + this.chest;
  var legsValue = document.querySelector('#legs_value').value;
  this.legs = legsValue;  
  display_Legs.innerHTML = "Legs:" + this.legs;
  var glovesValue = document.querySelector('#gloves_value').value;
  this.gloves = glovesValue;  
  display_Gloves.innerHTML = "Gloves:" + this.gloves;
  var bootsValue = document.querySelector('#boots_value').value;
  this.boots = bootsValue;
  display_Boots.innerHTML = "Boots:" + this.boots;  
  var ringValue = document.querySelector('#ring_value').value;
  this.ring = ringValue;
  display_Ring.innerHTML = "Ring:" + this.ring;
  var amuletValue = document.querySelector('#amulet_value').value;
  this.amulet = amuletValue; 
  display_Amulet.innerHTML = "Amulet:" + this.amulet;
  var mouseKillsValue = document.querySelector('#mouse_kills_value').value;
  mouse.defeats = mouseKillsValue;
  var ratKillsValue = document.querySelector('#rat_kills_value').value;
  rat.defeats = ratKillsValue;  
  var dogKillsValue = document.querySelector('#dog_kills_value').value;
  dog.defeats = dogKillsValue; 
  var wolfKillsValue = document.querySelector('#wolf_kills_value').value;
  wolf.defeats = wolfKillsValue;  
  var goblinKillsValue = document.querySelector('#goblin_kills_value').value;
  goblin.defeats = goblinKillsValue;   
  var orcKillsValue = document.querySelector('#orc_kills_value').value;
  orc.defeats = orcKillsValue; 
  var ogreKillsValue = document.querySelector('#ogre_kills_value').value;
  ogre.defeats = ogreKillsValue;
  var pointsValue = document.querySelector('#points_value').value;
  this.points = pointsValue;
  this.points += 0;
  this.points = this.points/10;
  display_points.innerHTML = "You have " + this.points + " Attribute Points to spend."   
  var potionPriceValue = document.querySelector('#potion_price_value').value;
  potionPrice = potionPriceValue;
  potionPrice += 0;
  potionPrice = potionPrice/10;    
  var hpTime = document.querySelector('#hp_time_value').value;
  hpStartDate = new Date(hpTime);
  var energyTime = document.querySelector('#energy_time_value').value;
  startDate = new Date(energyTime);  
  result.innerHTML = document.querySelector('#message_value').value;  
  other.innerHTML = document.querySelector('#othermessage_value').value;
  TierNumber = document.querySelector('#shopTier_value').value;  
  character.setStock(); 
  } 
}
function sendData() {
  levelValue = this.level;
  document.querySelector('#level_value').value = levelValue;
  xpValue = this.xp;
  document.querySelector('#xp_value').value = xpValue;      
  document.querySelector('#next_level_xp_value').value = this.nextLevelXp;   
  document.querySelector('#energy_value').value = this.energy; 
  document.querySelector('#max_energy_value').value = this.maxEnergy;
  document.querySelector('#hp_value').value = this.hp;
  document.querySelector('#max_hp_value').value = this.maxHp;
  document.querySelector('#base_max_hp_value').value = this.baseMaxHp;
  document.querySelector('#equip_max_hp_value').value = this.equipHp;
  document.querySelector('#strength_value').value = this.str;
  document.querySelector('#base_strength_value').value = this.baseStr;
  document.querySelector('#equip_strength_value').value = this.equipStr;
  document.querySelector('#hit_value').value = this.hit;
  document.querySelector('#base_hit_value').value = this.baseHit;
  document.querySelector('#equip_hit_value').value = this.equipHit;  
  document.querySelector('#defence_value').value = this.def;
  document.querySelector('#base_defence_value').value = this.baseDef;
  document.querySelector('#equip_defence_value').value = this.equipDef;  
  document.querySelector('#chest_defence_value').value = this.chestDef;
  document.querySelector('#leg_defence_value').value = this.legDef;
  document.querySelector('#helm_defence_value').value = this.helmDef;
  document.querySelector('#evade_value').value = this.dodge;
  document.querySelector('#base_evade_value').value = this.baseDodge;
  document.querySelector('#equip_evade_value').value = this.equipDodge;         
  document.querySelector('#shield_evade_value').value = this.shieldDodge;
  document.querySelector('#boot_evade_value').value = this.bootDodge;
  document.querySelector('#luck_value').value = this.luck;
  document.querySelector('#base_luck_value').value = this.baseLuck;
  document.querySelector('#equip_luck_value').value = this.equipLuck;
  document.querySelector('#equipment_value').value = this.equipment.toString();             
  document.querySelector('#gold_value').value = this.gold;
  document.querySelector('#weapon_value').value = this.weapon;  
  document.querySelector('#shield_value').value = this.shield;  
  document.querySelector('#helm_value').value = this.helm;  
  document.querySelector('#chest_value').value = this.chest;  
  document.querySelector('#legs_value').value = this.legs;  
  document.querySelector('#gloves_value').value = this.gloves; 
  document.querySelector('#boots_value').value = this.boots; 
  document.querySelector('#ring_value').value = this.ring;
  document.querySelector('#amulet_value').value = this.amulet;
  document.querySelector('#mouse_kills_value').value = (mouse.levelUps*5) + mouse.defeats;  
  document.querySelector('#rat_kills_value').value = (rat.levelUps*5) + rat.defeats;  
  document.querySelector('#dog_kills_value').value = (dog.levelUps*5) + dog.defeats;  
  document.querySelector('#wolf_kills_value').value = (wolf.levelUps*5) + wolf.defeats;  
  document.querySelector('#goblin_kills_value').value = (goblin.levelUps*5) + goblin.defeats;  
  document.querySelector('#orc_kills_value').value = (orc.levelUps*5) + orc.defeats;  
  document.querySelector('#ogre_kills_value').value = (ogre.levelUps*5) + ogre.defeats;  
  document.querySelector('#potion_price_value').value = potionPrice; 
  document.querySelector('#points_value').value = this.points;
  document.querySelector('#hp_time_value').value = hpStartDate; 
  document.querySelector('#energy_time_value').value = startDate; 
  document.querySelector('#message_value').value = result.innerHTML;  
  document.querySelector('#othermessage_value').value = other.innerHTML;   
  document.querySelector('#shopTier_value').value = TierNumber;   
  $("#send_form").trigger("submit.rails");
}
var character = new Character();

window.onload = function() {
  character.welcome();
  character.updateStatus();
};
