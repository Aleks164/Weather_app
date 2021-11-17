const formEl = document.querySelector("#button");
const listItem = document.getElementById("olList")
var myMap;
var mapposition =[];
var placemark; 

listItem.addEventListener("click", (el) => {
    const text = el.target.innerText;
    console.log(text)
    let item = localStorage.getItem("inputs");
    for (let i = 0; i < 11; i++) {
        if (JSON.parse(item)[i] == text) {
            const el = localStorage.getItem("coord");
            setTimeout(function () {
                const jI = JSON.parse(el)[i];
                if (typeof el[0] !== "undefined") {
                    myMap.geoObjects.remove(placemark);
                    placemark = new ymaps.Placemark(jI,
                         {
                        hintContent: `${jI[0]}, ${jI[1]}`                        
                    },
                    {
                        iconLayout: 'default#image',
                        iconImageHref: 'images/arrow.png',
                        iconImageSize: [45, 45],
                        iconImageOffset: [-47, 5],                        
                    });
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
            placemark = new ymaps.Placemark(mapposition,
                {
               hintContent: `${mapposition[0]}, ${mapposition[1]}`               
           },
           {
               iconLayout: 'default#image',
               iconImageHref: 'images/arrow.png',
               iconImageSize: [45, 45],
               iconImageOffset: [-47, 5],                        
           });
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
    mapposition = await readCoordList()[0]|| [51.31,46];
}
ymaps.ready(async function () {
    await checkStoreCoor();
    myMap = new ymaps.Map('map', {
        center: [mapposition[0], mapposition[1]],
        zoom: 8,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });
    placemark = new ymaps.Placemark([mapposition[0], mapposition[1]],
            {
                hintContent: `${mapposition[0]}, ${mapposition[1]}`                
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'images/arrow.png',
                iconImageSize: [45, 45],
                iconImageOffset: [-47, 5]                
            });
             myMap.geoObjects.add(placemark);
});