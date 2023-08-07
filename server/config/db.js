const mongoose=require('mongoose');

const ConnectDB=async()=>{

    try{
        console.log("String Connection",process.env.MONGODB_CONNECTION);
await mongoose.connect(process.env.MONGODB_CONNECTION)
console.log("connection successful")
    }
    catch(error){
    console.log('connection unsuccessful',error)
    process.exit(1)

    }
}

module.exports =ConnectDB;