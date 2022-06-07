console.log('Консоль пока пуста');
document.querySelector('button').onclick = buttonclick;
let z = 1;
function buttonclick() {
    z = z + 1;
    if (z == 2){
    document.querySelector('h1').innerHTML = 'Тут думать надо';
    } else if (z == 3){
    document.querySelector('h1').innerHTML = 'Забавная кнопка, правда?';
    } else {
    document.querySelector('h1').innerHTML = 'Сё, харе';   
    }

}