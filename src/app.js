const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'About me'
    })
})

app.get('/education', (req, res) => {
    res.render('education', {
        title: 'Education'
    })
})

app.get('/experience', (req, res) => {
    res.render('experience', {
        title: 'Experience'
    })
})

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects'
    })
})

app.get('/projects/file-repo', (req, res) => {
    res.render('file-repo', {
        title: 'File repository RESTful API'
    })
})

app.get('/projects/chat-app', (req, res) => {
    res.render('chat-app', {
        title: 'Chat app'
    })
})

app.get('/projects/task-manager', (req, res) => {
    res.render('task-manager', {
        title: 'Task manager RESTful API'
    })
})

app.get('/projects/weather-app', (req, res) => {
    res.render('weather-app', {
        title: 'Weather app'
    })
})

app.get('/projects/web-album', (req, res) => {
    res.render('web-album', {
        title: 'Web album app'
    })
})

app.listen(port , () => { console.log('server is up on port ' + port) })