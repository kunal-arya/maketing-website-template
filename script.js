const openBtn = document.querySelector(`.open-nav`);
const closeBtn = document.querySelector(`.close-nav`);
const nav = document.querySelector(`.nav`);

closeBtn.addEventListener(`click`, () => {
    nav.classList.remove(`open-navigation`)
})

openBtn.addEventListener(`click`, () => {
    nav.classList.add(`open-navigation`);
})