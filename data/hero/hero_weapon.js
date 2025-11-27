const levels = [
    20, 10, 10, 10, 15, 20, 20, 25, 30, 50, //beginner badges needed onward
    10 //intermediate badges needed onward
];


window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#weapon-table tbody");

  

  levels.forEach((level, index) => {
    const tr = document.createElement("tr");

    const levelTd = document.createElement("td");
    const badgeTd = document.createElement("td");
    const badgeTypeTd = document.createElement("td");

    levelTd.textContent = index + 1;
    badgeTd.textContent = level;
    badgeTypeTd.textContent = index < 10 ? "Beginner" : "Intermediate";

    [levelTd, badgeTd, badgeTypeTd].forEach(td => tr.appendChild(td));

    tbody.appendChild(tr);
  });
});
