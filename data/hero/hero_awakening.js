var data = {
    3:  { star: 3,  maxlevel: 40,
          slot1: { qty: null, star: null, type: null },
          slot2: { qty: null, star: null, type: null } },
    4:  { star: 4,  maxlevel: 60,
          slot1: { qty: null, star: null, type: null },
          slot2: { qty: null, star: null, type: null } },
    5:  { star: 5,  maxlevel: 80,
          slot1: { qty: 2, star: 4, type: "same" },
          slot2: { qty: 3, star: 4, type: "other" } },
    6:  { star: 6,  maxlevel: 100,
          slot1: { qty: 1, star: 5, type: "same" },
          slot2: { qty: 2, star: 5, type: "other" } },
    7:  { star: 7,  maxlevel: 140,
          slot1: { qty: null, star: null, type: null },
          slot2: { qty: 4, star: 5, type: "other" } },
    8:  { star: 8,  maxlevel: 160,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: 1, star: 6, type: "other" } },
    9:  { star: 9,  maxlevel: 180,
          slot1: { qty: 2, star: 5, type: "other" },
          slot2: { qty: 1, star: 7, type: "other" }},
    10: { star: 10, maxlevel: 220,
          slot1: { qty: 2, star: 5, type: "other" },
          slot2: { qty: 1, star: 8, type: "other" }},
    11: { star: 11, maxlevel: 260,
          slot1: { qty: 4, star: 5, type: "same" },
          slot2: { qty: 1, star: 9, type: "other" } },
    12: { star: 12, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    13: { star: 13, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    14: { star: 14, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    15: { star: 15, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    16: { star: 16, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    17: { star: 17, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    18: { star: 18, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    19: { star: 19, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    20: { star: 20, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    21: { star: 21, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    22: { star: 22, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    23: { star: 23, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
    24: { star: 24, maxlevel: 260,
          slot1: { qty: 2, star: 5, type: "same" },
          slot2: { qty: null, star: null, type: null } },
};

function starParser(star) {
    if (star <= 5){
        return `<span class="sbadge-yellow" data-stars="${star}"></span>`;
    } else if (star > 5 && star < 11) {
        return `<span class="sbadge-purple" data-stars="${star}"></span>`;
    } else {
        return `<span class="sbadge-special" data-stars="${star-11}"></span>`;
    }
}

function slotParser(qty, star, type) {
    if (star <= 5){
        return `${qty}x <span class="sbadge-yellow" data-stars="${star}" data-type="${type}"></span>`;
    } else if (star > 5 && star < 11) {
        return `${qty}x <span class="sbadge-purple" data-stars="${star}" data-type="${type}"></span>`;
    }
}

// Index of how many 4★ are needed at each awakening level
start4 = {
    4: 1
};
// Cumulative sum of 4★ needed
_cs4 = 1;

// Same but for 5★
start5 = {
    5: 1
};
_cs5 = 1;


var table = document.getElementById('new');
for (var row in data) {
    var entry = data[row];
    var tr = document.createElement('tr');

    var regno = document.createElement('td');
    var stars = document.createElement('td');
    var maxlevel = document.createElement('td');
    var slot1 = document.createElement('td');
    var slot2 = document.createElement('td');
    var s4 = document.createElement('td');
    var cs4 = document.createElement('td');
    var s5 = document.createElement('td');
    var cs5 = document.createElement('td');

    regno.textContent = entry.star;
    stars.innerHTML = starParser(entry.star);
    maxlevel.textContent = entry.maxlevel;
    slot1.innerHTML = entry.slot1.qty > 0  ? slotParser(entry.slot1.qty, entry.slot1.star, entry.slot1.type) : "-";
    slot2.innerHTML = entry.slot2.qty > 0  ? slotParser(entry.slot2.qty, entry.slot2.star, entry.slot2.type) : "-";

    // Calculate 4★ needed, also epics only go to 9
    if(entry.star > 4 && entry.star < 10) {
        cs = 0;
        if (entry.slot1.qty !== null) {
            cs += entry.slot1.qty * start4[entry.slot1.star];
        }
        if (entry.slot2.qty !== null) {
            cs += entry.slot2.qty * start4[entry.slot2.star];
        }
        start4[entry.star] = cs;
        _cs4 += cs;
        s4.textContent = cs;
        cs4.textContent = _cs4;
    }
    
    // Calculate 5★ needed, but this assumes you only use 5★
    if(entry.star > 5) {
        cs = 0;
        if (entry.slot1.qty !== null) {
            cs += entry.slot1.qty * start5[entry.slot1.star];
        }
        if (entry.slot2.qty !== null) {
            cs += entry.slot2.qty * start5[entry.slot2.star];
        }
        start5[entry.star] = cs;
        _cs5 += cs;
        s5.textContent = cs;
        cs5.textContent = _cs5;
    }
    


    [regno, stars, maxlevel, slot1, slot2, s4, cs4, s5, cs5].forEach(td => {
        td.style.paddingRight = "10px";
        td.style.paddingLeft = "10px";
        tr.appendChild(td);
    });

    switch(entry.star) {
        case 3:
            tr.style.borderBottom = "1px dotted #888";
            break;
        case 9:
            tr.style.borderBottom = "1px dotted #888";
            break;
    }

    table.appendChild(tr);
}