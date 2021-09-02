const request = require('postman-request')

const geocode = (address, callback) => {
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY2FycmVuam95YSIsImEiOiJja3NzczJjeGEwMWd0Mm5zMWZwZjE2N3dtIn0.7Lcb_29e3EyOldfUrGMcHA&limit=1'

request({ url, json: true}, (error,{body}) => {
    if (error) {
        callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
        callback('Unable to find location. Try another search.' , undefined)
    } else {
        callback(undefined, {
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[1],
            location:body.features[0].place_name
        })
    }
})
}



module.exports = geocode





// const url = 'http://api.weatherstack.com/current?access_key=1c3ac07eecdcfe47c7eb25edf5f81139&query=&units=f'

// request({ url: url, json:true }, (error, response) => {
// //  console.logbody.current)   
//  if (error) {
//      console.log('Unable to connect to weather service!')
//  } else if body.error) {
//      console.log('Unable to find the location')
//  }
 
//  else {
//     console.logbody.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out.' + ' It feels like ' +  response.body.current.feelslike + ' degrees out.')

//  }
    
// })

// Geocoding
// Address -> Lat/ Long -> weather

// const geocodingURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelpia.json?access_token=pk.eyJ1IjoiY2FycmVuam95YSIsImEiOiJja3NzczJjeGEwMWd0Mm5zMWZwZjE2N3dtIn0.7Lcb_29e3EyOldfUrGMcHA&limit=1'

// request ({ url: geocodingURL, json:true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location. Try another search.')
//     } else  {
//         const latitude = response.body.features [0] . center [0]
//         const longitude = response.body.features [0] . center [1]
    
//         console.log( latitude, longitude)
//     }


// })


 

