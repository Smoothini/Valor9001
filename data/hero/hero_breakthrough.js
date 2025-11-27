const btData = [
  {
    "Level": 260,
    "Stage": 0,
    "Gold": "5 heroes",
    "Energy Essence": "at level 260"
  },
  {
    "Level": 260,
    "Stage": 1,
    "Gold": 400000,
    "Energy Essence": 250000
  },
  {
    "Level": 260,
    "Stage": 2,
    "Gold": 403000,
    "Energy Essence": 252000
  }
]

window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#breakthrough_stats tbody");

  btData.forEach(row => {
    const tr = document.createElement("tr");

    ["Level", "Stage", "Gold", "Energy Essence"].forEach(key => {
      const td = document.createElement("td");
      td.textContent = row[key].toLocaleString();
      if (key === "Level" || key === "Stage") {
        td.style.textAlign = "center";
      } else {
        td.style.textAlign = "right";
      }
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
});
