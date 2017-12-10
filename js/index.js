function initMap() {
    var baloon = {lat:59.938808, lng:30.323250};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat:59.9391009,lng:30.3239469},
    disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
    position:baloon,
    icon:'/img/baloon.png',
    map: map
    });
}