
const geocode = require('./geocode')

geocode('jaipur', (error,data)=>{
    console.log('Error',error)
    console.log('Data',data)
})