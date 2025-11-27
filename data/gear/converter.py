import csv

color_map = {"White": 1, "Green": 2, "Blue": 3, "Purple": 4, "Orange": 5, "Red": 6}
type_map = {"Weapon": 1, "Armor": 2, "Shoe": 3, "Accessory": 4}
class_map = {"Wisdom": 1, "Agility": 2, "Strength": 3}

color_map_inv = {1: "White", 2: "Green", 3: "Blue", 4: "Purple", 5: "Orange", 6: "Red"}
type_map_inv = {1: "Weapon", 2: "Armor", 3: "Shoe", 4: "Accessory"}
class_map_inv = {1: "Wisdom", 2: "Agility", 3: "Strength"}
faction_map_inv = {0: "No faction", 1: "Undead", 2: "Legion", 3: "Forest", 4: "Shadow", 5: "Light"}


def convoluted_to_combined_id():
    input_file = "item.csv"
    output_file = "item-v2.csv"

    with open(input_file, encoding="utf-8") as infile, open(output_file, "w", newline="", encoding="utf-8") as outfile:
        reader = csv.reader(infile, delimiter=";")
        writer = csv.writer(outfile, delimiter=";")

        for row in reader:
            # preserve empty or comment lines
            if not row or row[0].startswith("#"):
                #writer.writerow(row)
                continue

            if len(row) == 6:
                oid, name, color, stars, typ, cls = row 
                power = ""
                attr = ""
            else:
                oid, name, color, stars, typ, cls, power, attr = row

            # build id
            cid = color_map.get(color, 0)
            sid = int(stars)
            tid = type_map.get(typ, 0)
            fid = 0
            clid = class_map.get(cls, 0)

            gear_id = f"{cid}{sid}{tid}{fid}{clid}"

            if "White" in name:
                name = "🏗 " + f"{color_map_inv[cid]} {sid}* {type_map_inv[tid]} {class_map_inv[clid]} {faction_map_inv[fid]}".upper()

            if attr == "x":
                attr = ""

            writer.writerow([gear_id, name, power, attr])

    print(f"✅ done, written to {output_file}")

def red_generator():
    input_file = "gear_orange.csv"
    output_file = "gear_red.csv"

    with open(input_file, encoding="utf-8") as infile, open(output_file, "w", newline="", encoding="utf-8") as outfile:
        reader = csv.reader(infile, delimiter=";")
        writer = csv.writer(outfile, delimiter=";")

        for row in reader:
            # preserve empty or comment lines
            if not row or row[0].startswith("#"):
                #writer.writerow(row)
                continue

            if len(row) != 4:
                print(f"Skipping invalid row: {row}")
                continue

            gear_id, name, power, attr = row

            if len(gear_id) != 5:
                print(f"Skipping invalid gear_id: {gear_id}")
                continue

            cid = 6
            sid = int(gear_id[1])
            tid = int(gear_id[2])
            fid = int(gear_id[3])
            clid = int(gear_id[4])

            new_gear_id = f"{cid}{0}{tid}{fid}{clid}"

            print(new_gear_id)

            name = f"🏗 RED {type_map_inv[tid]} {class_map_inv[clid]} {faction_map_inv[fid]}".upper()

            writer.writerow([new_gear_id, name, "", ""])

    print(f"✅ done, written to {output_file}")


red_generator()