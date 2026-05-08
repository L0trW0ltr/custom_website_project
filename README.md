"It ain't much, but it's honest work."

Finální stránka: https://l0trw0ltr.github.io/custom_website_project/

Řešení je silně zaměřeno spíše na vizuální pojetí, než-li na to obsahové.
Jinak všechna upravená .jpg a .png jsou editovaná mnou (Photopea).

Využití AI
----------------
AI bylo použito v některých případech na zkrašlení a ucelení mých pokusů o hlášky a popisky Maxe Payna.

Dále bylo AI plně použito na vytvoření "Scroll To Top" tlačítka v podobě HP baru podobnému ze hry samotné i se všemi styly identifikátorů, které jsou vidět zde:
<div id="health-wrapper">
	<div id="health-container" onclick="scrollToTop()">
		<div id="health-bar"></div>
	</div>
</div>

i tento JS:
```
...
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
```
