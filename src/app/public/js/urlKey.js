export const searchLatLong = (cep) =>{        
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyDDlk6O71OM4rpzCV31colJ0CxzyM7ViZ8`)
    .then(data => data.json())
    .then(json => {
        const location = json.results[0].geometry.location;        
        return location;
    }) 
}