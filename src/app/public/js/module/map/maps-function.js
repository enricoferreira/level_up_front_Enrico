// Initialize and add the map
export function renderMap(lat, lng) {     
    var currentLocale = {lat, lng};    
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 8, center: currentLocale});    
    var marker = new google.maps.Marker({position: currentLocale, map: map});
  }