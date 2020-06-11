
var projectDisplay = document.querySelector('#project_content')

projectDisplay.addEventListener('click', function(e) {

    if(e.target.tagName === 'IMG') {

        var superimposed = document.createElement('div');
        superimposed.id = 'superimposed';
        document.body.appendChild(superimposed);

        var image = e.target.src;
        var fullScreen = document.createElement('img');
        fullScreen.id = 'fullScreen';
        fullScreen.src = image;
    
        superimposed.appendChild(fullScreen);
    }
    fullScreen.addEventListener('click', function(){
        if (superimposed) {
            superimposed.parentNode.removeChild(superimposed);
        }
    }, false)

});