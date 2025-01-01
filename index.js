const express = require("express");
// const mainRouter=require("./routes/index")
// const userRouter =require("./routes/user");
const rootRouter = require("./routes/index");
const cors = require('cors')

const app=express();
app.use(cors())
app.use(express.json())

// app.use("/api/v1", mainRouter)
// app.use("api/v1/user",userRouter)
app.use("/api/v1", rootRouter);


app.get("/",(req,res)=>{
    res.json("hello");
})

app.listen(3000);

