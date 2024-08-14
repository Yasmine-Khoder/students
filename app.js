const express = require('express')
const app = express()
const port=process.env.PORT||3000
var cors = require('cors')
app.use(cors())
 

app.get('/', function (req, res) {
  let data=[
    {id:1,name:"std1"},
    {id:2,name:"std2"},
    {id:3,name:"std3"},
    {id:4,name:"std4"}
  ]
  res.send(data)
})

app.listen(port)