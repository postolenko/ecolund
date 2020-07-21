ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.823543, 30.078758],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark1 = new ymaps.Placemark([53.902512, 27.561481], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
        iconImageOffset: [27, -28]
    });

    myPlacemark2 = new ymaps.Placemark([55.183672, 30.204791], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });        

    myPlacemark3 = new ymaps.Placemark([54.510741, 30.429586], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myMap.geoObjects
    .add(myPlacemark1)
    .add(myPlacemark2)
    .add(myPlacemark3);
});