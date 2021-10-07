//IIFE
//(function() {}) ();


(function() {
    const slides = [
        `<nav class="classes-pilates">
            <img src="img/classes/Pilates.webp" alt="Pilates & Yoga">
            <h5>Pilates & Yoga</h5>
            <p>A combined program for stretching and strengthening muscles.</p>
            <a href="index.html#contactus">START NOW→</a>
        </nav>`,
        `<nav class="classes-fitness">
            <img src="img/classes/Fitness.webp" alt="Fitness">
            <h5>Fitness</h5>
            <p>A set of exercises to increase strength, endurance, burn body fat.</p>
            <a href="index.html#contactus">START NOW→</a>
        </nav>`,
        `<nav class="classes-сhildren">
            <img src="img/classes/Children.webp" alt="Children's Programs">
            <h5>Children's Programs</h5>
            <p>Home sessions designed specifically for children and their parents</p>
            <a href="index.html#contactus">START NOW→</a>
        </nav>`,
        `<nav class="classes-pregnancy">
            <img src="img/classes/Pregnancy.webp" alt="Pregnancy Fitness">
            <h5>Pregnancy Fitness</h5>
            <p>A special set of safe and easy exercises for pregnant women willing to stay in shape.</p>
            <a href="index.html#contactus">START NOW→</a>
        </nav>`,
        `<nav class="classes-seniors">
            <img src="img/classes/Fitness.webp" alt="Fitness for Seniors">
            <h5>Fitness for Seniors</h5>
            <p>A set of physical activities for seniors who want to look great and stay healthy.</p>
            <a href="index.html#contactus">START NOW→</a>
        </nav>`
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.slide-container');
        let html ='';
        html = slides[currentSlide];
        const nextSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;
        html += slides[nextSlide];
        const next2Slide = nextSlide + 1 < slides.length ? nextSlide + 1 : 0;
        html += slides[next2Slide];
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
    setInterval(nextSlide, 2000);
    showCurrentSlide();

    const buttonNext = document.querySelector(`.ourClasses .next`);
    buttonNext.addEventListener(`click`, nextSlide);

    const buttonPrev = document.querySelector(`.ourClasses .prev`);
    buttonPrev.addEventListener(`click`, prevSlide);
}) ();
