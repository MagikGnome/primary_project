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
var modal_wrapper= document.querySelector('.modal_wrapper');
var feedback = document.querySelector('.feedback_btn');
var feedback_close = document.querySelector('.feedback_close');
feedback.addEventListener('click',function(event) {
    event.preventDefault();
    modal_wrapper.classList.toggle('feedback_open');
});
feedback_close.addEventListener('click',function(event) {
    event.preventDefault();
    modal_wrapper.classList.toggle('feedback_open');
});
