const formEl = document.querySelector("#button");
var myMap;
var placemark;

formEl.addEventListener("click", async() => {
    setTimeout(async function(){
        await checkStoreCoor();
        myMap.geoObjects.remove(placemark);
        placemark = new ymaps.Placemark(mapposition);
        myMap.geoObjects.add(placemark);
        myMap.setCenter(mapposition);
        console.log(mapposition);
    },200)
     
})
function readCoordList() {
    const item = localStorage.getItem("coord");
    return item === null ? [] : JSON.parse(item);
}
let mapposition;
async function checkStoreCoor() {
    mapposition = await readCoordList()[0];
}
ymaps.ready(async function () {
    await checkStoreCoor();
    myMap = new ymaps.Map('map', {
        center: [typeof mapposition !== "undefined"? mapposition[0]  : 51.31, typeof mapposition !== "undefined"? mapposition[1]  : 46],
        zoom: 8,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    function newCity() {
        if (ymaps.Placemark) {
            addPlacemark();
        } else {
            ymaps.modules.require(['Placemark', 'overlay.Placemark'])
                .spread(function (Placemark, PlacemarkOverlay) {
                    ymaps.Placemark = Placemark;
                    addPlacemark();
                });
        }
    };
    function addPlacemark() {
        var center = myMap.getCenter();
        center[0] = mapposition[0];
        center[1] = mapposition[1];
        console.log(center);
        var placemark = new ymaps.Placemark(center);
        myMap.geoObjects.add(placemark);
    }
    if (typeof mapposition !== "undefined") {
        newCity();
        myMap.center = mapposition;
    }
});