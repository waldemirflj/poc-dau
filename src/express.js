const path = require('path')
const express = require('express')
const session = require('express-session')
const routes = require('./routes')

const { SESSION_SECRET } = process.env

const server = express()
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, 'views'))
  .use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false
    }
  }))
  .use(express.urlencoded({ extended: false }))
  .use(express.json())
  .use(routes)

module.exports = server
