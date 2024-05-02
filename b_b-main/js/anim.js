function showFooterNav() {
    const footer = document.querySelector('.footer');
    footer.classList.add('footer-show');
}

function megnyit(link){
    window.open(link, "_self")
}


let cards = document.querySelectorAll('.card');
let iframes = document.querySelectorAll('.iframe');

cards.forEach((item, index) =>{
    item.addEventListener('mouseover', function(){
        let vSrc = iframes[index].dataset.video;
        iframes[index].src = vSrc;
    });
    item.addEventListener('mouseleave', function (){
        iframes[index].src = '';
    });

})