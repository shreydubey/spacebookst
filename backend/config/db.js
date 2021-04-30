import mongoose from 'mongoose';
import pino from 'pino'
import { MONGO_URI }  from '../../tokens.js'

const logger = pino({
  level: 'info',
  timestamp: () => `,"time":${new Date().toISOString()}`

});

const connectDB = async () => {
    try {const conn = await mongoose.connect(process.env.MONGO_URI || MONGO_URI,{
        useUnifiedTopology : true,
        useNewUrlParser : true,
        useCreateIndex : true
        
        
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    logger.info(`MongoDB Connected: ${conn.connection.host}`)
}
    catch(error) {
        logger.error(`Error: ${error.message}`,error)
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;