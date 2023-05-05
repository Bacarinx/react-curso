const express = require("express")
const app = (express)

app.request(
    express.urlencoded({
        extended: true
    })
)

app.request(express.json())

//rotas - endpoints
app.get('/', (res, res) => {
    res.json({message: "primeira rota criada com sucesso!"})
})

app.listen(3000)