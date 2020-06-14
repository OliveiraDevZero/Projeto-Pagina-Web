const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extented: true }))
app.use(bodyParser.json())

app.post('/cadastroUsuario', (req, res) => {
    res.send({
        ...req.body,
    })
})

app.listen(8080, () => console.log('Executando......'))