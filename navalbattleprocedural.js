const A0 = document.getElementById("0");
const A1 = document.getElementById("1");
const A2 = document.getElementById("2");
const A3 = document.getElementById("3");
const A4 = document.getElementById("4");
const A5 = document.getElementById("5");
const A6 = document.getElementById("6");
const B0 = document.getElementById("7");
const B1 = document.getElementById("8");
const B2 = document.getElementById("9");
const B3 = document.getElementById("10");
const B4 = document.getElementById("11");
const B5 = document.getElementById("12");
const B6 = document.getElementById("13");
const C0 = document.getElementById("14");
const C1 = document.getElementById("15");
const C2 = document.getElementById("16");
const C3 = document.getElementById("17");
const C4 = document.getElementById("18");
const C5 = document.getElementById("19");
const C6 = document.getElementById("20");
const D0 = document.getElementById("21");
const D1 = document.getElementById("22");
const D2 = document.getElementById("23");
const D3 = document.getElementById("24");
const D4 = document.getElementById("25");
const D5 = document.getElementById("26");
const D6 = document.getElementById("27");
const E0 = document.getElementById("28");
const E1 = document.getElementById("29");
const E2 = document.getElementById("30");
const E3 = document.getElementById("31");
const E4 = document.getElementById("32");
const E5 = document.getElementById("33");
const E6 = document.getElementById("34");
const F0 = document.getElementById("35");
const F1 = document.getElementById("36");
const F2 = document.getElementById("37");
const F3 = document.getElementById("38");
const F4 = document.getElementById("39");
const F5 = document.getElementById("40");
const F6 = document.getElementById("41");
const G0 = document.getElementById("42");
const G1 = document.getElementById("43");
const G2 = document.getElementById("44");
const G3 = document.getElementById("45");
const G4 = document.getElementById("46");
const G5 = document.getElementById("47");
const G6 = document.getElementById("48");
const nships = document.getElementById("ships");
const nguesses = document.getElementById("guesses");
const intro = document.getElementById("intro");
const gameboard = document.getElementById("gameboard");
const scoreboard = document.getElementById("scoreboard");

function switcher() {
  if (intro.className != "hide") {
    intro.setAttribute("class", "hide");
    gameboard.setAttribute("class", "main main--grid");
    scoreboard.setAttribute("class", "dashboard");
  }
}

setTimeout(switcher, 1000);

var loca = [];
function randloc() {
  loca[0] = Math.floor(Math.random() * 49);
  loca[1] = Math.floor(Math.random() * 49);
  loca[2] = Math.floor(Math.random() * 49);
  if (loca[0] == loca[1] || loca[0] == loca[2] || loca[1] == loca[2]) {
    loca[0] = Math.floor(Math.random() * 49);
    loca[1] = Math.floor(Math.random() * 49);
    loca[2] = Math.floor(Math.random() * 49);
  }
}

randloc();

var idVal;
var guesses = 14;
var ships = 3;

function update() {
  nships.innerHTML = ships;
  nguesses.innerHTML = guesses;
}

