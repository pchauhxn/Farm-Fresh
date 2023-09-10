from flask import Flask
import pickle
from flask_cors import CORS



app = Flask(__name__)
#load the model
CORS(app)

model = pickle.load(open('model.pkl','rb'))

@app.route('/pota', methods=['POST','GET'])
def predict0():
    #variables
    result = model.predict([[[0],[31],[26],[0],[0],[0]]])
    output = 'The price of Potato in Agartala will be Rs. ' + \
        str(int(result[0][0])) + ' in future.'
    return {"output":output}


@app.route('/potd', methods=['POST', 'GET'])
def predict1():
    #variables
    result = model.predict([[[0], [31], [26], [1], [0], [0]]])
    output = 'The price of Potato in Dehradun will be Rs. ' + \
        str(int(result[0][0])) + ' in future.'
    return {"output": output}


@app.route('/ona', methods=['POST', 'GET'])
def predict2():
    #variables
    result = model.predict([[[1], [31], [26], [0], [0], [0]]])
    output = 'The price of Onion in Agartala will be Rs. ' + \
        str(int(result[0][0])) + ' in future.'
    return {"output": output}


@app.route('/ond', methods=['POST', 'GET'])
def predict3():
    #variables
    result = model.predict([[[1], [31], [26], [1], [0], [0]]])
    output = 'The price of Onion in Dehradun will be Rs. ' + \
        str(int(result[0][0])) + ' in future.'
    return {"output": output}


@app.route('/toa', methods=['POST', 'GET'])
def predict4():
    #variables
    result = model.predict([[[2], [31], [26], [0], [0], [0]]])
    output = 'The price of Tomato in Agartala will be Rs. ' + \
        str(int(result[0][0])) + ' in future.'
    return {"output": output}


@app.route('/tod', methods=['POST', 'GET'])
def predict5():
    #variables
    result = model.predict([[[2], [31], [26], [1], [0], [0]]])
    output = 'The price of Tomato in Dehradun will be Rs. ' + \
        str(int(result[0][0])) + ' in future.'
    return {"output": output}

if __name__ == '__main__':
    app.run(debug=True)
