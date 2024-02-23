var map = L.map('map').setView([41.064752290377633, -8.272018782443237], 8.2);

var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};

info.update = function (props) {
    if (window.innerWidth <= 768) {
        this._div.innerHTML = '<img class="logo-mobile" src="/assets/Logo.png" /><br>' + '<h4>Densidade Populacional por Distrito</h4>' + '<div style="text-align: center;"><h4>Portugal 2021</h4></div>' + (props ?
            '<br>' + props.Distrito + '</b><br />' + props.Populacao + ' habitantes/ Km²' +
            '</b><br />' + props.N_Concelho + ' número do concelho' :'Selecione um Distrito'
            );
    } else {
        this._div.innerHTML = '<h4>Densidade Populacional por Distrito</h4>' + '<div style="text-align: center;"><h4>Portugal 2021</h4></div>' + (props ?
            '<b>' + props.Distrito + '</b><br />' + props.Populacao + ' habitantes/ Km²' +
            '</b><br />' + props.N_Concelho + ' número do concelho' :
            'Selecione um Distrito');
    }
};

info.addTo(map);

function getColor(population) {
    return population > 1000 ? '#800026' :
        population > 500 ? '#BD0026' :
            population > 200 ? '#E31A1C' :
                population > 100 ? '#FC4E2A' :
                    population > 50 ? '#FD8D3C' :
                        population > 20 ? '#FEB24C' :
                            population > 10 ? '#FED976' :
                                '#FFEDA0';
}

function style(feature) {
    return {
        fillColor: getColor(parseFloat(feature.properties.Populacao)),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
    var centroid = layer.getBounds().getCenter();
    L.marker(centroid, {
        icon: L.divIcon({
            className: 'label',
            html: feature.properties.Distrito,
            iconSize: [100, 40]
        })
    }).addTo(map);
}

fetch('ContinenteDistritos.json')
    .then(response => response.json())
    .then(data => {
        geojson = L.geoJSON(data, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);

        var legend = L.control({ position: 'bottomright' });

        legend.onAdd = function (map) {
            var div = L.DomUtil.create('div', 'info legend'),
                grades = [0, 10, 20, 50, 100, 200, 500, 1000],
                labels = [];
            for (var i = 0; i < grades.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                    grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
            }

            return div;
        };

        legend.addTo(map);
    })
    .catch(error => {
        console.error('Error loading GeoJSON:', error);
    });