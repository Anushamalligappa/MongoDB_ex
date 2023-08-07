const User=require('../models/user')

const createUser=async(req,res)=>{
    try{
        const newUser=await User.create(req.body);
        console.log('Create Book',newUser);
        res.status(201).json(newUser)
    }catch(error){
        res.status(500).json({msg:error.message,errors:error.errors})
        console.log("error",error)
    }
}
const getAllUsers=async(req,res)=>{
    try{
        const {active}=req.query;
        let isActive=true;
        if(active==='false'){
            isActive=false;
        }
        const users=await User.find({isActive});
        console.log('All Users',users);
        res.json(users);

    }catch(error){
        res.json({msg:error.message,errors:error.errors})

    }
}
const getUserById=async(req,res)=>{
    try{
         const{
             params:{id},
         }=req
        // {id}=req.params;
        const users=await User.find({_id:id});
        console.log("idData",users)
        if(users.length==!0){
            res.status(201).json(users[0])
        }{
            res.status(404).json({message:'User not Found'})
        }
        

    }catch(error){
          res.status(500).json({msg:error.message})
    }
}
const updateUser=async(req,res)=>{
    try{
        // {id}=req.params;
        
        const{
        params:{id},
        body,
       }=req;
       const updatedUser=await User.findOneAndUpdate({_id:id},body,{new:true});
       if(updatedUser){
        res.json(updatedUser);
       }
       {
        res.status(404).json({msg:'user Not Found'})
       }

    }catch(error){
        res.status(500).json({msg:error.message})
    }
}
const deleteUser=async(req,res)=>{
    try{
        const{
            params:{id},
        }=req
        const deletedUser=await User.findOneAndDelete({_id:id});
        if(deletedUser){
            res.json(deletedUser)
        }
        {
            res.status(404).json({msg:'user Not Found'})
        }

    }catch(error){
        res.status(500).json({msg:error.message})
    }
}


module.exports= {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}
