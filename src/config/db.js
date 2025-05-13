
import mongoose from "mongoose";

export const connectDB = async ()=>{
  
 mongoose
  .connect('mongodb+srv://sharmahimanshu2429:kt3NNsi8q8qfXMyG@cluster0.f1niq0x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
}
