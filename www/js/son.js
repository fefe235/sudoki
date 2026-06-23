
var beat = false;
var stop;
var aud = new Audio('play.mp3')
var audi = new Audio('play.mp3')
document.getElementById('buttoN').onclick = function () {
if (beat == false){

son()
function son () {
    aud.play();
    stop = setTimeout(sone,6000);
    beat = true
    document.getElementById('buttoN').innerHTML = "beat ON"
}
function sone () {
    audi.play();
    stop = setTimeout(son,6150);
    beat = true
    document.getElementById('buttoN').innerHTML = "beat ON"
}
}else{
    clearTimeout(stop);
    aud.pause();
    beat = false
    document.getElementById('buttoN').innerHTML = "beat OFF"
}
}