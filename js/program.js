
const tabLinks = document.querySelectorAll('.tab');


tabLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentTab = item;

        tabLinks.forEach(function(item) {

        currentTab.classList.add('active');
    });

});
});
