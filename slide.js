let slideIndex = 0
const imgs = document.getElementsByClassName('mySlide')
showSlide(slideIndex)

function switchImg(number){
    showSlide(slideIndex += number)
}

function showSlide(number) {
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none'
}

    if(number > imgs.length) { slideIndex = 1 }
    if(number < 1) { slideIndex = imgs.length}

    imgs[slideIndex - 1].style.display = 'block'
}