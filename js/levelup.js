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

    if (missing) {
        document.getElementById("warning").textContent = "Some levels in range are missing data!";
    }
}