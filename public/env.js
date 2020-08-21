const testButtonFunction=()=>{
  alert('Thank you for clicking')
}


$(document).ready(function(){
  console.log('Ready')
  
  //bind the button
  $('#testButton').click(testButtonFunction)

  //test get call
  $.get('/test?user_name="Fantastic User"',(result)=>{
    console.log(result)
  })

 //Map handling
 var map = L.map('uberMap').setView([-37, -144], 11);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 L.marker([-37.8, 144.78]).addTo(map)
    .bindPopup('Destination')
    .openPopup();

 L.marker([-37.85, 144.75]).addTo(map)
    .bindPopup('From')
    .openPopup(); 

//Driver car icons
var carIcon = L.icon({
  
    iconUrl: 'car.png',
    iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
  
    });

  L.marker([-37.81, 144.70], {icon: carIcon}).addTo(map);

  var carIcon = L.icon({
  
    iconUrl: 'car.png',
    iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
  
    });

  L.marker([-37.82, 144.71], {icon: carIcon}).addTo(map);

})
