//to do

var body = document.getElementById('humanAnatomy');


$(document).on('click', '#humanInner', function (e) {
    var t = e.target
    var x = e.clientX
    var y = e.clientY
    var target = (t == svg ? svg : t.parentNode)
    var pin = pinCenter(target, x, y)
    var newCircIdParam = "newcircle" + Math.round(pin.x) + '-' + Math.round(pin.y)
    var circle = document.createElementNS(NS, 'circle');
    
    console.log("the quick brown fox")

});

function pinCenter(element, x, y) {
    var pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;
    return pt.matrixTransform(element.getScreenCTM().inverse());
}

$(document).on('click', '.newcircle', function () {
    alert("x: " + $(this).data('x') + " y: " + $(this).data("y"));
});
btnConfirmCancel.click(function () {
    $("#humanInner + .newcircle").remove();
    pinConfirm.hide();
});
F