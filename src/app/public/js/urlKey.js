export const searchLatLong = (cep) =>{        
    const apiKey = '';
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${apiKey}`)
    .then(data => data.json())
    .then(json => {
        const location = json.results[0].geometry.location;        
        return location;
    }) 
}
