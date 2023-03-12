const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Routes = require('./routes/route.js');
mongoose.set("strictQuery", true);
const PORT = 3001;

const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/', Routes);

mongoose.connect(
    "mongodb+srv://mohdarshad86:Arshad86@cluster0.r4p7rwf.mongodb.net/toDo-DB",
    { useNewUrlParser: true })
    .then(() => {
        console.log("mongoDB is connected");
    })
    .catch((err) => {
        console.log(err.message);
    });

app.listen(PORT, () => {
    console.log(`Your App is running on PORT ${PORT}`)
});