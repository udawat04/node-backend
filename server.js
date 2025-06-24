const express = require("express")
const port = 4000
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoute")
const productRouter = require("./routes/productRoute")
const cors = require("cors")

mongoose.connect("mongodb+srv://udawat:1234@udawat.1cdje.mongodb.net/Wensday");

const app = express()

const allowedOrigins = [
  "http://locahost:5173",
  "https://node-test-folder.vercel.app/",
];

app.use (cors())
app.use(express.json())


app.use("/user",userRouter)
app.use("/product",productRouter)



app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})