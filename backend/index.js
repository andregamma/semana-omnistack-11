const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json({
        aula: 'Semana Omnistack 11',
        alunos: 'Jeffyter Saraiva e André Gama'
    })
})

app.listen(3333)