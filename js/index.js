// Your code goes here
let logo = document.querySelector('.logo-heading');
let body = document.querySelector('body');
let busImg = document.querySelector('.intro img');
let headings = document.querySelectorAll('h2');
let button = document.querySelector('.btn')


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

button.addEventListener('dblclick', function(){
    headings.forEach(function (currentValue) {
    currentValue.textContent = 'you clicked my button!'
    })
})

