import mongoose from 'mongoose';

export const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error, 'error');
    process.exit(1); // 1 exit code means failure, 0 means success
  }
};

export const disconnectDb = async () => {
  await mongoose.disconnect();
};
