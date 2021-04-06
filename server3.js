var express = require('express')
//1.创建app
var app = express()
app.use('/public/', express.static('./dist/'))
//可以直接访问127.0.01：3000/public/index.html
//必须是/a/public/中的资源具体路径
// app.use('/abc/', express.static('./dist/'))
//127.0.01：3000/abc/index.html才能访问public的东西，可以理解为abc是public的别名
app.get('/', function (req, res) {
  res.send('helloworld')
})

app.listen(8081, function () {
  console.log('running...')
})
