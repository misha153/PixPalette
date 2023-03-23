import os
import json
from flask import Flask, render_template, request, redirect
from werkzeug.utils import secure_filename
from cpmaster import *
from convacolor import *


DEBUG = True
UPLOAD_FOLDER = 'static/images'
URL = 'http://127.0.0.1:5000'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/', methods=['POST', 'GET'])
def index():
    global jsonStr
    if request.method == 'POST':
        if 'photo' in request.files:
            file = request.files['photo']

            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            palette = output_palette(f'{UPLOAD_FOLDER}/{filename}')
            reply = FormReply(palette)

            jsonStr = {}

            jsonStr["palette"] = reply
            jsonStr["path"] = f'{UPLOAD_FOLDER}/{filename}'

            return render_template("workplace.html", jsonStr=json.dumps(jsonStr))

        elif 'picker' in request.form:
            color = request.form['picker']  
            r, g, b = color.split()

            reply = FormReply([int(r), int(g), int(b)])

            jsonStr = {}

            jsonStr["picker"] = reply

            return render_template("workplace.html", jsonStr=json.dumps(jsonStr))
        
        elif 'pipette' in request.form:
            color = request.form['pipette']  
            r, g, b = color.split()

            reply = FormReply([int(r), int(g), int(b)])

            jsonStr = {}

            jsonStr["pipette"] = reply

            return render_template("workplace.html", jsonStr=json.dumps(jsonStr))

    else:
        return render_template("index.html")
    

def FormReply(palette):
    try:
        reply = []
        for i in range(0, len(palette)):
            r, g, b = palette[i]
            reply.append({"rgb":     [r, g, b],
                        "floatrgb":  getFloat(r, g, b),
                        "hex":       getHEX(r, g, b),
                        "cmyk":      getCMYK(r, g, b),
                        "floatcmyk": getCMYK(r, g, b, output_mode="f"),
                        "hsv":       getHSV(r, g, b),
                        "floathsv":  getHSV(r, g, b, output_mode="f"),
                        "ncs":       getNCS(r, g, b)
                        }
                        )

    except TypeError:
        r, g, b = palette
        reply = {"rgb":     [r, g, b],
                "floatrgb":  getFloat(r, g, b),
                "hex":       getHEX(r, g, b),
                "cmyk":      getCMYK(r, g, b),
                "floatcmyk": getCMYK(r, g, b, output_mode="f"),
                "hsv":       getHSV(r, g, b),
                "floathsv":  getHSV(r, g, b, output_mode="f"),
                "ncs":       getNCS(r, g, b)
                }

    return reply


if __name__ == '__main__':
    app.run(debug=DEBUG)
