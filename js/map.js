function success(position) {

    var mapcanvas = document.createElement('div');
    mapcanvas.id = 'mapcanvas';
    mapcanvas.style.height = '400px';
    mapcanvas.style.width = '100%';

    document.querySelector('#map-page').appendChild(mapcanvas);

    var latlng = new google.maps.LatLng(12.162068, -86.275689);
    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"Estamos aqui! (al menos dentro de un rango de "+position.coords.accuracy+" metros de radio)"
    });
}

function error(msg) {
    console.log(msg);
    //console.log(arguments);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    error('not supported');
}
