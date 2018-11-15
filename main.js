/* $(document).keyup(function(e) {
    if(e.which == 13) {
        $( "#alert" ).css( "display", "flex" );
    } else {
        $( "#alert" ).css( "display", "none" );
    }
}); */

var toShow = true;
$(document).keydown(function(keyEvent) {
    if(keyEvent.keyCode == 13){
            $('#alert').toggle(toShow);
            $('#alert').toggle(!toShow);
        toShow = !toShow;
    }
});

