
import  mongoose from 'mongoose';
const authSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  }
  
}, { strict: false });

const Auth = mongoose.model("Auth", authSchema);

export default Auth;