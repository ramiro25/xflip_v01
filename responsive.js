
window.onload = function()
{
    init();
    window.addEventListener("resize", init, false);
}

function init()
{
    var canvas = document.getElementsByTagName("canvas")[0];
    var myHeight = window.innerHeight * 0.95;
    var myWidth = myHeight * 0.56;

    canvas.height = myHeight;
    canvas.width = myWidth;
}