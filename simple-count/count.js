const countIncrementBtn = document.querySelector('.countPlus');
const contDecrementBtn = document.querySelector('.countDecres');
const countResetBtn = document.querySelector('.countReset');
const countBox = document.querySelector('.count');
const mainCounter = document.querySelector('.counterBox');

let childCounter = mainCounter.firstElementChild;

let count = 0;
countBox.innerHTML = count;

countIncrementBtn.addEventListener('click', function () {
    count++;
    countBox.innerHTML = count;
    childCounter.classList.remove('red');
    childCounter.classList.add('green');
});

contDecrementBtn.addEventListener('click', function () {
        count--;
    countBox.innerHTML = count;
    childCounter.classList.remove('green');
    childCounter.classList.add('red');
});
countResetBtn.addEventListener('click', function () {
    if (count > 0 || count < 0) {
        count = 0;
        countBox.innerHTML = count;
        childCounter.classList.remove('green');
        childCounter.classList.remove('red');
    }
})