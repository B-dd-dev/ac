let button = [document.getElementById('button1'),
              document.getElementById('button2'),
              document.getElementById('button3'),
              document.getElementById('button4'),
              document.getElementById('button5')];

let hiddenElement = [document.getElementById('hiddenElement1'),
                     document.getElementById('hiddenElement2'),
                     document.getElementById('hiddenElement3'),
                     document.getElementById('hiddenElement4'),
                     document.getElementById('hiddenElement5')]

button[0].addEventListener('click', function() {buttonSelect(button[0], hiddenElement[0])});
button[1].addEventListener('click', function() {buttonSelect(button[1], hiddenElement[1])});
button[2].addEventListener('click', function() {buttonSelect(button[2], hiddenElement[2])});
button[3].addEventListener('click', function() {buttonSelect(button[3], hiddenElement[3])});
button[4].addEventListener('click', function() {buttonSelect(button[4], hiddenElement[4])});

function buttonSelect(buttonActive, hidden) {
    hidden.classList.toggle('visible');
    checkActiveButton(buttonActive, hidden);
}

function checkActiveButton(buttonActive, hidden) {
    for (let i = 0; i < button.length; i++) {
        if (hidden === hiddenElement[i]) {
            continue;
        } else {
            if (hiddenElement[i].classList.contains('visible')) {
                hiddenElement[i].classList.toggle('visible');
            }
        }
    }
}