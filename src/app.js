const request = require('request')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const W_search = require('./utils/app-mymethod')
app = express()

//defining paths for express config
const publicDir = path.join(__dirname, "../public")

//const viewsPath = path.join(__dirname, "../templates")
const partialsPath = path.join(__dirname,"../partials")

// setup handlebars engine and views location 
app.set('view engine','hbs')
//app.set('views' , viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req,res)=>{

    res.render('index', {
        title : 'Web App',
        name : 'Abhishek'
    })
    
            
 })

 app.get('/about', (req,res)=>{

    res.render('about', {
        title : 'About',
        name : 'Abhishek'
    })
    
            
 })

 app.get('/help', (req,res)=>{

    res.render('help', {
        title : 'Help',
        name : 'Abhishek'
    })
    
            
 })

 app.get('/weather', (req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'please provide a Address'
        })
    }
    
    W_search(req.query.search,(error,data)=>{
        res.send(
            {
                Error: error,
                Forecast: data
            }
        )
    })
        
                
     })

 app.get('/products', (req,res)=>{
if(!req.query.search){
    return res.send({
        error: 'please provide a search value'
    })
    // we can get single req and res at one time so we used return to stop function
}
    res.send({
      products: []
    })
    
            
 })

 app.get('*', (req,res)=>{

    res.render('404', {
        title : 'Error 404',
        name : 'Abhishek'
    })
    
            
 })



 app.listen(3000,()=>{
     console.log('Server is up on port 3000')
 })
