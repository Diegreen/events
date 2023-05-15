let element = document.getElementsByClassName('article')[0]

element.addEventListener('click', function(event) {
    console.log('----> target', event.target)
    console.log('----> currentTarget', event.currentTarget)
})

//target = onde o evento iniciou
//currentTarget = referencia de onde está o evento

let elementLink =  document.getElementsByClassName('link_to')[0]

elementLink.addEventListener('click', function(event) {
event.preventDefault()
event.stopPropagation()
})