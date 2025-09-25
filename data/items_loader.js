window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#equipment-table tbody");

  items_basic.forEach(item => {
    const tr = document.createElement("tr");

    ["Id", "Name", "Color", "Stars", "Type", "Class", "Power", "Attr"].forEach(key => {
      const td = document.createElement("td");
      td.textContent = item[key];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  items_orange.forEach(item => {
    const tr = document.createElement("tr");

    ["Id", "Name", "Color", "Stars", "Type", "Class", "Power", "Attr"].forEach(key => {
      const td = document.createElement("td");
      td.textContent = item[key];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });
});
