ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [59.823543, 30.078758],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });

    myPlacemark1 = new ymaps.Placemark([59.819481, 30.084848], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
        iconImageOffset: [27, -28]
    });

    myPlacemark2 = new ymaps.Placemark([59.827130, 30.082396], {
        hintContent: ''
    }, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: 'img/map_marker.png',
        iconImageSize: [27, 33],
         iconImageOffset: [27, -28]
    });

    myPlacemark3 = new ymaps.Placemark([59.826092, 30.076345], {
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