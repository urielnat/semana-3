//Usando objeto express
const express = require('express')
//app de Express
const app = express()
//puerto en que vamos a ver nuestra app: localhost:3000
const port= 3000

//path inicial, responderá a la url localhost:3000

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})

app.get('/launchx',(rep,res)=>{
    res.send('Bienvenidos a launchx')
})

app.get('/exporersInNode',(req,res)=>{
    const explorer = {name:'Explorer',msg:'hello'}
    res.send(explorer)
})

app.get('/explorers/:explorerName',(req,res)=>{
    res.send(req.params)
})