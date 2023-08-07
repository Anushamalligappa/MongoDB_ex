require("dotenv/config")
const express=require("express")
const cors=require("cors");
const app=express()
const connectDB=require('./config/db')
const usersRouter=require('./routes/users')
const eventsRouter=require('./routes/events');
const PORT=process.env.PORT||8000;

app.use(cors())
app.use(express.json());
app.use('/api/users',usersRouter);
app.use('/api/events',eventsRouter);


connectDB()
.then(()=>{
    app.listen(PORT,()=>console.log("server is on ",PORT))
})
