const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true,
})

app.use(express.urlencoded({
  extended: false
}))
app.set('view engine', 'njk')



const validaIdade = (req, res, next) => {
  const {
    age
  } = req.query
  if (!age) {
    return res.redirect('/')
  }
  return next()
}
app.get('/', (req, res) => {
  return res.render('form')
})

app.post('/check', (req, res) => {
  age
    = req.body.age
  if (age >= 18)
    return res.redirect(`major?age=${age}`)
  else if (age < 18)
    return res.redirect(`minor?age=${age}`)
})

app.get('/major', validaIdade, (req, res) => {
  age
    = req.query.age
  return res.render('major', {
    age
  })

})

app.get('/minor', validaIdade, (req, res) => {
  age
    = req.query.age
  return res.render('minor', {
    age
  })
})

app.listen(8000)
