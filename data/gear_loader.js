function parseGearId(id) {
  const colorMap = {
    1: "White",
    2: "Green",
    3: "Blue",
    4: "Purple",
    5: "Orange",
    6: "Red",
  };

  const typeMap = {
    1: "Weapon",
    2: "Armor",
    3: "Shoes",
    4: "Accessory",
  };

  const factionMap = {
    0: "No Faction",
    1: "Undead",
    2: "Legion",
    3: "Forest",
    4: "Shadow",
    5: "Light",
  };

  const classMap = {
    1: "Wisdom",
    2: "Agility",
    3: "Strength",
  };

  const idStr = String(id).padStart(5, "0");
  const color = colorMap[parseInt(idStr[0])] || "Unknown";
  const stars = parseInt(idStr[1]);
  const type = typeMap[parseInt(idStr[2])] || "Unknown";
  const faction = factionMap[parseInt(idStr[3])] || "Unknown";
  const cls = classMap[parseInt(idStr[4])] || "Unknown";

  return { color, stars, type, faction, class: cls };
}

function prettybutes(attr) {
  let rendered = '';
  let extra = '';
  if (attr.includes("🤔")) {
    extra = '<span class="badge badge-pill badge-warning">?</span>';
    attr = attr.replace('🤔', '').trim();
  }


  parts = attr.split(',').map(s => s.trim());

  if (attr === '' || parts.length === 0) {
    return '<span class="badge-event">!! Missing data !!</span>';
  } else {
    parts.forEach(part => {
      miniparts = part.split(' ').map(s => s.trim());
      switch (miniparts[1]) {
        case 'ATK':
        case 'DEF':
        case 'HP':
        case 'CI':
        case 'CR':
        case 'AP':
          rendered += `<span class="badge-${miniparts[1].toLowerCase()}">${miniparts[0]} ${miniparts[1]}</span>&nbsp;`;
          break;
        default:
          rendered += `<span class="badge">${miniparts[0]} ${miniparts[1]}</span>`;
          break;
      }
    });
    return rendered + extra;
  }


}

window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#gear-table tbody");
  gears = gear_basic.concat(gear_orange).concat(gear_red);
  gears.forEach(item => {
    const tr = document.createElement("tr");

    const td_id = document.createElement("td");
    const td_name = document.createElement("td");
    const td_color = document.createElement("td");
    const td_stars = document.createElement("td");
    const td_type = document.createElement("td");
    const td_class = document.createElement("td");
    const td_faction = document.createElement("td");
    const td_power = document.createElement("td");
    const td_attr = document.createElement("td");

    const parsed = parseGearId(item.Id);

    td_id.textContent = item.Id;
    td_name.textContent = item.Name;
    td_color.textContent = parsed.color;
    td_stars.textContent = "⭐".repeat(parsed.stars);
    td_type.textContent = parsed.type;
    td_class.textContent = parsed.class;
    td_faction.textContent = parsed.faction;
    td_power.textContent = item.Power;
    td_attr.innerHTML = prettybutes(item.Attributes);

    [td_id, td_name, td_color, td_stars, td_type, td_class, td_faction, td_power, td_attr].forEach(td => {
      td.style.textAlign = "center";
      tr.id = item.Id;
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });


});

document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', updateGearTable);
});

function updateGearTable() {
  const colors = Array.from(document.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value);
  const stars = Array.from(document.querySelectorAll('input[name="stars"]:checked')).map(cb => cb.value);
  const types = Array.from(document.querySelectorAll('input[name="type"]:checked')).map(cb => cb.value);
  const factions = Array.from(document.querySelectorAll('input[name="faction"]:checked')).map(cb => cb.value);
  const classes = Array.from(document.querySelectorAll('input[name="class"]:checked')).map(cb => cb.value);

  console.log(colors, stars, types, factions, classes);

  document.querySelectorAll('#gear-table tbody tr').forEach(row => {
    const id = row.id;
    const color = id.charAt(0);
    const star = id.charAt(1);
    const type = id.charAt(2);
    const faction = id.charAt(3);
    const cls = id.charAt(4);

    const visible = colors.includes(color) &&
      stars.includes(star) &&
      types.includes(type) &&
      factions.includes(faction) &&
      classes.includes(cls);

    row.style.display = visible ? '' : 'none';
  });
}

function mnezo(value) {
  document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb => {
    cb.checked = value;
  });
  updateGearTable();
}

function hide(emojo) {
  if (emojo === '🅱') {
    document.querySelectorAll('#gear-table tbody tr').forEach(row => {
      const visible = !row.textContent.includes('🏗') && !row.textContent.includes('🤔');
      row.style.display = visible ? '' : 'none';
    });
  } else {
    document.querySelectorAll('#gear-table tbody tr').forEach(row => {
      const visible = !row.textContent.includes(emojo);
      row.style.display = visible ? '' : 'none';
    });
  }

}