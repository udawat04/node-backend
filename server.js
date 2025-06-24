const express = require("express");
const port = 4000;
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");
const cors = require("cors");

mongoose.connect("mongodb+srv://udawat:1234@udawat.1cdje.mongodb.net/Wensday");

const app = express();

const allowedOrigins = [
  "http://localhost:5173", // ✅ Local dev
  "https://node-frontend-gamma.vercel.app", // ✅ Production frontend (NO trailing slash!)
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow Postman or curl
    if (allowedOrigins.includes(origin)) {
      callback(null, true); // ✅ Allow
    } else {
      callback(new Error("❌ Not allowed by CORS"));
    }
  },
  credentials: true, // ✅ allow cookies/headers
};

// ✅ Apply CORS before routes
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // ✅ handle preflight requests

app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
