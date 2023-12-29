var southWest = L.latLng(15.609632817377062, 119.43011963655906),
    northEast = L.latLng(19.531143956500596, 121.18243865504024),
    bounds = L.latLngBounds(southWest, northEast);

var myMap = L.map("map", {
    maxZoom: 19,
    minZoom: 9,
    maxBounds: bounds
});

var positron = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

myMap.setView([17.183522835427095, 120.44532281970191], 9.1);

let da1_marker = L.marker([16.609192552641865, 120.31877841018272]).addTo(myMap);
let ind_marker = L.marker([18.072941925812902, 120.68894871163829]).addTo(myMap);
let inb_marker = L.marker([18.049246343534147, 120.55131425009851]).addTo(myMap);
let isr_marker = L.marker([17.760824220603237, 120.47277297346996]).addTo(myMap);
let ili_marker = L.marker([16.731603578091086, 120.3881902513844]).addTo(myMap);
let prb_marker = L.marker([15.981463314878319, 120.47013336239284]).addTo(myMap);
let prs_marker = L.marker([16.06983613409645, 120.08536183160386]).addTo(myMap);

let ilocos_norte = L.polygon([
    [18.565865271268493, 120.94324765427264],
    [18.606337514416406, 120.83196067311239],
    [18.493287889488123, 120.58365997114775],
    [17.86805727737729, 120.3645224113468],
    [17.923683562126364, 120.47501490902707],
    [17.894609642091357, 120.56382338721248],
    [17.7712778770106, 120.53012392897855],
    [17.866249714815122, 120.69005918383797],
    [17.994106693085094, 120.89910050307151]
    ],
    {
        color: "pink",
        fillColor: "#FFC0CB",
        fillOpacity: "0.5",
    }
).addTo(myMap);

let ilocos_sur = L.polygon([
    [17.86805727737729, 120.3645224113468],
    [17.923683562126364, 120.47501490902707],
    [17.894609642091357, 120.56382338721248],
    [17.7712778770106, 120.53012392897855],
    [17.476518135723484, 120.46565623546563],
    [17.480351581258283, 120.57256175231049],
    [17.35073638940756, 120.52183471797987],
    [17.15823537444409, 120.69366705311027],
    [17.196120282279086, 120.84897704555654],
    [17.09619081752675, 120.76717734005588],
    [16.922983097536715, 120.7581207784096],
    [16.896988150756183, 120.62680063453857],
    [16.668348663811305, 120.5828014685215],
    [16.926901712170036, 120.51367459293189],
    [16.9069072278562, 120.381047448561],
    [17.571902764954928, 120.25987056704813]
    ],
    {
        color: "green",
        fillColor: "#008000",
        fillOpacity: "0.3",
    }
).addTo(myMap);

let la_union = L.polygon([
    [16.668348663811305, 120.5828014685215],
    [16.926901712170036, 120.51367459293189],
    [16.9069072278562, 120.381047448561],
    [16.816114923489828, 120.22354595677284],
    [16.281232119417798, 120.28894760853561],
    [16.228298965840803, 120.46022479584612],
    [16.244772009765494, 120.51384862644598],
    [16.495416904216246, 120.4591901681044]
    ],
    {
        color: "blue",
        fillColor: "#0000FF",
        fillOpacity: "0.3",
    }
).addTo(myMap);

let pangasinan = L.polygon([
    [16.244772009765494, 120.51384862644598],
    [16.228298965840803, 120.46022479584612],
    [16.24341434868447, 120.39279849707012],
    [16.13871774004209, 120.21319850858761],
    [16.517671039684384, 119.92860632041508],
    [16.363406222511625, 119.55079540334212],
    [15.853697574288693, 119.74854159121877],
    [15.812591830103512, 120.12919840393761],
    [15.614420139069109, 120.2496102528589],
    [15.879851416797964, 120.58754028047663],
    [15.793904638213528, 120.81282696555513],
    [16.171049073543152, 120.89439628218518],
    [16.245246252789112, 120.5298962827629]
    ],
    {
        color: "orange",
        fillColor: "#FFA500",
        fillOpacity: "0.3",
    }
).addTo(myMap);

da1_marker.bindPopup("<b>Department of Agriculture Regional Field Office 1 (DA-RFO-1)</b>").openPopup();
ind_marker.bindPopup("<b>Ilocos Norte Research and Experiment Center (INREC), Dingras Station</b>");
inb_marker.bindPopup("<b>Ilocos Norte Research and Experiment Center (INREC), Batac Station</b>");
isr_marker.bindPopup("<b>Ilocos Sur Research Center (ISReC)</b>");
ili_marker.bindPopup("<b>Ilocos Integrated Agricultural Research Center (ILIARC)</b>");
prb_marker.bindPopup("<b>Pangasinan Research and Experiment Center (PREC), Sta. Barbara Station</b>");
prs_marker.bindPopup("<b>Pangasinan Research and Experiment Center (PREC), Sual Station</b>");
ilocos_norte.bindPopup("<b>Ilocos Norte</b> <br>Area: 339,934</br><br>Alienable and Disposable: 144,948</br><br>Forest: 194,986</br><br>Farmers: 87,963</br><br>Districts: 2</br><br>Cities: 2</br><br>Municipalities: 21</br><br>Barangays: 557</br>");
ilocos_sur.bindPopup("<b>Ilocos Sur</b> <br>Area: 257,958</br><br>Alienable and Disposable: 138,412</br><br>Forest: 119,546</br><br>Farmers: 89,816</br><br>Districts: 2</br><br>Cities: 2</br><br>Municipalities: 32</br><br>Barangays: 768</br>");
la_union.bindPopup("<b>La Union</b> <br>Area: 149,770</br><br>Alienable and Disposable: 120,307</br><br>Forest: 29,002</br><br>Farmers: 73,776</br><br>Districts: 2</br><br>Cities: 1</br><br>Municipalities: 19</br><br>Barangays: 576</br>");
pangasinan.bindPopup("<b>Pangasinan</b> <br>Area: 536,818</br><br>Alienable and Disposable: 406,395</br><br>Forest: 130,423</br><br>Farmers: 207,084</br><br>Districts: 6</br><br>Cities: 4</br><br>Municipalities: 44</br><br>Barangays: 1,364</br>");