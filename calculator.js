var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        // Convert special characters to their JavaScript equivalents
        if (btntext == '×') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext = '/';
        }

        // Check if the last character is already an operator (* or / or + or -)
        if (screen.value.length > 0) {
            let lastChar = screen.value[screen.value.length - 1];
            if ((lastChar == '*' || lastChar == '/' || lastChar == '+' || lastChar == '-') && (btntext == '*' || btntext == '/' || btntext == '+' || btntext == '-')) {
                return;
                // if (btntext == '*' || btntext == '/' || btntext == '+' || btntext == '-') {
                //     return; // Do nothing if the new character is also an operator
                // }
            }
        }

        // Append the button text to the screen value
        screen.value += btntext;

        // Log the current screen value
        // console.log(screen.value);
    });
}

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}

function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}