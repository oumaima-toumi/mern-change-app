import mongoose from "mongoose" ;
const connectDB = async () => { 
    try{
     await  mongoose.connect(process.env.CONNECTION_URI) 
     console.log('Successfully connected to mongoDB')
    }
    catch(error){
        console.log("Error while connecting DB")
    }
}
export default connectDB ;