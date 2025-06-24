const express = require("express")
const port = 4000
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoute")
const productRouter = require("./routes/productRoute")
const cors = require("cors")

mongoose.connect("mongodb+srv://udawat:1234@udawat.1cdje.mongodb.net/Wensday");

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://node-test-folder.vercel.app/",
];

cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true); // ✅ Allowed
      } else {
        callback(new Error("❌ Not allowed by CORS"));
      }
    },
    credentials: true // ✅ Needed if using cookies or auth headers
  })

app.use(express.json())


app.use("/user",userRouter)
app.use("/product",productRouter)



app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})