
$( document ).ready(function() {
    console.log( "ready!" );
    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();
    $( '.fa-shield' ).on('hover', function(){
      console.log('hovering...');
    });


});
