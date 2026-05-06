(() => {
    const $ = (id) => document.getElementById(id);
    const hero = $('hero');
    const heroButton = $('btn');

    window.addEventListener("load", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    heroButton.addEventListener("click", () =>{ hero.setAttribute("hidden", "true"); });
    heroButton.addEventListener("click", () => {document.body.style.overflow = "auto"; });

    Splitting();
    
    
})();



