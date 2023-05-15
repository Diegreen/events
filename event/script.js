let button = document.querySelector('button')
let p = document.querySelector('p')

let contador = 0;

button.addEventListener('click', function(event) {
    contador ++
    p.innerText  = contador;
})