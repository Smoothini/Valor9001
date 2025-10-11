function calculateCost() {

    const start = parseInt(document.getElementById("levelStart").value);
    const end = parseInt(document.getElementById("levelEnd").value);
    const table = document.getElementById("level-table");

    if (start >= end){
        document.getElementById("warning").textContent = "Starting level must be less than ending level!";
    }
    
    let beads = 0, elixir = 0, gold = 0;
    let missing = false;

    for (let i = 2; i < levelData.length; i++) {
        const level = levelData[i].Level;
        

        if (level > start && level <= end) {
            beads += levelData[i].Beads;
            elixir += Number(levelData[i].Elixir);
            gold += Number(levelData[i].Gold);

            if(Number(levelData[i].Gold) === 0){
                missing = true;
            }
        }

        if (level === end){
            continue;
        }
    }

    document.getElementById("total_beads").textContent = beads.toLocaleString();
    document.getElementById("total_elixir").textContent = elixir.toLocaleString();
    document.getElementById("total_gold").textContent = gold.toLocaleString();

    const multibody = document.querySelector("#multiple-heroes tbody")
    multibody.innerHTML = "";

    for (let i = 1; i<= 10; i++){
        const tr = document.createElement("tr");
        
        const heroesTd = document.createElement("td");
        heroesTd.textContent = i;
        heroesTd.style.textAlign = "center";
        heroesTd.style.padding = "0px 20px 0px 10px";
        tr.appendChild(heroesTd);

        const beadsTd = document.createElement("td");
        beadsTd.textContent = (beads * i).toLocaleString();
        beadsTd.style.textAlign = "right";
        beadsTd.style.padding = "0px 20px 0px 0px";
        tr.appendChild(beadsTd);

        const elixirTd = document.createElement("td");
        elixirTd.textContent = (elixir * i).toLocaleString();
        elixirTd.style.textAlign = "right";
        elixirTd.style.padding = "0px 20px 0px 0px";
        tr.appendChild(elixirTd);

        const goldTd = document.createElement("td");
        goldTd.textContent = (gold * i).toLocaleString();
        goldTd.style.textAlign = "right";
        goldTd.style.padding = "0px 20px 0px 0px";
        tr.appendChild(goldTd);

        multibody.appendChild(tr);
    }

    multi = document.getElementById("multiple-heroes");
    multi.removeAttribute("hidden");


    if (missing) {
        document.getElementById("warning").textContent = "Some levels in range are missing data!";
    }
}