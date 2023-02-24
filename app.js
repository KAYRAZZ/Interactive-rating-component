const page_rating = document.querySelector('.rating');
const page_thank = document.querySelector('.thank');
const text = document.querySelector('.text');
const button = document.querySelector('.button');

function thank(rate) {
    button.addEventListener('click', () => {
        page_rating.classList.remove('active');
        page_thank.classList.add('active');
        text.innerHTML = '&nbsp' + rate + '&nbsp';
    })
}