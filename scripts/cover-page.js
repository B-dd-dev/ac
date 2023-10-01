let cover = 0;
let coverPageImage = ['img_1', 'img_2', 'img_3', 'img_4'];
setInterval(function() {
    document.getElementById('js-display-image-onboard').src = `images/${coverPageImage[cover]}.png`
    cover++;
    removeHiddenTitle();
    document.querySelector(`.title-${cover}`).classList.remove('display-hidden-title');
    if (cover > 3){
        cover = 0;
    }
}, 5000);

function removeHiddenTitle() {
    document.querySelector(`.tittle-1`).classList.add('.display-hidden-title');
    document.querySelector(`.tittle-2`).classList.add('.display-hidden-title');
    document.querySelector(`.tittle-3`).classList.add('display-hidden-title');
    document.querySelector(`.tittle-4`).classList.add('display-hidden-title');
}