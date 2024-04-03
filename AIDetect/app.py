from flask import Flask, request, jsonify
import ultralytics
import requests
from ultralytics import YOLO
import matplotlib.pyplot as plt
import cv2
import json
import numpy as np
import cloudinary
import cloudinary.uploader
import os
import re
from ultralytics.utils.plotting import Annotator
app = Flask(__name__)
 
cloudinary.config(cloud_name = "dvncsreic", api_key=139257566591912, 
    api_secret="D_DDpW5RwdenSleJeTEfAhuqOcQ")

@app.route('/')
def hello_world():
    # model_path = 'best.pt'
    # img_path = 'https://res.cloudinary.com/dizoqp8hc/image/upload/v1710569235/pl09dvlru0viuklgc4qf.png'
    # conf_thres=0.4
    # model = YOLO(model_path)
    # # Run inference 
    # results = model(img_path)
    
    # print(results)


    return "Hello world!"

@app.route('/analyze', methods=['GET'])
def analyze_image():
    # Retrieve image URL from query parameter
    image_url = request.args.get('image')
    print(image_url)
    img_path = image_url.split("/")[-1]
    
    

    if not image_url:
        return jsonify({'success': False, 'message': 'Missing image URL parameter'}), 400

    try:
        # Load the YOLO model (assuming 'best.pt' is the model path)
        model_path = 'AIDetect/bestl.pt'
        
        conf_thres=0.4
        model = YOLO(model_path)
        # Run inference 
        results = model(image_url)
        img = cv2.imread(img_path)
        json_data = []
        for r in results:
            annotator = Annotator(img)
            boxes = r.boxes
            for box in boxes:

                b = box.xyxy[0]  # get box coordinates in (left, top, right, bottom) format
                c = box.cls
                conf = float(box.conf)
                obj_data = {
                    "name": model.names[int(box.cls)],
                    # "confidence": box.conf  # Get confidence score
                }
                json_data.append(obj_data)
                label_text = f"{model.names[int(c)]}: {conf:.2f}"  # Format confidence to 2 decimal places
                
                annotator.box_label(b, label_text)

        cv2.imwrite("output_image.jpg", img)
        print(json_data)
        res = cloudinary.uploader.upload("output_image.jpg")
        return {
        "image_url": res['secure_url'],
        "json_data": json_data,
    }


    except Exception as e:
        return jsonify({'success': False, 'message': f'An error occurred: {str(e)}'}), 500
 
if __name__ == '__main__':
    app.run()