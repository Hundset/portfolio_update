
/*var i = 0;
var previews = [];

previews[0] = 'http://www.hundsie.com/portfolio_site/bilder/ccc_screenshot.png';
previews[1] = 'http://www.hundsie.com/portfolio_site/bilder/dfirh_screenshot.png';
previews[2] = 'http://www.hundsie.com/portfolio_site/bilder/re_cycle_screenshot.png';

function shiftPreview() {

    document.siteDisplay.src = images[i];

}*/

var index = 1;
displayPreview(index);

function nextPreview(num) {
    displayPreview(index += num);
}

function activePreview(num) {
    displayPreview(index = num);
}

function displayPreview(num) {
    var i;

    var previews = document.getElementsByClassName("carousel__slide");
    if (num > previews.length) {index = 1}
    if (num < 1) {index = previews.length}

    for (i = 0; i < previews.length; i++) {
        previews[i].style.display = "none";
    }

    previews[index-1].style.display = "block";

}

function next() {
    shift(index+1);
}

function previous(){
    shift(active-1);
}

function shift(n){
    previews[active].className = "carousel__slide";
    active = (n+previews.length)%previews.length;
    previews[active].className = "carousel__slide carousel__slide--active";
}

