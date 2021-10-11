
const tabLinks = document.querySelectorAll('.tab');
const tabsItems = document.querySelectorAll('.tabcontent');

tabLinks.forEach(function(item) {
    item.addEventListener('click', function() {
        let currentTab = item;
        let tabId = currentTab.getAttribute('data-tab');
        let currentBtn = document.querySelector(tabId);

        if ( ! currentTab.classList.contains('active')) {
            tabLinks.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentTab.classList.add('active');
            currentBtn.classList.add('active');
        }

        
    });

});

