const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");

const app = express();
const port = 4000;

// ✅ Mongoose Connection
mongoose.connect("mongodb+srv://udawat:1234@udawat.1cdje.mongodb.net/Wensday", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected");
});
mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB Error:", err);
});

// ✅ Allowed Origins (No trailing slashes)
const allowedOrigins = [
  "http://localhost:5173",
  "https://node-frontend-gamma.vercel.app",
  "https://node-frontend-sudarshan-singh-udawats-projects.vercel.app",
];

// ✅ CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow Postman or curl
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("❌ Not allowed by CORS"));
    }
  },
  credentials: true,
};

// ✅ Apply CORS Middleware
app.use(cors(corsOptions));

// ✅ Middleware to Parse JSON Body
app.use(express.json());

// ✅ Routes
app.use("/user", userRouter);
app.use("/product", productRouter);

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
