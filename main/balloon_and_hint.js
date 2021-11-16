const formEl = document.querySelector("#button");
const listItem = document.getElementById("olList")
var myMap;

var mapposition =[];
var placemark = 
    {
        latitude: typeof mapposition[0] !== "undefined" ? mapposition[0] : 51.31,
        longitude: typeof mapposition[0] !== "undefined" ? mapposition[1] : 46,
        hintContent: '<div>ул. Литераторов, д. 19</div>',
        balloonContent: ""
    };

listItem.addEventListener("click", (el) => {
    const text = el.target.innerText;
    let item = localStorage.getItem("inputs");
    for (let i = 0; i < 10; i++) {
        if (JSON.parse(item)[i] == text) {
            const el = localStorage.getItem("coord");
            setTimeout(async function () {
                const jI = JSON.parse(el)[i];
                if (typeof el[0] !== "undefined") {
                    myMap.geoObjects.remove(placemark);
                    placemark = new ymaps.Placemark(jI);
                    myMap.geoObjects.add(placemark);
                    myMap.setCenter(jI);
                }
            }, 200)
        }
    }
});


formEl.addEventListener("click", async () => {
    setTimeout(async function () {
        await checkStoreCoor();
        if (typeof mapposition[0] !== "undefined") {
            myMap.geoObjects.remove(placemark);
            placemark = new ymaps.Placemark(mapposition);
            myMap.geoObjects.add(placemark);
            myMap.setCenter(mapposition);
        }
    }, 200)

})
function readCoordList() {
    const item = localStorage.getItem("coord");
    return item === null ? [] : JSON.parse(item);
}

async function checkStoreCoor() {
    mapposition = await readCoordList()[0];
}
ymaps.ready(async function () {
    await checkStoreCoor();
    myMap = new ymaps.Map('map', {
        center: [typeof mapposition[0] !== "undefined" ? mapposition[0] : 51.31, typeof mapposition[0] !== "undefined" ? mapposition[1] : 46],
        zoom: 8,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    placemark = new ymaps.Placemark([placemark.latitude, placemark.longitude],
            {
                hintContent: placemark.hintContent,
                balloonContent: placemark.balloonContent
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'images/arrow.png',
                iconImageSize: [45, 45],
                iconImageOffset: [5, -125],
                // iconImageClipRect: [[415, 0], [461, 57]]
            });



    myMap.geoObjects.add(placemark);

    // function newCity() {
    //     if (ymaps.Placemark) {
    //         addPlacemark();
    //     } else {
    //         ymaps.modules.require(['Placemark', 'overlay.Placemark'])
    //             .spread(function (Placemark, PlacemarkOverlay) {
    //                 ymaps.Placemark = Placemark;
    //                 addPlacemark();
    //             });
    //     }
    // };
    // function addPlacemark() {
    //     var center = myMap.getCenter();        
    //     center[0] = mapposition[0];
    //     center[1] = mapposition[1];
    //     console.log(center);
    //     var placemark = new ymaps.Placemark(center);
    //     myMap.geoObjects.add(placemark);
    // }
    // if (typeof mapposition !== "undefined") {
    //     newCity();
    //     myMap.center = mapposition;
    // }
});