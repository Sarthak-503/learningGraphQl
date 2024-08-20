import mongoose from 'mongoose';
export const connectDB = (url) => {
    return mongoose.connect(url, {
        dbName: 'GraphQL'
    }).then((c) => {
        console.log(`Connected with ${c.connection.name}`);
    }).catch((error) => {
        console.log(error);
    });
};
