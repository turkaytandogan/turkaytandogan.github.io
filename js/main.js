/*SHOW MENU*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav_toggle', 'nav_menu')

/*STICKY NAVBAR*/
const navbar = document.querySelector(".header");
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("header-sticky") : navbar.classList.remove("header-sticky");
}

/*SHOW SCROLL UP*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll_up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*SKILLS ACORDION*/
const accordionItems = document.querySelectorAll('.skills-item');
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.skills-header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item);
        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    })
})
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.skills-content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}

/*CONTRIBUTION ACORDION*/
const accordionItemsContribution = document.querySelectorAll('.contribution-item');
accordionItemsContribution.forEach((item) => {
    const accordionHeader = item.querySelector('.contribution-header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItemContribution(item);
        if (openItem && openItem !== item) {
            toggleItemContribution(openItem);
        }
    })
})
const toggleItemContribution = (item) => {
    const accordionContent = item.querySelector('.contribution-content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}

/*RESUME*/
function downloadResume() {
    fetch('docs/resume.pdf')
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'resume.pdf'; // İndirilecek dosya adı
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        })
        .catch(() => alert('Download failed!'));
}


/*EXPERİENCES TAB*/
document.querySelectorAll('.experiences-container').forEach(container => {
    const tabs = container.querySelectorAll('.experiences-button');
    const tabContents = container.querySelectorAll('.experiences-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSelector = tab.getAttribute('data-target');
            const targetContent = container.querySelector(targetSelector);

            // Tüm içerikleri ve butonları pasif yap
            tabContents.forEach(c => c.classList.remove('experiences-active'));
            tabs.forEach(t => t.classList.remove('experiences-active'));

            // Aktif olanları ekle
            if (targetContent) targetContent.classList.add('experiences-active');
            tab.classList.add('experiences-active');
        });
    });
});

/*PROJECTS TAB*/
document.querySelectorAll('.projects-container').forEach(container => {
    const tabs = container.querySelectorAll('.projects-button');
    const tabContents = container.querySelectorAll('.projects-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSelector = tab.getAttribute('data-target');
            const targetContent = container.querySelector(targetSelector);

            // Tüm içerikleri ve butonları pasif yap
            tabContents.forEach(c => c.classList.remove('projects-active'));
            tabs.forEach(t => t.classList.remove('projects-active'));

            // Aktif olanları ekle
            if (targetContent) targetContent.classList.add('projects-active');
            tab.classList.add('projects-active');
        });
    });
});

/*PROJECTS SWIPER*/
new Swiper('.project-swiper', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});