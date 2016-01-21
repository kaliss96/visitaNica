$().ready(function(){
  var visible = 0;
  $('#menubar').on('click',function(){
      if(visible == 1){
          $('.menu').animate({
              left:'-100%'
          });
          visible = 0;
      }else{
          $('.menu').animate({
              left:'0'
          });
          visible = 1;
      }

  });

});

function successWeather(position) {
    $.get( "http://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&mode=html", function( data ) {
        $( "#clima" ).html( data );
    });
}

function error(msg) {
    console.log(msg);
    //console.log(arguments);
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successWeather, error);
} else {
    error('not supported');
}
