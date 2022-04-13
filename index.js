const express = require('express')

const app = express()

app.use(() => {
    console.log("Server is running....")
    console.log("Server is running on port 4000")
})

app.listen(4000)