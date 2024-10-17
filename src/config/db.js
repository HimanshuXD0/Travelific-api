
import mongoose from "mongoose";

export const connectDB = async ()=>{
  
 mongoose
  .connect('mongodb+srv://sharmahimanshu2429:kt3NNsi8q8qfXMyG@cluster0.hsq1v.mongodb.net/mern_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
}
