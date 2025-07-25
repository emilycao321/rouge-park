// Define our map object
var map = L.map('map').setView([0,0], 0);

// Reference the tiles 
L.tileLayer('maps/{z}/{x}/{y}.png', {
    minZoom: 3,
    maxZoom: 6,
    continuousWorld: false,
    noWrap: true,
    crs: L.CRS.Simple,
}).addTo(map);

map.setMaxBounds(new L.LatLngBounds(
    //SouthWest Corner
    // LatLng(-63.358146, -148.655062)
    [-63, -148],
    //NorthEast Corner
    // LatLng(63.015177, 148.320279)
    [63, 148]
));

// // draggable marker
// var positionMarker = L.marker([0, 0], {
//     draggable: true,
//     }).addTo(map)

// positionMarker.on('dragend', function(e) {
//     alert(positionMarker.getLatLng());
// });

//invisible style definition
var hiddenBounds = {
    opacity: 0,
    fillOpacity: 0
};

//custom areas

var archeryLake = L.polygon([
    [10.056248, -5.261515], //upper rihgt
    [4.778601, -4.884363], //bottom rihgt
    [2.286659, -10.638702], //bottom left
    [2.266566, -11.892526], //bottom left
    [9.244228, -7.353924], //upper middle
], hiddenBounds)
.bindPopup('Lahser Marsh')
.addTo(map);

var archeryArea = L.polygon([
    //area coordinates
    [10.060752, -3.995145],     //upper left
    [3.343512, -3.858293],      //bottom left
    [3.456116, -1.436296],      //bottom center
    [4.852098, -0.092493],      //bottom right
    [10.582889, -0.305182]     //upper right
], hiddenBounds)
.bindPopup('Archery Range')
.addTo(map);

var alexjeffArea = L.polygon([
    //area coordinates
    [-9.26555, -1.56354],       //upper left
    [-15.676695, -1.136665],    //bottom left
    [-16.27825, 7.551071],      //bottom right
    [-10.507875, 10.762384],    //upper middle
    [-9.519404, 10.738473],    //upper right
], hiddenBounds)
//area properties
.bindPopup('Alex Jefferson Model Airplane Field')
.addTo(map);

var basketballArea = L.polygon([
    //area coordinates
    [40.913533, 12.282715],     //upper left
    [39.299654, 12.348633],     //bottom left
    [39.282641, 19.27002],      //bottom right
    [40.979945, 19.313965]     //upper right
], hiddenBounds)
//area properties
.bindPopup('Basketball Courts')
.addTo(map);

var brennanRec9Area = L.polygon([
    //area coordinates
    [35.62132, 15.270996],     //upper left
    [33.924162, 15.292969],     //bottom left
    [33.905921, 18.500977],      //bottom right
    [35.585574, 18.479004],    //upper right
    [36.261992, 16.875] //upper center
], hiddenBounds)
//area properties
.bindPopup('Brennan Recreation Area')
.addTo(map);

var brennanSwimArea = L.polygon([
    //area coordinates
    [43.442697, -0.133928],     //upper left
    [41.314262, -0.18562],      //bottom left
    [41.273229, 1.926985],      //pool upper left
    [38.126621, 1.904004],      //pool bottom left
    [37.988359, 6.423209],      //pool bottom right
    [41.237377, 6.588637],      //pool upper right
    [41.35647, 8.557577],       //bottom right
    [43.456374, 8.542932],      //upper right
    [43.855231, 5.433989],      //upper center right
    [43.79642, 3.207809],      //upper center left
], hiddenBounds)
//area properties
.bindPopup('Brennan Swimming Pools')
.addTo(map);

var buffaloHeritageArea = L.polygon([
    //area coordinates
    [-1.852646, 4.033761],     //upper center
    [-4.46026, -1.118224],      //upper left
    [-8.1579, -1.375748],      //bottom left
    [-8.284712, 8.876014],      //bottom right
    [-3.885852, 8.788784],      //upper right
], hiddenBounds)
//area properties
.bindPopup('Buffalo Soldiers Heritage Center')
.addTo(map);

var cozyCornerArea = L.polygon([
    //area coordinates
    [-5.178183, 11.700552],     //upper left
    [-8.223083, 11.955518],      //bottom left
    [-8.293499, 19.949482],      //bottom right
    [-4.331186, 19.986969],      //upper right
    [-4.085225, 17.737958],      //upper right peak
], hiddenBounds)
//area properties
.bindPopup('Cozy Corner Playground')
.addTo(map);

