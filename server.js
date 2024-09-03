const express = require("express");
const axios = require("axios")
const app = express();
const PORT = 3000;

app.get("/weather", async (req, res) => {
    const city = "thane"
    const KEY = "3da301ef219b1a51053fe32766928c20"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`

    let weather;
    let error = null;

    try {
        const response = await axios.get(url)
        weather = response.data.main.temp
        let up_weather = JSON.stringify(weather)
        let in_weather = (parseInt(up_weather) - 273.3).toPrecision(4)
        res.send(in_weather)
    } catch (error) {
        res.send(error)
    }
    console.log("api is working")
})

app.listen(PORT, () => {
    console.log(`Server Runs in: http://localhost:${PORT}`)
})