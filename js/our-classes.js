const classes = [
{
    id: 1,
    img: "img/classes/Pilates.webp",
    name: "Pilates & Yoga",
    info: 'A combined program for stretching and strengthening muscles.',
    
}

{
    id: 2,
    img: "img/classes/Fitness.webp",
    name: "Fitness",
    info: 'A set of exercises to increase strength, endurance, burn body fat.',
    
}
{
    id: 3,
    img: "img/classes/Pregnancy.webp",
    name: "Children's Programs",
    info: 'A special set of safe and easy exercises for pregnant women willing to stay in shape.',
    
}
{
    id: 4,
    img: "img/classes/Pregnancy.webp",
    name: "Pregnancy Fitness",
    info: 'A special set of safe and easy exercises for pregnant women willing to stay in shape.',

}
{
    id: 5,
    img: "img/classes/Fitness.webp",
    name: "Fitness for Seniors",
    info: 'A set of physical activities for seniors who want to look great and stay healthy.'

}
]

function renderClasses (classes) {
    const classesContainer = document.querySelector(.slider);
    for (const class of classes) {
        classesContainer.innerHTML +=
        `<nav class="classes-pilates">
            <img src="${classes.img}" alt="Pilates & Yoga">
            <h5>${classes.name}</h5>
            <p>${classes.info}</p>
            <a href="index.html#contactus">START NOW→</a>
        </nav>`;
    }
}

renderClasses (classes);