
import json
import os
from flask import Flask, render_template, request, flash, redirect, url_for
from werkzeug.utils import secure_filename
from cpmaster import *
from convacolor import *


DEBUG = True
UPLOAD_FOLDER = 'D:\Projects\pixwebsite\images'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}


app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
     

@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'POST':
        print('succes')
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        
        file = request.files['file']

        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':

            flash('No selected file')

            return redirect(request.url)
        
        if file and allowed_file(file.filename):

            print('success')

            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

            return redirect(url_for('uploaded_file',
                                    filename=filename))
        
        filepath = f"{UPLOAD_FOLDER}/{file.filename}"
        palette = output_palette(filepath)

    # with open('colors_data.json', 'w') as f:
    #     for i in palette:
    #         r, g, b = i
    #         data = {"rgb": [r, g, b],
    #                 "floatrgb": get_float(r, g, b),
    #                 "hex": get_hex(r, g, b),
    #                 "cmyk": get_cmyk(r, g, b),
    #                 "floatcmyk": get_cmyk(r, g, b, 'f'),
    #                 "hsv": get_hsv(r, g, b),
    #                 "floathsv": get_hsv(r, g, b, 'f'),
    #                 "ncs": get_ncs(r, g, b)
    #                 }
        
    # json.dump(data, f, indent=3)

    
    return render_template("index.html")

    return f"""<!DOCTYPE html>{data}
    """


if __name__ == '__main__':
    app.run(debug=DEBUG)
