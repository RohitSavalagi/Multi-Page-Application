const sidebarToggler = document.querySelector('.sidebar__svg--toggle');
const sidebar = document.querySelector('.sidebar');
const rightArrow = document.querySelector('.sidebar__rotate');
const sidebarText = document.querySelectorAll('.sidebar__text');
const headerText = document.querySelectorAll(".sidebar__logo");


sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--active');
    rightArrow.classList.toggle('sidebar__svg--active');
    for (const ele of sidebarText) {
        ele.classList.toggle('sidebar__text--active');
    }
    for (const ele of headerText) {
        ele.innerText = ele.innerText === "FT" ? "Feature Tester" : "FT";
    }
    
});



