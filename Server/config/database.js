const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParse: true,
        useUnifiedTopology: tru
    })
        .then(() => console.log('Db connected successfully'))
        .catch((error) => {
            console.log('DB connection failed');
            console.error(error);
            process.exit(1);
        })
};