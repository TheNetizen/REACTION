const express=require('express')
const controller=require('../Controller/Service')

const routing=express.Router()

routing.post('/login',controller.login)

module.exports=routing