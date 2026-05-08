window.addEventListener('load', function() { // celý kód se spustí až po načtení stránky

    const nav = document.querySelector('nav');
    const body = document.querySelector('body');
    const healthBar = document.getElementById('health-bar');
    const aboutSlide = document.getElementsByClassName('slide');
    const siluete = document.getElementsByClassName('about');
    const gun = nav.querySelector('img');
    let navTop = nav.offsetTop; // změříme pozici navigace

    window.onscroll = function() {
        let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        // logika pro navigaci
        if (scrollPos >= navTop && navTop > 0) {
            if (!nav.classList.contains('is-sticky')) { // dělá "sticky" navigaci
                nav.classList.add('is-sticky');
                body.style.maxWidth = "100%";
            }

            if (!gun.classList.contains('gun-sticky')) { // mění velikosti zbraně v navigaci
                gun.classList.add('gun-sticky');
            }

            if (!siluete[1].classList.contains('shadow')) { // přidává stín postavě v ABOUT ME
                siluete[1].classList.add('shadow');
            }
            
            if(!aboutSlide[0].classList.contains('about-slide')) { // přidává animaci pro text v ABOUT ME
                aboutSlide[0].classList.add('about-slide');

                const lol = aboutSlide[0].getElementsByTagName('p');
                for (let i = 0; i < lol.length; i++) {
                    lol[i].style.backgroundColor = "rgba(0, 0, 0, 1)";
                }
            }
        } else {
            if (nav.classList.contains('is-sticky')) {
                nav.classList.remove('is-sticky');
                body.style.maxWidth = "1200px";
            }
            
            if (gun.classList.contains('gun-sticky')) {
                gun.classList.remove('gun-sticky');
            }

            if (siluete[1].classList.contains('shadow')) {
                siluete[1].classList.remove('shadow');
            }

            if (aboutSlide[0].classList.contains('about-slide')) {
                aboutSlide[0].classList.remove('about-slide');

                const lol = aboutSlide[0].getElementsByTagName('p');
                for (let i = 0; i < lol.length; i++) {
                    lol[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
                }
            }
        }

        // logika pro healthbar
        const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollPos / winHeight) * 100;
        
        if (healthBar) {
            healthBar.style.height = (100 - scrolled) + "%";
        }
    };
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}