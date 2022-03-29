
let cards = document.getElementsByClassName('card');
let leftButton = document.querySelector('.left');
let rightButton = document.querySelector('.right');
let index = 0;



leftButton.addEventListener('click', () => {
    showReview(-1);
});


rightButton.addEventListener('click', () => {
    showReview(1);
});


showReview = (num) => {

    index += num;

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';

    }

    if (index < 0) {
        index = cards.length - 1;
    }

    if (index > cards.length - 1) {
        index = 0;
    }

    cards[index].style.display = 'block';



}

window.onload = showReview(index);