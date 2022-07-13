import $ from "jquery";
class MapFS {

    constructor()
    {

        if ($('.section-fullscreen-map').length) {
            console.log("---------------------------- section-map");

            let pointArray = [];
            let markers = [];
            let currentMarker

            //console.log("---------------------------- Map");

            function getWindowSize()
            {

                if (document.body && document.body.offsetWidth) {
                    self.winW = document.body.offsetWidth;
                    self.winH = document.body.offsetHeight;
                }
                if (document.compatMode === 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth ) {
                    self.winW = document.documentElement.offsetWidth;
                    self.winH = document.documentElement.offsetHeight;
                }
                if (window.innerWidth && window.innerHeight) {
                    self.winW = window.innerWidth;
                    self.winH = window.innerHeight;
                }

                return {width : self.winW, height : self.winH};
            }

            function startMap()
            {

                var pointArray = [];
                var markers = [];
                var infoWindows = [];
                var title = $('.map-info').data("title")
                var description = $('.map-info').data("description")
                var lat = $('.map-info').data("lat")
                var lon = $('.map-info').data("lon")
                var mapZoom = $('.map-info').data("zoom")
                var marker = $('.map-info').data("marker")
                var markerWidth = $('.map-info').data("marker-w")
                var markerHeight = $('.map-info').data("marker-h")
                var markerX = $('.map-info').data("marker-x")
                var markerY = $('.map-info').data("marker-y")
                var mapOptions;

                console.log('markerWidth ' + markerWidth + " markerHeight " + markerHeight)

                //console.log(lat, lon, mapZoom)

                var MapPoints = new google.maps.LatLng(lat, lon);

                mapOptions = {
                    zoom: mapZoom,
                    center: MapPoints,
                    disableDefaultUI: true,
                    panControl: false,
                    zoomControl: true,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle.SMALL,
                        position: google.maps.ControlPosition.RIGHT_BOTTOM
                    },
                    mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'blue']
                    },
                    scaleControl: false,
                    //draggable: false,
                    scrollwheel: false,

                    styles: window.data.map_styles

                };

                let map = new google.maps.Map(document.getElementById('map'), mapOptions);

                var markerBounds = new google.maps.LatLngBounds();

                const icon = {
                    url: window.data.map_marker,
                    anchor: new google.maps.Point(5,8),
                    scaledSize: new google.maps.Size(10,16),
                }

                function createTestMarker()
                {
                    const mainIcon = {
                        //url: marker,
                        //anchor: new google.maps.Point(0,0),
                        //scaledSize: new google.maps.Size(52,60),
                    }

                    var myMarker = new google.maps.Marker({
                        position: MapPoints,
                        map: map,
                        title: title,
                        description: description,
                        icon: mainIcon,
                    });

                }

                function createMainMarker()
                {

                    const mainIcon = {
                        url: marker,
                        //anchor: new google.maps.Point(8,0),
                        //scaledSize: new google.maps.Size(52,60),
                        anchor: new google.maps.Point(markerX,markerY),
                        scaledSize: new google.maps.Size(markerWidth,markerHeight),
                    }

                    var myMarker = new google.maps.Marker({
                        position: MapPoints,
                        map: map,
                        title: title,
                        description: description,
                        icon: mainIcon,
                    });

                    let link

                  ////console.log('add link ' + link);

                 // if (m.ex_link) {
                  //  link = '<a class="link" href="'+ m.ex_link +'" target="_blank">Get directions  <i class="far fa-chevron-right"></i></a>'
                 // }

                  //console.log('link ' + link)

                    let contentString = '<div class="content">' +
                    '<h3>' + title + '</h3>' +
                    '<div class="body-content">' +
                    '<div class="address">' + description + '</div>' +
                    '</div>' +
                    '</div>';

                    markerBounds.extend(MapPoints);

                  //console.log('contentString ', contentString)

                    myMarker.infoWindow = new google.maps.InfoWindow({
                        content:  contentString,
                        disableAutoPan : true
                    });

                    markers.push(myMarker);

                    google.maps.event.addListener(myMarker, 'click', function () {

                        currentMarker = myMarker

                        map.panTo(myMarker.getPosition());

                        for (var i = 0; i < markers.length; i++) {
                            markers[i].infoWindow.close()
                        }

                        myMarker.infoWindow.open(map,myMarker);

                    });

                    google.maps.event.addListener(myMarker.infoWindow,'closeclick',function () {

                        map.panTo(currentMarker.getPosition());
                    });
                }