function checker(e) {
  const tg = e.target;
  idVal = tg.id;
  for (var i = 0; i <= guesses; i++) {
    if (idVal == loca[0] || idVal == loca[1] || idVal == loca[2]) {
      if (idVal == A0.id) {
        A0.setAttribute("class", "hit");
        A0.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == A1.id) {
        A1.setAttribute("class", "hit");
        A1.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == A2.id) {
        A2.setAttribute("class", "hit");
        A2.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == A3.id) {
        A3.setAttribute("class", "hit");
        A3.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();

          break;
        }
        break;
      }
      if (idVal == A4.id) {
        A4.setAttribute("class", "hit");
        A4.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == A5.id) {
        A5.setAttribute("class", "hit");
        A5.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == A6.id) {
        A6.setAttribute("class", "hit");
        A6.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == B0.id) {
        B0.setAttribute("class", "hit");
        B0.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == B1.id) {
        B1.setAttribute("class", "hit");
        B1.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == B2.id) {
        B2.setAttribute("class", "hit");
        B2.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == B3.id) {
        B3.setAttribute("class", "hit");
        B3.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == B4.id) {
        B4.setAttribute("class", "hit");
        B4.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == B5.id) {
        B5.setAttribute("class", "hit");
        B5.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == B6.id) {
        B6.setAttribute("class", "hit");
        B6.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == C0.id) {
        C0.setAttribute("class", "hit");
        C0.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == C1.id) {
        C1.setAttribute("class", "hit");
        C1.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == C2.id) {
        C2.setAttribute("class", "hit");
        C2.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == C3.id) {
        C3.setAttribute("class", "hit");
        C3.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == C4.id) {
        C4.setAttribute("class", "hit");
        C4.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == C5.id) {
        C5.setAttribute("class", "hit");
        C5.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == C6.id) {
        C6.setAttribute("class", "hit");
        C6.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == D0.id) {
        D0.setAttribute("class", "hit");
        D0.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == D1.id) {
        D1.setAttribute("class", "hit");
        D1.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == D2.id) {
        D2.setAttribute("class", "hit");
        D2.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == D3.id) {
        D3.setAttribute("class", "hit");
        D3.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == D4.id) {
        D4.setAttribute("class", "hit");
        D4.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == D5.id) {
        D5.setAttribute("class", "hit");
        D5.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == D6.id) {
        D6.setAttribute("class", "hit");
        D6.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == E0.id) {
        E0.setAttribute("class", "hit");
        E0.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == E1.id) {
        E1.setAttribute("class", "hit");
        E1.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == E2.id) {
        E2.setAttribute("class", "hit");
        E2.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == E3.id) {
        E3.setAttribute("class", "hit");
        E3.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == E4.id) {
        E4.setAttribute("class", "hit");
        E4.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == E5.id) {
        E5.setAttribute("class", "hit");
        E5.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == E6.id) {
        E6.setAttribute("class", "hit");
        E6.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == F0.id) {
        F0.setAttribute("class", "hit");
        F0.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == F1.id) {
        F1.setAttribute("class", "hit");
        F1.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == F2.id) {
        F2.setAttribute("class", "hit");
        F2.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == F3.id) {
        F3.setAttribute("class", "hit");
        F3.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == F4.id) {
        F4.setAttribute("class", "hit");
        F4.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == F5.id) {
        F5.setAttribute("class", "hit");
        F5.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == F6.id) {
        F6.setAttribute("class", "hit");
        F6.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == G0.id) {
        G0.setAttribute("class", "hit");
        G0.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == G1.id) {
        G1.setAttribute("class", "hit");
        G1.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == G2.id) {
        G2.setAttribute("class", "hit");
        G2.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == G3.id) {
        G3.setAttribute("class", "hit");
        G3.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == G4.id) {
        G4.setAttribute("class", "hit");
        G4.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == G5.id) {
        G5.setAttribute("class", "hit");
        G5.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
      if (idVal == G6.id) {
        G6.setAttribute("class", "hit");
        G6.setAttribute("disabled", "true");
        ships--;
        guesses--;
        update();
        if (ships == 0) {
          alert("All Ships Destroyed");
          alert("Game Over");
          location.reload();
          break;
        }
        if (i == guesses) {
          alert(ships + " ship(s) left");
          alert("Mission Failed");
          location.reload();
          break;
        }
        break;
      }
    } else {
      if (e.target == A0) {
        A0.setAttribute("class", "miss");
        A0.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == A1) {
        A1.setAttribute("class", "miss");
        A1.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == A2) {
        A2.setAttribute("class", "miss");
        A2.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == A3) {
        A3.setAttribute("class", "miss");
        A3.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == A4) {
        A4.setAttribute("class", "miss");
        A4.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == A5) {
        A5.setAttribute("class", "miss");
        A5.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == A6) {
        A6.setAttribute("class", "miss");
        A6.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == B0) {
        B0.setAttribute("class", "miss");
        B0.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == B1) {
        B1.setAttribute("class", "miss");
        B1.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == B2) {
        B2.setAttribute("class", "miss");
        B2.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == B3) {
        B3.setAttribute("class", "miss");
        B3.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == B4) {
        B4.setAttribute("class", "miss");
        B4.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == B5) {
        B5.setAttribute("class", "miss");
        B5.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == B6) {
        B6.setAttribute("class", "miss");
        B6.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == C0) {
        C0.setAttribute("class", "miss");
        C0.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == C1) {
        C1.setAttribute("class", "miss");
        C1.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == C2) {
        C2.setAttribute("class", "miss");
        C2.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == C3) {
        C3.setAttribute("class", "miss");
        C3.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == C4) {
        C4.setAttribute("class", "miss");
        C4.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == C5) {
        C5.setAttribute("class", "miss");
        C5.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == C6) {
        C6.setAttribute("class", "miss");
        C6.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == D0) {
        D0.setAttribute("class", "miss");
        D0.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == D1) {
        D1.setAttribute("class", "miss");
        D1.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == D2) {
        D2.setAttribute("class", "miss");
        D2.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == D3) {
        D3.setAttribute("class", "miss");
        D3.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == D4) {
        D4.setAttribute("class", "miss");
        D4.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == D5) {
        D5.setAttribute("class", "miss");
        D5.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == D6) {
        D6.setAttribute("class", "miss");
        D6.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == E0) {
        E0.setAttribute("class", "miss");
        E0.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == E1) {
        E1.setAttribute("class", "miss");
        E1.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == E2) {
        E2.setAttribute("class", "miss");
        E2.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == E3) {
        E3.setAttribute("class", "miss");
        E3.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == E4) {
        E4.setAttribute("class", "miss");
        E4.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == E5) {
        E5.setAttribute("class", "miss");
        E5.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == E6) {
        E6.setAttribute("class", "miss");
        E6.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == F0) {
        F0.setAttribute("class", "miss");
        F0.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == F1) {
        F1.setAttribute("class", "miss");
        F1.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == F2) {
        F2.setAttribute("class", "miss");
        F2.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == F3) {
        F3.setAttribute("class", "miss");
        F3.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == F4) {
        F4.setAttribute("class", "miss");
        F4.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == F5) {
        F5.setAttribute("class", "miss");
        F5.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == F6) {
        F6.setAttribute("class", "miss");
        F6.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == G0) {
        G0.setAttribute("class", "miss");
        G0.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == G1) {
        G1.setAttribute("class", "miss");
        G1.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == G2) {
        G2.setAttribute("class", "miss");
        G2.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == G3) {
        G3.setAttribute("class", "miss");
        G3.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == G4) {
        G4.setAttribute("class", "miss");
        G4.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == G5) {
        G5.setAttribute("class", "miss");
        G5.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
      if (e.target == G6) {
        G6.setAttribute("class", "miss");
        G6.setAttribute("disabled", "true");
        guesses--;
        update();
        if (i == guesses) {
          alert("Mission Failed");
          alert(ships + " ship(s) left");
          location.reload();
          break;
        }
        break;
      }
    }
  }
}

A0.addEventListener("click", checker);
A1.addEventListener("click", checker);
A2.addEventListener("click", checker);
A3.addEventListener("click", checker);
A4.addEventListener("click", checker);
A5.addEventListener("click", checker);
A6.addEventListener("click", checker);
B0.addEventListener("click", checker);
B1.addEventListener("click", checker);
B2.addEventListener("click", checker);
B3.addEventListener("click", checker);
B4.addEventListener("click", checker);
B5.addEventListener("click", checker);
B6.addEventListener("click", checker);
C0.addEventListener("click", checker);
C1.addEventListener("click", checker);
C2.addEventListener("click", checker);
C3.addEventListener("click", checker);
C4.addEventListener("click", checker);
C5.addEventListener("click", checker);
C6.addEventListener("click", checker);
D0.addEventListener("click", checker);
D1.addEventListener("click", checker);
D2.addEventListener("click", checker);
D3.addEventListener("click", checker);
D4.addEventListener("click", checker);
D5.addEventListener("click", checker);
D6.addEventListener("click", checker);
E0.addEventListener("click", checker);
E1.addEventListener("click", checker);
E2.addEventListener("click", checker);
E3.addEventListener("click", checker);
E4.addEventListener("click", checker);
E5.addEventListener("click", checker);
E6.addEventListener("click", checker);
F0.addEventListener("click", checker);
F1.addEventListener("click", checker);
F2.addEventListener("click", checker);
F3.addEventListener("click", checker);
F4.addEventListener("click", checker);
F5.addEventListener("click", checker);
F6.addEventListener("click", checker);
G0.addEventListener("click", checker);
G1.addEventListener("click", checker);
G2.addEventListener("click", checker);
G3.addEventListener("click", checker);
G4.addEventListener("click", checker);
G5.addEventListener("click", checker);
G6.addEventListener("click", checker);
