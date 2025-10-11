import csv

# define mappings
color_map = {"White": 1, "Green": 2, "Blue": 3, "Purple": 4, "Orange": 5, "Red": 6}
type_map = {"Weapon": 1, "Armor": 2, "Shoe": 3, "Accessory": 4}
class_map = {"Wisdom": 1, "Agility": 2, "Strength": 3}

input_file = "item.csv"
output_file = "gear_basic-v3.csv"

with open(input_file, encoding="utf-8") as infile, open(output_file, "w", newline="", encoding="utf-8") as outfile:
    reader = csv.reader(infile, delimiter=";")
    writer = csv.writer(outfile, delimiter=";")

    for row in reader:
        # preserve empty or comment lines
        if not row or row[0].startswith("#"):
            writer.writerow(row)
            continue

        # unpack row safely
        try:
            _, name, color, stars, typ, cls, power, attr = row
        except ValueError:
            # skip malformed line but keep it for debug
            writer.writerow(["# malformed", *row])
            continue

        # build id
        cid = color_map.get(color, 0)
        sid = int(stars)
        tid = type_map.get(typ, 0)
        fid = 0  # faction placeholder
        clid = class_map.get(cls, 0)

        gear_id = f"{cid}{sid}{tid}{fid}{clid}"

        if '*' in name:
            name = "🏗 " + name.upper()

        writer.writerow([gear_id, name, power, attr])

print(f"✅ done, written to {output_file}")
