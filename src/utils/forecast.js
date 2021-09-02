const request = require('postman-request')

const forecast = (latitude, longitude, callback ) => {
    const url = 'http://api.weatherstack.com/current?access_key=1c3ac07eecdcfe47c7eb25edf5f81139&query=' + latitude + ',' + longitude +  '&units=f'
 
 
    // const url = 'http://api.weatherstack.com/current?access_key=1c3ac07eecdcfe47c7eb25edf5f81139&query=' + latitude + ',' + longitude  + '&units=f'

 request({ url, json: true}, (error, {body}) => {
     if (error) {
        callback('Unable to connect to weather services!', undefined)
    } else if (body.error) {
        callback('Unable to find location.' , undefined)
    } else {
        
        callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. The humidity today is '+ body.current.humidity + ' with a pressure of ' + body.current.pressure + '. It feels like ' +  body.current.feelslike + ' degrees out.')
    }
    
})
}


module.exports = forecast






















































//     request({ url: url, json:true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find the location', undefined)
//         }
//         else {
//            callback (undefined, {
//                weather: response.body.current.weather_descriptions[0]
//         }
//    )
   
