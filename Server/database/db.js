import mongoose from 'mongoose';
const Connection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/itsAwesome');
    console.log('connected');
  } catch (error) {
    console.log(`error occured while connecting with mongo`, error);
  }
};
export default Connection;
