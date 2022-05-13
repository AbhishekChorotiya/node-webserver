const request = require('request')


const geocode = (address,callback)=>{

    const url = 'http://api.positionstack.com/v1/forward?access_key=ec71f7b2adcf88abf06377f33e94fb66&query=' + address + '&limit=1'

    request({url:url,json : true}, (error,response)=>{

        if(error){
            callback('Not connected to internet!')
        }else if(response.body.error){
            callback('no location found!')
        }
        else{
            callback(undefined,{
             latitude : response.body.data[0].latitude,
             longitude : response.body.data[0].longitude
            })
        }

    })

}

module.exports = geocode