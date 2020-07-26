const express = require('express')
const axios = require('axios')
const { response } = require('express')
const app = express()
const port = 5000
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})
const url1 ='https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=1a11eac5ec0302ffacb46b2cd5ecdb7e'
const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=1a11eac5ec0302ffacb46b2cd5ecdb7e'
const url3 ='https://api.openweathermap.org/data/2.5/weather?q=tunis&appid=1a11eac5ec0302ffacb46b2cd5ecdb7e'

app.get('/',(req,res)=>{
    axios.get(url1)
    .then(data => {res.json(data.data)})
    .catch(err=>{})
})
app.get('/london',(req,res)=>{
    axios.get(url2)
    .then(data=>{res.json(data.data)})
    .catch(err=>{console.log(err)})
})
app.get('/tunis',(req,res)=>{
    axios.get(url3)
    .then(data =>{res.json(data.data)})
    .catch(err=>console.log(err))
})