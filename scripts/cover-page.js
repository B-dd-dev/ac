let cover = 0;
setInterval(function() {
    cover++;
    hideTitle();
    document.querySelector(`.title-${cover}`).classList.remove('display-hidden-title');
    if (cover > 3){
        cover = 0;
    }
}, 10000);

function hideTitle() {
    if (!document.querySelector('.title-1').classList.contains('display-hidden-title')) {
        document.querySelector('.title-1').classList.add('display-hidden-title');
    }
    if (!document.querySelector('.title-2').classList.contains('display-hidden-title')) {
        document.querySelector('.title-2').classList.add('display-hidden-title');
    }
    if (!document.querySelector('.title-3').classList.contains('display-hidden-title')) {
        document.querySelector('.title-3').classList.add('display-hidden-title');
    }
    if (!document.querySelector('.title-4').classList.contains('display-hidden-title')) {
        document.querySelector('.title-4').classList.add('display-hidden-title');
    }
}