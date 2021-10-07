
(function() {
    const slides = [
        `<nav class="multi-level-group-classes">
            <h3>Multi-level group classes</h3>
            <img src="img/logo/girl.svg" alt="Girl pray">
            <p>$35 / session</p>
            <p>Online group classes<br>
                Two sessions per week<br>
                Low intensity</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="classes-for-beginners">
            <h3>One-on-one classes for beginners</h3>
            <img src="img/logo/lotus.svg" alt="Lotus">
            <p>$65 / session</p>
            <p>Introductory training for free<br>
                Two sessions per week<br>
                Special program for beginners</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="classes-for-any-level">
            <h3>12-classes package for any level</h3>
            <img src="img/logo/girl-leg.svg" alt="Girl with leg">
            <p>$350 / package</p>
            <p>2 group sessions per week<br>
                1 individual training per week<br>
                Personalized nutrition plan</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="multi-level-group-classes">
            <h3>Multi-level group classes</h3>
            <img src="img/logo/girl-barbell.svg" alt="Girl with barbell">
            <p>$30 / session</p>
            <p>WhatsApp group chat<br>
                Two sessions per week<br>
                Two instructors</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="classes-for-beginners">
            <h3>One-on-one classes for beginners</h3>
            <img src="img/logo/clock.svg" alt="Clock">
            <p>$60 / session</p>
            <p>Flexible schedule<br>
                Your trainer is always in touch<br>
                Customized program</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="12-classes package">
            <h3>12-classes package for any level </h3>
            <img src="img/logo/waistline.svg" alt="Waistline">
            <p>$300 / month</p>
            <p>2 group sessions per week<br>
                1 individual training per week<br>
                Personalized nutrition plan</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="fitness-group-classes">
            <h3>Fitness group classes</h3>
            <img src="img/logo/pregnant.svg" alt="Pregnant">
            <p>$50 / session</p>
            <p>Exercises by periods of pregnancy<br>
                2 sessions per week<br>
                Preparation for the childbirth</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="one-on-one-fitness-trainings">
            <h3>One-on-one fitness trainings</h3>
            <img src="img/logo/heart.svg" alt="Heart">
            <p>$65 / session</p>
            <p>Customized program<br>
                Flexible schedule<br>
                Breathwork techniques</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="Program-for-postpartum-period">
            <h3>Program for postpartum period</h3>
            <img src="img/logo/dumbbells.svg" alt="Dumbbells">
            <p>$450 / month</p>
            <p>3 group classes per week<br>
                2 individual classes per week<br>
                Personalized nutrition plan</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="from-five-years-old">
            <h3>For children from 5 years old</h3>
            <img src="img/logo/boy.svg" alt="Boy">
            <p>$20 / session</p>
            <p>Easy and funny exercises<br>
                Special Kids & Parents program<br>
                Two sessions per week</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="from-ten-years-old">
            <h3>For children from 10 years old</h3>
            <img src="img/logo/book.svg" alt="Book">
            <p>$30 / session</p>
            <p>Gymnastics for children<br>
                Stretching<br>
                Two sessions per week</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="from-fifteen-years-old">
            <h3>For teens 15-17 years old</h3>
            <img src="img/logo/skipping-rope.svg" alt="Skipping rope">
            <p>$250 / month</p>
            <p>Weight routine<br>
                Three sessions per week<br>
                WhatsApp group chat</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="basic-group-classes-by-age">
            <h3>Basic group classes by age</h3>
            <img src="img/logo/old-man.svg" alt="Old man">
            <p>$30 / session</p>
            <p>Two classes per week<br>
                Balance & flexibility exercises<br>
                Moderate aerobic activity</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="One-on-one">
            <h3>One-on-one senior program</h3>
            <img src="img/logo/expander.svg" alt="Expander">
            <p>$50 / session</p>
            <p>Personalized nutrition plan<br>
                Your trainer is always in touch<br>
                Flexible schedule</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`,
        `<nav class="for-older-adults">
            <h3>Group program for older adults</h3>
            <img src="img/logo/man-stay-on-hand-and-leg.svg" alt="Man stay on hand and leg">
            <p>$350 / month</p>
            <p>Two classes per week<br>
                Your trainer is always in touch<br>
                Gentle and light-paced activity</p>
            <a href="index.html#contactus">SING UP</a>
        </nav>`
    ]

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.programs');
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
    /*setInterval(nextSlide, 0);*/
    showCurrentSlide();

    const buttonPilates = document.querySelector(`.navigation .pilates`);
    buttonPilates.addEventListener(`click`, nextSlide);

    const buttonPrev = document.querySelector(`.ourClasses .prev`);
    buttonPrev.addEventListener(`click`, prevSlide);
}) ();