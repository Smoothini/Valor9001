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
        td_attr.textContent = item.Attributes;

        [td_id, td_name, td_color, td_stars, td_type, td_class, td_faction, td_power, td_attr].forEach(td => {
            td.style.textAlign = "center";
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });

    /*gear_orange.forEach(item => {
      const tr = document.createElement("tr");
  
      ["Id", "Name", "Color", "Stars", "Type", "Class", "Power", "Attr"].forEach(key => {
        const td = document.createElement("td");
        if (key === "Attr") {
          let atrs = item[key].split(",");
          for(atr in atrs) {
            let span = document.createElement("span");
            span.textContent = atrs[atr].trim();
            span.classList.add("badge", "badge-success", "mr-1");
            td.appendChild(span);
          }
        }
        else
          td.textContent = item[key];
        tr.appendChild(td);
      });
  
      tbody.appendChild(tr);
    });*/
});
