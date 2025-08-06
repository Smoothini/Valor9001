from flask import Flask, render_template, redirect, request
import time
import dataaccess as dao
app = Flask(__name__)

class Routes():
    INDEX = "/"
    LEVELUP = "/levelup"
    BREAKTHROUGH = "/breakthrough"
    EQUIPMENT = "/equipment"
    EQUIPMENTCOST = "/equipment_cost"
    EVOLUTIONS = "/evolutions"
    ARTIFACTS = "/artifacts"

class Templates():
    INDEX = "index.html"
    PAGE = "page.html"
    TPAGE = "table_page.html"


@app.route(Routes.INDEX)
def index():
    return render_template(Templates.INDEX, pagename="Dashboard")

@app.route(Routes.LEVELUP)
def levelup():
    #items = dao.get_levelup()
    items = dao.get_basic_csv("levelup.csv")
    return render_template(Templates.TPAGE, pagename = "Level Up Stats", headings = ["Level", "Beads", "Elixir", "Gold"], items = items)

@app.route(Routes.EQUIPMENT)
def equipment():
    items = dao.get_equipment()
    #items = dao.get_basic_csv("item.csv")
    return render_template(Templates.TPAGE, pagename = "Equipment Stats", headings = ["ID", "Name", "Color", "Stars", "Type", "Class", "Power", "Attributes"], items = items)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
