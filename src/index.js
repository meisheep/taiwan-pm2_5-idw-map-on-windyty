window.map = window.W.maps;

const lassData = document.createElement('script');
lassData.src = 'https://pm25.lass-net.org/GIS/IDW/data.js';
lassData.onload = function() {
  const idw = L.idwLayer(PM25points, {
    opacity: 0.5,
    maxZoom: 16,
    minZoom: 8,
    cellSize: 10,
    exp: 2,
    max: 100
  }).addTo(map);
};
document.body.appendChild(lassData);
