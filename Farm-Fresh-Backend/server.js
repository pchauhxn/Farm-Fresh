const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Order = require("./Models/OrderModel");
const User=require("./Models/UserModel")
require("dotenv").config();
const Razorpay = require('razorpay');
const app = express();
const jwt =require("jsonwebtoken");
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Function to connect to MongoDB
async function connectToMongo() {
  try {
    uri='mongodb+srv://pchauhan7289:x1RwE1uGU2shQeVT@cluster0.sj8faxl.mongodb.net/?retryWrites=true&w=majority'
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB ");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
connectToMongo();

const JWT_SECRET = process.env.JWT_SECRET;
var instance = new Razorpay({
  key_id: 'rzp_test_3VhFJzygakGkMD',
  key_secret: 'Z8gjPAMbqdUQiHs2vSzQnw5g',
});

app.post('/placeorder', async (req, res) => {
  const { amount, userId } = req.body;
  // console.log(req.body);
  try {
    // Create a new order using Razorpay
    const options = {
      amount: amount * 100, // Amount in the smallest currency unit (paise for INR)
      currency: 'INR',
      receipt: 'order_rcptid_11', // Replace with your custom receipt ID
    };

    instance.orders.create(options, async function (err, order) {
      if (err) {
        return res.status(500).json({
          message: 'Something went wrong with payment',
          error: err,
        });
      }


      // Save the order details to your database (MongoDB)
      const newOrder = new Order({
        amount,
        userId,
        rz_order: JSON.stringify(order),
      });

      try {
        await newOrder.save();
        return res.status(201).json({
          rz_order: order,
        });
      } catch (error) {
        return res.status(500).json({
          message: 'Something went wrong while saving the order',
          error: error,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong',
      error: error,
    });
  }
});
// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ status: "notexist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      console.log("logging")
      // sh@gmail.com
      // abcdef123@
      return res.status(200).json({ status: "success", token });
    } else {
      return res.status(401).json({ status: "invalidpassword" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "fail" });
  }
});

// Register route
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ status: "exist" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ status: "user saved" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "fail" });
  }
});


app.listen(8000, () => {
  console.log("port connected to " + 8000);
})
