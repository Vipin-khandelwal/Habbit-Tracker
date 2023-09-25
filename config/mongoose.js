const mongoose = require('mongoose');
mongoose.set("strictQuery", false);


mongoose.connect('mongodb+srv://Vipin:VIP95in04@cluster0.zwij1ed.mongodb.net/Habits-Tracker');
// mongoose.connect('mongodb://localhost/habit-tracker');
// mongoose.connect('mongodb+srv://divyagaurav:divyagaurav@cluster1.ispjeaf.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

//if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));

// server is up then run a message 
db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})
module.export = db;

// const connectDB = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         await mongoose.connect(db, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB Connected...');
//     } catch (err) {
//         console.error(err.message);
//         // make the process fail
//         process.exit(1);
//     }

// }


