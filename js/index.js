function initMap() {
    var baloon = {lat:59.938808, lng:30.323250};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: {lat:59.9391009,lng:30.3239469},
    disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
    position:baloon,
    icon:'../img/baloon.png',
    map: map
    });
}
var modal_search = document.querySelector('.modal_search');
var search = document.querySelector('.search');
var modal_login = document.querySelector('.modal_login');
var login = document.querySelector('.login');
search.addEventListener('click',function(event) {
    event.preventDefault();
    modal_search.classList.toggle('search_open');
});
login.addEventListener('click',function(event) {
    event.preventDefault();
    modal_login.classList.toggle('login_open');
});
