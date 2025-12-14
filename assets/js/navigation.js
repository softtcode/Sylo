function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    const mainSections = document.querySelectorAll('main section');

    const initialLink = document.querySelector('a[href="#vs-general"]');
    if (initialLink) {
        const activeClass = document.body.classList.contains('light-mode-active') ? 'bg-gray-200' : 'bg-gray-600';
        initialLink.classList.add(activeClass);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            
            const targetId = this.getAttribute('href'); 
            const activeClass = document.body.classList.contains('light-mode-active') ? 'bg-gray-200' : 'bg-gray-600';

            navLinks.forEach(l => l.classList.remove('bg-gray-600', 'bg-gray-200'));
            this.classList.add(activeClass);

            mainSections.forEach(section => {
                if (`#${section.id}` === targetId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
}

function toggleSideBar () {
    const secondBtns = document.querySelectorAll('.btn-toggle-menu')
    const mainToggleBtn = document.getElementById('aside-button')
    const aside = document.getElementById('aside')
    const main = document.getElementById('main')

    mainToggleBtn.addEventListener('click', () => {
        secondBtns.forEach(btn => {
            btn.classList.toggle('!hidden')
        })

        aside.classList.toggle('!hidden')
        main.classList.toggle('!col-span-full')
    })

    secondBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            secondBtns.forEach(btn => {
                btn.classList.toggle('!hidden');
            })
            
            aside.classList.toggle('!hidden');
            main.classList.toggle('!col-span-full');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    toggleSideBar();      
});
