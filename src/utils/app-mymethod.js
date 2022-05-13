const request = require('request')


const W_search = (city,callback)=>{

const url = 'http://api.positionstack.com/v1/forward?access_key=ec71f7b2adcf88abf06377f33e94fb66&query=' + city + '&limit=1'

request({url : url, json: true}, (error , response)=>{


const latitude = response.body.data[0].latitude
const longitude = response.body.data[0].longitude
    
weather(latitude,longitude)

})


function weather(x,y) {
const address = 'http://api.weatherstack.com/current?access_key=bb426526da594ac028d47cf6b188f711&query=' + x + ',' + y



request({url : address, json:true}, (error , response)=>{


    
        callback(undefined,{
            temprature :  response.body.current.temperature,
            cloudcover :  response.body.current.cloudcover,
            Humidity :   response.body.current.humidity
        })
    

})
 }
}
module.exports = W_search