const _0 = document.getElementById("0");
const _1 = document.getElementById("1");
const _2 = document.getElementById("2");
const _3 = document.getElementById("3");
const _4 = document.getElementById("4");
const _5 = document.getElementById("5");
const _6 = document.getElementById("6");
const _7 = document.getElementById("7");
const _8 = document.getElementById("8");
const _9 = document.getElementById("9");
const _10 = document.getElementById("10");
const _11 = document.getElementById("11");
const _12 = document.getElementById("12");
const _13 = document.getElementById("13");
const _14 = document.getElementById("14");
const _15 = document.getElementById("15");
const _16 = document.getElementById("16");
const _17 = document.getElementById("17");
const _18 = document.getElementById("18");
const _19 = document.getElementById("19");
const _20 = document.getElementById("20");
const _21 = document.getElementById("21");
const _22 = document.getElementById("22");
const _23 = document.getElementById("23");
const _24 = document.getElementById("24");
const _25 = document.getElementById("25");
const _26 = document.getElementById("26");
const _27 = document.getElementById("27");
const _28 = document.getElementById("28");
const _29 = document.getElementById("29");
const _30 = document.getElementById("30");
const _31 = document.getElementById("31");
const _32 = document.getElementById("32");
const _33 = document.getElementById("33");
const _34 = document.getElementById("34");
const _35 = document.getElementById("35");
const _36 = document.getElementById("36");
const _37 = document.getElementById("37");
const _38 = document.getElementById("38");
const _39 = document.getElementById("39");
const _40 = document.getElementById("40");
const _41 = document.getElementById("41");
const _42 = document.getElementById("42");
const _43 = document.getElementById("43");
const _44 = document.getElementById("44");
const _45 = document.getElementById("45");
const _46 = document.getElementById("46");
const _47 = document.getElementById("47");
const _48 = document.getElementById("48");
const nships = document.getElementById("ships");
const nguesses = document.getElementById("guesses");
const intro = document.getElementById("intro");
const gameboard = document.getElementById("gameboard");
const scoreboard = document.getElementById("scoreboard");
const reset = document.getElementById("reset");

function switcher() {
  if (intro.className != "hide") {
    intro.setAttribute("class", "hide");
    gameboard.setAttribute("class", "main main--grid");
    scoreboard.setAttribute("class", "dashboard");
  }
}

setTimeout(switcher, 1000);

function resetter() {
  location.reload();
}

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

var elem = {
  0: _0,
  1: _1,
  2: _2,
  3: _3,
  4: _4,
  5: _5,
  6: _6,
  7: _7,
  8: _8,
  9: _9,
  10: _10,
  11: _11,
  12: _12,
  13: _13,
  14: _14,
  15: _15,
  16: _16,
  17: _17,
  18: _18,
  19: _19,
  20: _20,
  21: _21,
  22: _22,
  23: _23,
  24: _24,
  25: _25,
  26: _26,
  27: _27,
  28: _28,
  29: _29,
  30: _30,
  31: _31,
  32: _32,
  33: _33,
  34: _34,
  35: _35,
  36: _36,
  37: _37,
  38: _38,
  39: _39,
  40: _40,
  41: _41,
  42: _42,
  43: _43,
  44: _44,
  45: _45,
  46: _46,
  47: _47,
  48: _48,
};

var elemArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48,
];

function checker(e) {
  const tg = e.target;
  idVal = tg.id;
  for (var i = 0; i <= guesses - 1; i++) {
    if (idVal == loca[0] || idVal == loca[1] || idVal == loca[2]) {
      var selector = elemArray.indexOf(Number(idVal));
      elem[selector].setAttribute("class", "hit");
      elem[selector].setAttribute("disabled", "true");
      ships--;
      guesses--;
      update();
      if (ships == 0) {
        alert("All Ships Destroyed");
        alert("Game Over");
        break;
      }
      if (i == guesses) {
        alert(ships + " ship(s) left");
        alert("Mission Failed");
        break;
      }
      break;
    } else {
      var selector = elemArray.indexOf(Number(idVal));
      elem[selector].setAttribute("class", "miss");
      elem[selector].setAttribute("disabled", "true");
      guesses--;
      update();
      if (i == guesses) {
        alert("Mission Failed");
        alert(ships + " ship(s) left");
        break;
      }
      break;
    }
  }
}

_0.addEventListener("click", checker);
_1.addEventListener("click", checker);
_2.addEventListener("click", checker);
_3.addEventListener("click", checker);
_4.addEventListener("click", checker);
_5.addEventListener("click", checker);
_6.addEventListener("click", checker);
_7.addEventListener("click", checker);
_8.addEventListener("click", checker);
_9.addEventListener("click", checker);
_10.addEventListener("click", checker);
_11.addEventListener("click", checker);
_12.addEventListener("click", checker);
_13.addEventListener("click", checker);
_14.addEventListener("click", checker);
_15.addEventListener("click", checker);
_16.addEventListener("click", checker);
_17.addEventListener("click", checker);
_18.addEventListener("click", checker);
_19.addEventListener("click", checker);
_20.addEventListener("click", checker);
_21.addEventListener("click", checker);
_22.addEventListener("click", checker);
_23.addEventListener("click", checker);
_24.addEventListener("click", checker);
_25.addEventListener("click", checker);
_26.addEventListener("click", checker);
_27.addEventListener("click", checker);
_28.addEventListener("click", checker);
_29.addEventListener("click", checker);
_30.addEventListener("click", checker);
_31.addEventListener("click", checker);
_32.addEventListener("click", checker);
_33.addEventListener("click", checker);
_34.addEventListener("click", checker);
_35.addEventListener("click", checker);
_36.addEventListener("click", checker);
_37.addEventListener("click", checker);
_38.addEventListener("click", checker);
_39.addEventListener("click", checker);
_40.addEventListener("click", checker);
_41.addEventListener("click", checker);
_42.addEventListener("click", checker);
_43.addEventListener("click", checker);
_44.addEventListener("click", checker);
_45.addEventListener("click", checker);
_46.addEventListener("click", checker);
_47.addEventListener("click", checker);
_48.addEventListener("click", checker);
reset.addEventListener("click", resetter);
