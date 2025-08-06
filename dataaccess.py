import csv

def get_basic_csv(filename):
    file_path = f'csv/{filename}'
    data = []
    with open(file_path, 'r') as file:
        csvreader = csv.reader(file, delimiter=';')
        #headings = next(csvreader)
        for row in csvreader:
            if any(row):
                if row[0][0] != '#':
                    data.append(row)
    return data

def get_equipment():
    data = get_basic_csv("item.csv")
    orange = get_basic_csv("item_orange.csv")
    data.extend(orange[1:])
    return data



