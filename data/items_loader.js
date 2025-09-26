window.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#gear-table tbody");

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
  });
});
