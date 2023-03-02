const page_rating = document.querySelector('.rating');
const page_thank = document.querySelector('.thank');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

function thank(x) {
    var res = x;
    button.addEventListener('click', () => {
        if (res != undefined) {
            page_rating.classList.remove('active');
            page_thank.classList.add('active');
            text.innerHTML = '&nbsp' + res + '&nbsp';
        }
    })
}
