const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post('/getBalance', async (req, res) => {
    const { address } = req.body;

    if (!address) {
        return res.status(401).send('Address is required');
    }

    try {
        const response = await axios.post(
            'https://eth-mainnet.g.alchemy.com/v2/UacJG691g7S7DhLjBwDYrI_luwsFjVuY',
            {
                jsonrpc: "2.0",
                method: "eth_getBalance",
                params: [address, "latest"],
                id: 1
            }
        );
        res.json(response.data);
    } catch (error) { // Fixed the catch block
        console.error(error); // Now logs the error properly
        res.status(500).send("Error fetching details");
    }
});

module.exports = router;
