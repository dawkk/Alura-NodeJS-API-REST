const express = require('express')
const app = express()


/* Primeiro dado é a porta e o segundo uma função de callback */
app.listen(3000, () => console.log('A API está funcionando!'))