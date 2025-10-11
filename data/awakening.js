var data = {
    3: { star: 3, starD:"⭐⭐⭐", maxlevel: 40, sameHero: 0, otherHeroes: 0, sameHeroD: "-", otherHeroD: "-", coef: 0 },
    4: { star: 4, starD:"⭐⭐⭐⭐", maxlevel: 60, sameHero: 0, otherHeroes: 0, sameHeroD: "-", otherHeroD: "-", coef: 0 },
    5: { star: 5, starD:"⭐⭐⭐⭐⭐", maxlevel: 80, sameHero: 2, otherHeroes: 3, sameHeroD: "2x ⭐⭐⭐⭐", otherHeroD: "3x ⭐⭐⭐⭐", coef: 0 }, //all 4*
    6: { star: 6, starD:"🎆", maxlevel: 100, sameHero: 1, otherHeroes: 2, sameHeroD: "1x ⭐⭐⭐⭐⭐", otherHeroD: "2x ⭐⭐⭐⭐⭐", coef: 0 }, //all 5*
    7: { star: 7, starD:"🎆🎆", maxlevel: 140, sameHero: 0, otherHeroes: 4, sameHeroD: "-", otherHeroD: "4x ⭐⭐⭐⭐⭐", coef: 0 }, //all 5*
    8: { star: 8, starD:"🎆🎆🎆", maxlevel: 160, sameHero: 2, otherHeroes: 1, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "1x 🎆", coef: 8 }, //self 5*, other 6*
    9: { star: 9, starD:"🎆🎆🎆🎆", maxlevel: 180, sameHero: 0, otherHeroes: 3, sameHeroD: "-", otherHeroD: "2x ⭐⭐⭐⭐⭐ + 1x 🎆🎆", coef: 12 }, //2x 5*, 1x 7*
    10: { star: 10, starD:"🎆🎆🎆🎆🎆", maxlevel: 220, sameHero: 0, otherHeroes: 3, sameHeroD: "-", otherHeroD: "2x ⭐⭐⭐⭐⭐ + 1x 🎆🎆🎆", coef: 15 }, //2x 5*, 1x 8*
    11: { star: 11, starD:"🎀", maxlevel: 260, sameHero: 4, otherHeroes: 1, sameHeroD: "4x ⭐⭐⭐⭐⭐", otherHeroD: "1x 🎆🎆🎆🎆", coef: 18 }, //self 5*, other 9
    12: { star: 12, starD:"🎀1️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    13: { star: 13, starD:"🎀2️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    14: { star: 14, starD:"🎀3️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    15: { star: 15, starD:"🎀4️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    16: { star: 16, starD:"🎀5️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    17: { star: 17, starD:"🎀6️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    18: { star: 18, starD:"🎀7️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    19: { star: 19, starD:"🎀8️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    20: { star: 20, starD:"🎀9️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    21: { star: 21, starD:"🎀1️⃣0️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    22: { star: 22, starD:"🎀1️⃣1️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    23: { star: 23, starD:"🎀1️⃣2️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    24: { star: 24, starD:"🎀1️⃣3️⃣", maxlevel: 260, sameHero: 2, otherHeroes: 0, sameHeroD: "2x ⭐⭐⭐⭐⭐", otherHeroD: "-", coef: 0 }, //self 5*
    // think 24 is the max?
};


var table = document.querySelector('table');
var cumsum = 0;
var cumsumcoef = 0;

for (var star in data) {
    var row = data[star];
    cumsumcoef += row.coef;
    var newRow = table.insertRow();
    newRow.insertCell(0).textContent = row.star;
    newRow.insertCell(1).textContent = row.starD;
    newRow.insertCell(2).textContent = row.maxlevel;
    newRow.insertCell(3).textContent = row.sameHeroD;
    newRow.insertCell(4).textContent = row.otherHeroD;
    newRow.insertCell(5).textContent = row.sameHero + row.otherHeroes + cumsum;
    newRow.insertCell(6).textContent = row.star > 7 
            ? row.sameHero + row.otherHeroes + cumsum - 1 + row.coef
            : row.sameHero + row.otherHeroes + cumsum; // could really use some refactoring here...
    cumsum += row.sameHero + row.otherHeroes;
    cumsumcoef += row.sameHero + row.otherHeroes;
};