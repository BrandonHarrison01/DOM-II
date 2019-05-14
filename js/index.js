// Your code goes here
let logo = document.querySelector('.logo-heading');
let body = document.querySelector('body');


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
    logo.classList.toggle('.hidden');
})