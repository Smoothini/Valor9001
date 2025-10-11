window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#gear-exp-base-table tbody");
  for (const [rarity, data] of Object.entries(gear_xp)) {
    if (Array.isArray(data.base_xp)) {
        for (const [i, xp] of data.base_xp.entries()) {
            const td_color = document.createElement("td");
            const td_stars = document.createElement("td");
            const td_maxlevel = document.createElement("td");
            const td_xp = document.createElement("td");
            td_color.textContent = rarity;
            td_stars.textContent = "⭐".repeat(i + 1);
            td_maxlevel.textContent = data.max_level;
            td_xp.textContent = xp.toLocaleString();
            td_color.style.textAlign = "center";
            td_stars.style.textAlign = "center";
            td_maxlevel.style.textAlign = "center";
            td_xp.style.textAlign = "right";
            const tr = document.createElement("tr");
            tr.appendChild(td_color);
            tr.appendChild(td_stars);
            tr.appendChild(td_maxlevel);
            tr.appendChild(td_xp);
            tbody.appendChild(tr);
        }
    }
}});

function updateGearExpTable() {
    const select = document.getElementById("gear-select");
    const tableBody = document.getElementById("gear-exp-table");
    tableBody.innerHTML = "";
    const value = select.value;

    const color = value.slice(0, -1);
    const stars = parseInt(value.slice(-1));

    console.log(color, stars);

    const data = gear_xp[color][stars];

    let coef = 0;

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 10; j++) {
            const tr = document.createElement("tr");

            const td_level = document.createElement("td");
            const td_experience = document.createElement("td");
            const td_total = document.createElement("td");

            td_level.textContent = i * 10 + j+1;
            td_experience.textContent = data[i].toLocaleString();
            coef += data[i];
            td_total.textContent = coef.toLocaleString();

            td_level.style.textAlign = "center";
            td_experience.style.textAlign = "center";
            td_total.style.textAlign = "right";

            tr.appendChild(td_level);
            tr.appendChild(td_experience);
            tr.appendChild(td_total);
            tableBody.appendChild(tr);
        }
    }
}
