const slidePage = document.querySelector(".slide-page");
const First_next_button = document.querySelector(".nextButton");
const prev_buttonFirst = document.querySelector(".prev-1");
const next_buttonFirst = document.querySelector('.next-1');
const prev_buttonSecond = document.querySelector(".prev-2");
const next_buttonSecond = document.querySelector('.next-2');
const prev_buttonThird = document.querySelector(".prev-3");
const submit = document.querySelector('.submit');
const progress = document.querySelectorAll('.reg-step p');
const progressCheck = document.querySelectorAll('.reg-step .check');
const RegBlock = document.querySelectorAll('.reg-step .progress-bar-block');
let max = 4;
let current = 1;

First_next_button.addEventListener('click', function () {
    slidePage.style.marginLeft = '-25%';
    RegBlock[current-1].classList.add('active');
    progress[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    current+=1;
});
next_buttonFirst.addEventListener('click', function () {
    slidePage.style.marginLeft = '-50%';
    RegBlock[current-1].classList.add('active');
    progress[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    current+=1;
});
next_buttonSecond.addEventListener('click', function () {
    slidePage.style.marginLeft = '-75%';
    RegBlock[current-1].classList.add('active');
    progress[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    current+=1;
});
submit.addEventListener('click', function () {
    RegBlock[current-1].classList.add('active');
    progress[current-1].classList.add('active');
    progressCheck[current-1].classList.add('active');
    current+=1;
    setTimeout(function (){
        alert("Success");
        location.replace('profile.html')
    },800)
});


prev_buttonFirst.addEventListener('click', function () {
    slidePage.style.marginLeft = '0%';
    RegBlock[current-2].classList.remove('active');
    progress[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    current-=1;
});
prev_buttonSecond.addEventListener('click', function () {
    slidePage.style.marginLeft = '-25%';
    RegBlock[current-2].classList.remove('active');
    progress[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    current-=1;
});
prev_buttonThird.addEventListener('click', function () {
    slidePage.style.marginLeft = '-50%';
    RegBlock[current-2].classList.remove('active');
    progress[current-2].classList.remove('active');
    progressCheck[current-2].classList.remove('active');
    current-=1;
});