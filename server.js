const express = require("express")
const port = 4000
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoute")
const productRouter = require("./routes/productRoute")
const cors = require("cors")

mongoose.connect("mongodb+srv://udawat:1234@udawat.1cdje.mongodb.net/Wensday");

const app = express()



const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow Postman etc.
    if (allowedOrigins.includes(origin)) {
      callback(null, true); // ✅ allow
    } else {
      callback(new Error("❌ Not allowed by CORS"));
    }
  },
  credentials: true, // ✅ required if using cookies or auth headers
};

app.use(cors(corsOptions));
app.use(cors(corsOptions));

app.use(express.json())


app.use("/user",userRouter)
app.use("/product",productRouter)



app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})