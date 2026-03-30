(() => {
    const $ = (id) => document.getElementById(id);
    const hero = $('hero');
    const heroButton = $('btn');

    heroButton.addEventListener("click", () =>{ hero.setAttribute("hidden", ""); });
    heroButton.addEventListener("click", () => {document.body.style.overflow = "auto"; });

    Splitting();
    
})();



