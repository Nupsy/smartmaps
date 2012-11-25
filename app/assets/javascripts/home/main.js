var map;
var geocoder;
var infowindow; // there's everytime only a infowindow opened

function initialize() {
    geocoder = new google.maps.Geocoder();
    infowindow = new google.maps.InfoWindow();
    
    var myLatlng = new google.maps.LatLng(38.684711, -9.161200);
    var myOptions = {
        zoom: 12,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDoubleClickZoom: true,
        disableRightClickZoom: true,
		streetViewControl: true,
        panControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_LEFT
        },
		overviewMapControl: true
    }
    
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    	
	//click event on the map
    //google.maps.event.addListener(map, 'click', mapLeftClickHandler);
	
	//right click event on the map
    //google.maps.event.addListener(map, 'rightclick', mapRightClickHandler);
    
	//double click event on the map
    //google.maps.event.addListener(map, 'dblclick', mapDoubleClickHandler);
	
	//drag event on the map
    //google.maps.event.addListener(map, 'drag', mapDragHandler);
}