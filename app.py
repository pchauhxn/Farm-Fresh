from flask import Flask
import pickle
from flask_cors import CORS



app = Flask(__name__)
#load the model
CORS(app)

model = pickle.load(open('model.pkl','rb'))

def preprocess_inp(data):
    data = data.copy()

    data['Vegetable'] = data['Vegetable'].replace({
        'cabage': 1,
        'radish': 2,
        'potato': 3,
        'tomato ': 4,
        'peas': 5,
        'pumkin': 6,
        'cucumber': 7,
        'pointed grourd ': 8,
        'Raddish': 9,
        'Bitter gourd': 10,
        'onion': 11,
        'ginger': 12,
        'garlic': 13,
        'califlower': 14,
        'brinjal': 15,
        'okra': 16,
        'chilly': 17,
    })

    data['Deasaster Happen in last 3month'] = data['Deasaster Happen in last 3month'].replace({'no' : 0,'yes' : 1})

    data['Month'] = data['Month'].replace({
        'jan' : 1,
        'feb':2 ,
        'mar':3,
        'apr':4,
        'may':5,
        'jun':6 ,
        'jul':7,
        'aug':8,
        'sep':9,
        'oct':10,
        'nov':11,
        'dec' : 12,
        ' ' : np.NaN
    })

    data['Month'] = data['Month'].fillna(data['Month'].mode()[0])
    data['Vegetable condition'] = data['Vegetable condition'].replace({'fresh' : 0,'avarage':1,'scrap':2})
    data['Season'] = data['Season'].replace({'winter' : 0,'summer':1,'spring':2,'autumn': 3,'monsoon':4})
    return data

@app.route('/pota', methods=['POST','GET'])
def predict0():
    #variables
    
    inp = pd.read_csv('new.csv')

    veg  = inp['Vegetable']

    inpt = preprocess_inp(inp)

    predicted_price = model.predict(inpt)
    # result = model.predict([[[0],[31],[26],[0],[0],[0]]])
    output = 'The price of Potato in Agartala will be Rs. ' + \
        str(int(result[0][0])) + ' in future.'
    return {"output":output}



if __name__ == '__main__':
    app.run(debug=True)
