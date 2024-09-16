const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post('/getBalance', async (req,res) => {
    const { address } = req.body;

    if(!address){
        return res.status(401).send('address is required');
    }
    try{
        const response = await axios.post(
            'https://eth-mainnet.g.alchemy.com/v2/UacJG691g7S7DhLjBwDYrI_luwsFjVuY',
            {
                jsonrpc: "2.0",
                method: "eth_getBalance",
                params:[address, "latest"],
                id: 1
            }
        );
        res.json(response.data)
    }catch{
        console.error(error);
        res.status(500).send("error fetching details")
    }
})

const PORT = 3004;
app.listen(PORT, ()=> {
    console.log(`server running at ${PORT}`)
})