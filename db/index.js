import mongoose from 'mongoose';

// MongoDB Atlas 연결
export function dbConnect() {

const DB_URL = process.env.Atlas_URL;

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('connected', () => {
    console.log('Successfully connected to database');
});
db.on('error', (error) => {
    console.error('Failed to connect to database');
});

}
// db 모델 export
// export * from './models/user-model'
// export * from './models/category-model';
// export * from './models/product-model';
// export * from './models/order-model';
