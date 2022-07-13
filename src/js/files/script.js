// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.documentElement.clientWidth > 768) {
    if (document.querySelector('.menu__btn')) {
        const rsdIcon = document.querySelector('.menu__btn');
        const rsdMenu = document.querySelector('.rightside-menu');
        const rsdIconClose = document.querySelector('.rightside-menu__close');
        rsdIcon.addEventListener("click", function (e) {
            rsdMenu.style.right = "0";
            rsdMenu.style.opacity = "1";
            rsdMenu.style.visibility = "visible";
        });
        rsdIconClose.addEventListener("click", function rsdMenuClose(e) {
            rsdMenu.style.visibility = "hidden";
            rsdMenu.style.opacity = "0";
            rsdMenu.style.right = "-100%";
        });
    };
};














