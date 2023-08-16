const express = require('express');
   const app = express();
   const model = require('C:\Users\Piyush\Desktop\Git Uploads\Farm-Fresh\public\model.sav'); // Import your LSTM model

   app.use(express.json());

   app.post('/predict', (req, res) => {
     const inputData = req.body.inputData; // Assuming your input data is sent in the request body
     const prediction = model.predict(inputData); // Make predictions using your LSTM model
     res.json({ prediction });
   });

   const PORT = process.env.PORT || 3001;
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
   });




