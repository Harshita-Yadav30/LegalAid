const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

require("./Config/database").connect();

const user = require("./Routes/user");
app.use("/api/v1",user);

app.listen(PORT,() => {
    console.log('App is listening at port ${PORT} ');
})

app.get('/Create_Account/create_account.html', (req,res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const client = req.body.client;
    const professional = req.body.professional;
    const mobile = req.body.mobile;
    const email = req.body.email;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
})
