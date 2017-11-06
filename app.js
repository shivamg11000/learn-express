const express = require('express')
const app = express()

app.set('view engine', 'ejs') // set view engine

app.get(['/', '/home'], (req, res) => { // render looks for file in views
    res.render('index.ejs')
})
app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

app.get('/profile/:name', (req, res) => {
    const data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data})  // passing data to the view profile
})

app.get('*', (req, res) => {  // for all other url paths
    res.send('<h1>404</h1>')
})

app.listen(process.env.PORT || 8000, console.log('Website running on http://localhost:8000') )