var dtownFarmArea = L.polygon([
    //area coordinates
    [29.3, -17.7],  //upper left
    [20.4, -17.7],  //bottom left
    [20.4, -16.0],  //bottom center
    [22.0, -11.0],  //bottom right
    [29.3, -11.0]   //upper right
], hiddenBounds)
//area properties
.bindPopup('D-Town Farm:')
.addTo(map);

var joeNature = L.polygon([
    //area coordinates
    [18.808893, -23.554687],    //upper left
    [18.392484, -20.126953],    //upper right
    [12.894815, -19.951172],    //bottom right
    [11.52069, -22.412109],     //bottom middle
    [12.122746, -25.048828],    //bottom left
    [15.53518, -23.818359],     //left upper middle
    [18.695759, -24.014944]     //upper right
], hiddenBounds)
//area properties
.bindPopup('Joe Prance Nature Trail')
.addTo(map);

var joePlayArea = L.polygon([
    //area coordinates
    [16.632782, -32.167969],    //upper left
    [13.027055, -32.20589],     //bottom left
    [13.0, -27.7],              //bottom center
    [15.586151, -24.021781],    //right middle
    [16.801099, -24.169922]     //upper right
], hiddenBounds)
//area properties
.bindPopup('Joe Prance Playground')
.addTo(map);

var joePark = L.polygon([
    //area coordinates
    [19.224274, -32.080078],    //upper left
    [17.221235, -32.080078],     //bottom left
    [16.885202, -24.169922],    //bottom right
    [19.307225, -23.90625]     //upper right
], hiddenBounds)
//area properties
.bindPopup('Joe Prance Park')
.addTo(map);

var mountainBikeTrail = L.polygon([
    //area coordinates
    [-8.932101, -21.884766],    //upper left
    [-8.584497, -15.556641],     //upper left middle
    [-7.714119, -11.425781],     //upper middle
    [-8.932101, -6.064453],     //upper right middle
    [-9.452883, -1.845703],    //upper right
    [-12.387903, -1.494141],    //upper right extended segment
    [-16.05219, -1.230469],     //upper right extended segment lower
    [-24.616493, 7.998047],     //bottom right
    [-29.77543, -1.494141],     //bottom left
    [-23.653625, -4.394531],     //bottom left quarter
    [-12.559605, -20.390625],     //upper left quarter
], hiddenBounds)
//area properties
.bindPopup('MCMBA Mountain Biking Trail')
.addTo(map);

