const express = require("express");
const axios = require("axios")

const app = express();
const PORT = 3000;






app.get("/weather", async (req, res) => {
    const city = "mumbai"
    const KEY = "3da301ef219b1a51053fe32766928c20"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`

    let weather;
    let error = null;

    try {
        const response = await axios.get(url)
        weather = response.data
        res.send(weather.weather[0].main)
    } catch (error) {
        res.send(error)
    }
    console.log("api is working")
})

app.listen(PORT, () => {
    console.log(`Server Runs in: ${PORT}`)
})