//to do

window.onload = function () {
    addListeners()
}

function addListeners() {

    console.log("here");
    var body = document.getElementById('humanInner');
    var skin = document.getElementById('skin');
    var brain = document.getElementById('brain');
    var lungs = document.getElementById('lungs');
    var stomach = document.getElementById('stomach');
    var liver = document.getElementById('liver');
    var kidney = document.getElementById('kidney');
    var breast = document.getElementById('breast');
    var colon = document.getElementById('colon');
    var testes = document.getElementById('testes');
    
    
    body.addEventListener('click', function (e) {
        //console.log("this is the body");
    });
    skin.addEventListener('click', function (e) {
        console.log("this is the skin");
    });
    brain.addEventListener('click', function (e) {
        console.log("this is the brain");
    });
    lungs.addEventListener('click', function (e) {
        console.log("this is the lungs");
    });
    stomach.addEventListener('click', function (e) {
        console.log("this is the stomach");
    });
    liver.addEventListener('click', function (e) {
        console.log("this is the liver");
    });
    kidney.addEventListener('click', function (e) {
        console.log("this is the kidney");
    });
    breast.addEventListener('click', function (e) {
        console.log("this is the breast");
    });
    colon.addEventListener('click', function (e) {
        console.log("this is the colon");
    });
    testes.addEventListener('click', function (e) {
        console.log("this is the testes");
    });


}
