
console.log('client side java script is loaded!')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const massage1 = document.querySelector('#massage1')
const massage2 = document.querySelector('#massage2')
const massage3 = document.querySelector('#massage3')

massage1.textContent = 'hello'

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(!search.value){

console.log('Enter Location...')
massage1.textContent = 'Enter Location...'

    }
    else{
        const location = search.value
        console.log(location)
    
        fetch('http://localhost:3000/weather?search='+ location).then((data)=>{
        data.json().then((result)=>{
            console.log(result.Forecast)
            massage1.textContent = 'Cloudcover : ' +result.Forecast.cloudcover
            massage2.textContent = 'Temprature : ' +result.Forecast.temprature
            massage3.textContent = 'Humidity : ' +result.Forecast.Humidity
        })
    })     
    }
})