console.log('Консоль пока пуста');


document.querySelector('.b-1').onclick = buttonclick1;
let z = 1;
function buttonclick1() {
    z = z + 1;
    if (z == 2){
    document.querySelector('h1').innerHTML = 'Тут думать надо';
    } else if (z == 3){
    document.querySelector('h1').innerHTML = 'Забавная кнопка, правда?';
    } else {
    document.querySelector('h1').innerHTML = 'Сё, харе';   
    }
}


document.querySelector('.b-2').onclick = buttonclick2;
function buttonclick2() {
    document.location.href = 'https://mishami1230.github.io/rsschool-cv/cv';
}