var playgroundBrennanRec = L.polygon([
    //area coordinates
    [38.134669, 14.853516],    //upper left
    [37.926896, 19.116211],     //upper right
    [36.385306, 19.160156],     //bottom right
    [36.420691, 14.941406],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Playground')
.addTo(map);

var prairiePathway = L.polygon([
    //area coordinates
    [-9.018951, -31.113281],    //upper left
    [-9.10578, -22.939453],     //upper right
    [-13.330825, -21.708984],     //upper right quarter
    [-15.205443, -17.402344],     //upper right quarter extended
    [-25.809707, -3.867188],     //bottom right quarter extended
    [-28.855449, -2.460938],     //bottom right quarter
    [-34.319468, -2.021484],    //bottom right
    [-36.186153, -6.767578],    //bottom left
    [-16.05219, -25.488281],     //upper left quarter
    [-15.713912, -30.849609],     //upper left lower
], hiddenBounds)
//area properties
.bindPopup('Prairie Pathway Trail')
.addTo(map);

var rpDrivingRange = L.polygon([
    //area coordinates
    [42.163403, 19.599609],    //upper left
    [42.195982, 24.082031],     //upper right
    [36.241757, 24.082031],     //bottom right
    [36.277206, 19.643555],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Rouge Park Driving Range')
.addTo(map);

var rpGolfCourse = L.polygon([
    //area coordinates
    [58.220774, -7.013451],    //upper left
    [60.411484, 23.93066],     //upper right
    [44.457274, 22.368813],     //bottom right
    [44.596447, -1.156521],     //bottom left
    [46.577087, -7.208677],     //bottom left extend
    [49.828312, -9.258606],     //bottom left extended upper
], hiddenBounds)
//area properties
.bindPopup('Rouge Park Golf Course')
.addTo(map);


var scoutHollowCamp = L.polygon([
    //area coordinates
    [22.032166, 7.711622],  //upper center
    [19.7, 4.2],  //upper left
    [17.7, 4.2],  //bottom left
    [17.3, 10.5], //bottom right
    [19.6, 10.6]  // top right
], hiddenBounds)
//area properties
.bindPopup('Scout Hollow Campground')
.addTo(map);

var scoutHollowTrail = L.polygon([
    //area coordinates
    [34.822573, 1.366615],    //upper left
    [35.540561, 7.51639],     //upper right
    [29.708445, 15.520859],     //upper right diagonal
    [23.068807, 16.008941],     //bottom right
    [22.619049, 12.397165],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Scout Hollow Nature Trail')
.addTo(map);

var soccerFields = L.polygon([
    //area coordinates
    [0.585636, 13.37332],    //upper left
    [0.585636, 19.132632],     //upper right
    [-2.926946, 19.52309],     //bottom right
    [-2.341921, 13.373315],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Soccer Fields')
.addTo(map);

var sorensonTrail = L.polygon([
    //area coordinates
    [-55.691612, 11.909097],    //bottom left
    [-53.195169, 10.932945],     //upper left extend
    [-42.362863, 22.061105],     //upper right 
    [-44.767044, 24.989562],     //bottom right extend
    [-55.360122, 16.985085],     //bottom right 
], hiddenBounds)
//area properties
.bindPopup('Sorenson Nature Trail')
.addTo(map);

var sorensonRecArea = L.polygon([
    //area coordinates
    [-48.697374, 24.193683],    //upper left
    [-47.852881, 29.416112],     //upper right
    [-52.086841, 31.222],     //bottom right
    [-52.445251, 25.413879],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Sorenson Recreation Area and Playground')
.addTo(map);

var splashPad = L.polygon([
    //area coordinates
    [37.845999, 1.874786],    //upper left
    [38.211204, 3.656267],     //upper right
    [36.425988, 5.096095],     //bottom right
    [36.071766, 2.655708],     //bottom center
    [36.622082, 2.021208],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Splash Pad')
.addTo(map);

var stoneBridgeTrail = L.polygon([
    //area coordinates
    [-30.444486, -1.435608],    //upper left
    [-29.811332, 14.231675],     //upper right
    [-35.716229, 17.794639],     //bottom right
    [-36.465529, 10.522287],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Stone Bridge Nature Trail')
.addTo(map);

var tennisCourts = L.polygon([
    //area coordinates
    [42.549502, 12.329091],    //upper left
    [42.607065, 19.306075],     //upper right
    [41.208811, 19.306075],     //bottom right
    [41.263862, 12.375376],     //bottom left
], hiddenBounds)
//area properties
.bindPopup('Tennis Courts')
.addTo(map);


const aboutModal = document.querySelector("#aboutModal");
const openAbout = document.querySelector("#about");
const closeAbout = document.querySelector(".close-button-about");

openAbout.addEventListener("click", () => {
    aboutModal.showModal();
});

closeAbout.addEventListener("click", () => {
    aboutModal.close();
});

const teamModal = document.querySelector("#teamModal");
const openTeam = document.querySelector("#team");
const closeTeam = document.querySelector(".close-button-team");

openTeam.addEventListener("click", () => {
    teamModal.showModal();
});

closeTeam.addEventListener("click", () => {
    teamModal.close();
});

const eventsModal = document.querySelector("#eventsModal");
const openEvents = document.querySelector("#events");
const closeEvents = document.querySelector(".close-button-events");

openEvents.addEventListener("click", () => {
    eventsModal.showModal();
});

closeEvents.addEventListener("click", () => {
    eventsModal.close();
});

const resourcesModal = document.querySelector("#resourcesModal");
const openResources = document.querySelector("#resources");
const closeResources = document.querySelector(".close-button-resources");
openResources.addEventListener("click", () => {
    resourcesModal.showModal();
});

closeResources.addEventListener("click", () => {
    resourcesModal.close();
});

const feedbackModal = document.querySelector("#feedbackModal");
const openFeedback = document.querySelector("#feedback");
const closeFeedback = document.querySelector(".close-button-feedback");
openFeedback.addEventListener("click", () => {
    feedbackModal.showModal();
});

closeFeedback.addEventListener("click", () => {
    feedbackModal.close();
});