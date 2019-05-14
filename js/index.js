// Your code goes here
let logo = document.querySelector('.logo-heading');
let body = document.querySelector('body');
let busImg = document.querySelector('.intro img');
let headings = document.querySelectorAll('h2');
let button = document.querySelector('.btn')
let textSelect = document.querySelector('textarea')
let allImg = document.querySelectorAll('img');

textSelect.style.width = '100%'

logo.addEventListener('mouseover', function(event){
    alert('you moused over my logo!')
})

body.addEventListener('keydown', function(){
    body.style.backgroundColor = 'orange';
})

body.addEventListener('keyup', function(){
    body.style.backgroundColor = 'white';
})

body.addEventListener('wheel', function(){
    busImg.classList.toggle('red-border');
})

body.addEventListener('drag', function(){
    headings.forEach(function (currentValue) {
    currentValue.style.color = '#17A2B8';
    })
})

textSelect.addEventListener('focus', function () {
    textSelect.style.background = '#bfb';    
});

textSelect.addEventListener('select', function() {
    alert('no selecting my text!')
})

button.addEventListener('dblclick', function(){
    headings.forEach(function (currentValue) {
    currentValue.textContent = 'you clicked my button!'
    })
})

busImg.addEventListener('mouseenter', function() {
    allImg.forEach(function (currentValue) {
    currentValue.style.border = '2px solid yellow';
    })
})

busImg.addEventListener('mouseleave', function() {
    allImg.forEach(function (currentValue) {
    currentValue.style.border = 'none';
    })
})