// Как только будет загружен API и готов DOM, выполняем инициализацию
ymaps.ready(init);

// Инициализация и уничтожение карты при нажатии на кнопку.
function init () {
    var myMap;
    $('#map').hover(function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    center: [55.850479, 37.537955],
                    zoom: 18,
                    controls: []
                }, {
                    searchControlProvider: 'yandex#search'
                });
                myMap.behaviors.disable('scrollZoom');
                myMap.controls.add('zoomControl');
            }
    });
}