/*
function debounce (func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if (!immediate) func.apply(context, agg);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout - setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};




const sliderImages = document.querySelectorAll('.trainers');

function checkSlide(e) {
    console.log(window.scrollY);
    sliderImages.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImages.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImages.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
         } else {
             sliderImage.classList.remove('active');
         }
        
    });
}

window.addEventListener('scroll', debounce(checkSlide));

*/