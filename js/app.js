//to do

window.onload = function () {
    addListeners();
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
    var infobox = document.getElementById('infobox');


    body.addEventListener('mouseenter', function (e) {
        //console.log("this is the body");
    });
    skin.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the skin"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "5");
    });
    brain.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the brain"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");
    });
    lungs.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the lungs"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

    });
    stomach.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the stomach"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

    });
    liver.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

    });
    kidney.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the kidney"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

    });
    breast.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the breast"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

    });
    colon.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the colon"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "10");

    });
    testes.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the testes"
        d3.select(this).attr("stroke", "gold").attr("stroke-width", "20");

    });
    infobox.addEventListener('mouseenter', function (e) {
        infobox.innerHTML = "this is the infobox";
    });


    //mouse outs
    body.addEventListener('mouseleave', function (e) {
        //console.log("this is the body");
    });
    skin.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");
    });
    brain.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");
    });
    lungs.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");

    });
    stomach.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");

    });
    liver.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");

    });
    kidney.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");

    });
    breast.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "hotpink").attr("stroke-width", "15");

    });
    colon.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");

    });
    testes.addEventListener('mouseleave', function (e) {
        infobox.innerHTML = "this is the infobox"
        d3.select(this).attr("stroke", "none");

    });


}
