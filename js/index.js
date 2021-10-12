(function() {
    const slides = [
        `<img src="img/footer/girl-ball-dog.jpg" alt="girl ball dog">`,
        `<img src="img/footer/girl-blue-ball.webp" alt="girl blue ball">`,
        `<img src="img/footer/girl-cat.webp" alt="girl cat">`,
        `<img src="img/footer/girl-fruits.webp" alt="girl fruits">`,
        `<img src="img/footer/girl-hans-up.webp" alt="girl hans up">`,
        `<img src="img/footer/girl-laptop.jpg" alt="girl-laptop">`
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.follow-us');
        let html ='';
        html = slides[currentSlide];
        const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
        html += slides[nextSlide];
        const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
        html += slides[next2Slide];
        const next3Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
        html += slides[next3Slide];
        slideContainer.innerHTML = html;
    }
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }
    setInterval(nextSlide, 4000);
    showCurrentSlide();

    const buttonNext = document.querySelector(`.containerFollowUs .next`);
    buttonNext.addEventListener(`click`, nextSlide);

    const buttonPrev = document.querySelector(`.containerFollowUs .prev`);
    buttonPrev.addEventListener(`click`, prevSlide);

}) ();