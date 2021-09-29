const express=require('express')
const controller=require('../Controller/Service')

const routing=express.Router()

routing.post('/login',controller.login)
routing.post('/register',controller.register)

module.exports=routing