                createMainMarker();

              //createTestMarker ();



             //////////////////////////////////////////
              //////////////////////////////////////////

                function addMapMarker(m)
                {

                    //console.log("m ", m)

                    var icon = {
                      //path: google.maps.SymbolPath.CIRCLE,
                        path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
                        fillColor: m.colour,
                        fillOpacity: 1,
                        strokeWeight: 0,
                        scale: 0.6,
                    }

                    var myMarker = new google.maps.Marker({
                        position: m.points,
                        map: map,
                        title: m.name,
                        icon: icon,
                        type: m.type,

                        label: {
                            text: m.label,
                            color: 'white',
                            weight:'bold'
                        }
                        });

                      myMarker.setVisible(false)

                      let contentString = '<div class="content">' +
                      '<h3>' + m.title + '</h3>' +
                      '<div class="body-content">' +
                      '<div class="address">' + m.description + '</div>' +
                      '</div>' +
                      '</div>';

                      markerBounds.extend(m.points);

                      myMarker.infoWindow = new google.maps.InfoWindow({
                            content:  contentString,
                            disableAutoPan : true
                        });

                      markers.push(myMarker);

                      google.maps.event.addListener(myMarker, 'click', function () {

                              currentMarker = myMarker

                              map.panTo(myMarker.getPosition());

                        for (let i = 0; i < markers.length; i++) {
                            markers[i].infoWindow.close()
                        }

                              myMarker.infoWindow.open(map,myMarker);

                      });

                      google.maps.event.addListener(myMarker.infoWindow,'closeclick',function () {

                        map.panTo(currentMarker.getPosition());

                      });

                }

                //console.log("map");

                $(".map-marker").each(function (index) {

                    //console.log("map link");

                    var p = {};

                    p.lat = $(this).attr("data-lat");
                    p.lon = $(this).attr("data-lon");
                    p.title = $(this).attr("data-title");
                    p.description = $(this).attr("data-description");
                    p.colour = $(this).attr("data-colour");
                    p.label = $(this).attr("data-label");
                    p.type = $(this).attr("data-type");

                    pointArray.push(p);

                });


                if (pointArray.length > 0) {
                    for (var i = 0; i < pointArray.length; i++) {
                        var m = {};

                        //console.log("label " + i);

                        m.points = new google.maps.LatLng(pointArray[i].lat, pointArray[i].lon);
                        m.title = pointArray[i].title;
                        m.description = pointArray[i].description;
                        m.colour = pointArray[i].colour;
                        m.label = pointArray[i].label;
                        m.type = pointArray[i].type;
                        m.lat = pointArray[i].lat;
                        m.lon = pointArray[i].lon;

                        addMapMarker(m);
                    }
                }

              /*for (let i = 0; i < markers.length; i++) {

                console.log('markers loop dining')

                console.log('markers[i].type ', markers[i].type)



                if (markers[i].type === 'dining') {

                  console.log('dining')

                  markers[i].setVisible(false);
                }

              }*/


                $(".marker-type").click(function () {
                    //alert( "Handler for .click() called." );

                    if ($(this).hasClass('markers-hidden')) {
                        $(this).removeClass('markers-hidden')
                    } else {
                        $(this).addClass('markers-hidden')
                    }

                    let type = $(this).attr("data-type");

                    for (let i = 1; i < markers.length; i++) {
                        if (markers[i].type === type) {
                            if (markers[i].visible === true) {
                                markers[i].setVisible(false);
                            } else {
                                markers[i].setVisible(true);
                            }
                        } else {
                          markers[i].setVisible(false)
                        }
                    }

                    let bounds = new google.maps.LatLngBounds();

                    let visible = 0;

                    for (let i = 0; i < markers.length; i++) {
                        if (markers[i].visible === true) {
                            bounds.extend(markers[i].position)

                          visible ++;
                          //console.log(markers[i])
                        }
                    }

                    if (visible > 1) {
                      map.fitBounds(bounds);
                    } else {

                      map.setCenter(markers[0].position);
                      map.setZoom(mapZoom);

                    }


                    // set bounds
                });



            }

            function runAPITimercheck()
            {

                console.log("runAPITimercheck");

                console.log(window.data.apiLoaded);

                if (window.data.apiLoaded === true) {
                    console.log('run map');

                    startMap();

                    //run map
                } else {
                    console.log('check map API again');

                    // / setTimeout(runAPITimercheck, 500);
                }

            }

            runAPITimercheck();
        }
    }

}

export default MapFS
