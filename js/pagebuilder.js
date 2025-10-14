// 🧱 MENU STRUCTURE — edit once, reuse everywhere
const menuData = [
    { name: "Dashboard", link: "index.html" },
    {
      name: "Hero",
      children: [
        { name: "Level up", link: "hero_levelup.html" },
        { name: "Awakening", link: "hero_awakening.html" },
        { name: "Breakthrough", link: "hero_breakthrough.html" },
      ],
    },
    {
      name: "Gear",
      children: [
        { name: "List", link: "gear.html" },
        { name: "Upgrades", link: "gear_upgrades.html" },
      ],
    },
    { name: "Artifacts", link: "artifacts.html" },
  ];
  
  // 🪄 BUILD MENU
  function buildMenu(container, data) {
    const current = location.pathname.split("/").pop(); // current file name
  
    data.forEach(item => {
      if (item.children) {
        const header = document.createElement("div");
        header.className = "menu-header";
        header.textContent = item.name;
  
        const submenu = document.createElement("div");
        submenu.className = "submenu";
        buildMenu(submenu, item.children);
  
        header.addEventListener("click", () => submenu.classList.toggle("show"));
  
        container.appendChild(header);
        container.appendChild(submenu);
      } else {
        const link = document.createElement("a");
        link.href = item.link;
        link.textContent = item.name;
        if (item.link === current) link.classList.add("active");
        container.appendChild(link);
      }
    });
  }
  
  // 🪄 BUILD FOOTER
  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer mt-4 small";
    footer.innerHTML = `
      <a href="https://github.com/Smoothini/Valor9001" target="_blank">
        <img src="res/ghl.png" alt="GitHub Logo" style="width:25px;">
      </a>
      <a href="https://github.com/Smoothini/Valor9001" target="_blank" class="text-dark mx-2">Source Code</a>
      <a href="https://smoothini.github.io/" target="_blank" class="text-dark mx-2">Other Cool Projects</a>
      <div class="small mt-2">
        &copy; <a href="https://github.com/Smoothini" target="_blank" class="text-dark">Smoothini</a> 2025
      </div>
      <hr><small>This project is an independent fan-made tool and is not affiliated with, endorsed, or sponsored by Valor Legends or its creators, Century Games.</small>`;
    document.getElementById("content").appendChild(document.createElement("hr"));
    document.getElementById("content").appendChild(footer);
  }
  
  // 🧩 INIT
  const sidebar = document.getElementById("sidebar");
  buildMenu(sidebar, menuData);
  buildFooter();
  
  // 🍔 MOBILE TOGGLE
  const toggle = document.getElementById("menu-toggle");
  toggle.addEventListener("click", () => sidebar.classList.toggle("show"));
  