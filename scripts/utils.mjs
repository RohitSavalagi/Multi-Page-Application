export const sidebarToggler = document.querySelector('.sidebar__svg--toggle');
export const sidebar = document.querySelector('.sidebar');
export const rightArrow = document.querySelector('.sidebar__rotate');
export const sidebarText = document.querySelectorAll('.sidebar__text');
export const headerText = document.querySelectorAll(".sidebar__logo");


export function sidebarToggle() {
    sidebar.classList.toggle('sidebar--active');
    console.log(sidebar);
    rightArrow.classList.toggle('sidebar__svg--active');
    for (const ele of sidebarText) {
        ele.classList.toggle('sidebar__text--active');
    }
    for (const ele of headerText) {
        ele.innerText = ele.innerText === "FT" ? "Feature Tester" : "FT";
    }
    
};



