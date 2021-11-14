ymaps.ready(init);

function init () {
    const myMap = new ymaps.Map("map", {
            center: [59.94, 30.32],
            zoom: 12,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });
        const myPlacemark = new ymaps.Placemark([59.94, 30.32], {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            // balloonContentHeader: "Балун метки",
            balloonContent: "Содержимое <em>балуна</em> метки",
            // balloonContentFooter: "Подвал",
            hintContent: "Хинт метки"
        });

    myMap.geoObjects.add(myPlacemark);

    // Открываем балун на карте (без привязки к геообъекту).
    myMap.balloon.open([59.94, 30.32], "Содержимое балуна", {
        // Опция: не показываем кнопку закрытия.
        closeButton: false
    });

    // Показываем хинт на карте (без привязки к геообъекту).
    // myMap.hint.open(myMap.getCenter(), "Одинокий хинт без метки", {
    //     // Опция: задержка перед открытием.
    //     openTimeout: 1500
    // });
}