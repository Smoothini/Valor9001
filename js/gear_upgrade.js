window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#gear-exp-base-table tbody");
  for (const [rarity, data] of Object.entries(items_xp)) {
    if (Array.isArray(data.base_xp)) {
        for (const [i, xp] of data.base_xp.entries()) {
            const td_color = document.createElement("td");
            const td_stars = document.createElement("td");
            const td_maxlevel = document.createElement("td");
            const td_xp = document.createElement("td");
            td_color.textContent = rarity;
            td_stars.textContent = "⭐".repeat(i + 1);
            td_maxlevel.textContent = data.max_level;
            td_xp.textContent = xp;
            const tr = document.createElement("tr");
            tr.appendChild(td_color);
            tr.appendChild(td_stars);
            tr.appendChild(td_maxlevel);
            tr.appendChild(td_xp);
            tbody.appendChild(tr);
        }
    }
}});


