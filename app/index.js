const express = require("express")
const app = express()


let i = 1

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Jenkins Tutorial!</title>
                <style> 
                    * {
                        box-sizing: border-box;
                    } 

                    body {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        background-color: dodgerblue;
                    }
                </style>
            </head>
            <body>
                <h1>You are the visitant number ${i++}!!!</h1>
                <h3>...and this means nothing...</h3>
            </body>
        </html>
    `)
})


app.listen(8080)
