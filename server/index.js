const express = require("express")
const cors = require("cors")
const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 3001;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));