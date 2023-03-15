import { sidebarToggler, sidebarToggle } from './utils.mjs';
sidebarToggler.addEventListener('click', sidebarToggle);

let tasks = [
    {
        title: "Berlin University iPad Pro 2020 (25 items)",
        status: "completed",
        duedate : "August 17, 2021",
        Location: "Germany, Berlin, Rathausstraße 5",
        Items: ["x12 iPad Pro 2020",
           " x12 Extended Apple Warranty (5 years)",

    ],   
        avatar: "img/image 3.svg",
        handler: "Aldrich Vogel"
    },
    {
        title: "Berlin University iPad Pro 2020 (25 items)",
        status: "cancelled",
        duedate : "August 17, 2021",
        Location: "Germany, Berlin, Rathausstraße 5",
        Items: ["x12 iPad Pro 2020",
           " x12 Extended Apple Warranty (5 years)",
            "Delivery"],   
        avatar: "img/image 3.svg",
        handler: "Aldrich Vogel"
    },
    {
        title: "Berlin University iPad Pro 2020 (25 items)",
        status: "progress",
        duedate : "August 17, 2021",
        Location: "Germany, Berlin, Rathausstraße 5",
        Items: ["x12 iPad Pro 2020",
           " x12 Extended Apple Warranty (5 years)",
            "Delivery"],   
        avatar: "img/image 3.svg",
        handler: "Aldrich Vogel"
    },
    {
        title: "Berlin University iPad Pro 2020 (25 items)",
        status: "completed",
        duedate : "August 17, 2021",
        Location: "Germany, Berlin, Rathausstraße 5",
        Items: ["x12 iPad Pro 2020",
           " x12 Extended Apple Warranty (5 years)",
            "Delivery"],   
        avatar: "img/image 3.svg",
        handler: "Aldrich Vogel"
    },
]

document.querySelector(".task__items")

addTask(tasks)

function addTask(tasks){
    tasks.forEach((ele) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="task__item">
          <div class="task__header">
            <h1 class="task__heading">${ele.title}</h1>
            <p class="task__status task__status--${ele.status}" title="${ele.status}">${ele.status}</p>
          </div>
          <div class="task__due-date-wrapper">
            <h1 class="task__due-date-label">Due Date</h1>
            <p class="task__due-date-date">${ele.duedate}</p>
          </div>
          <div class="task__item-wrapper">
            <h1 class="task__item-label">Items</h1>
            <ul class="task__elements">
              ${ele.Items.map(item => `<li class="tasks__list-itmes">${item}</li>`).join('')}
            </ul>
          </div>
          <div class="task__location-wrapper">
            <h1 class="task__location-label">Location</h1>
            <p class="task__location-of-item">${ele.Location}</p>
          </div>
          <div class="task__footer-wrapper">
            <img class="task__footer-img" src="${ele.avatar}" />
            <p class="task__handler">${ele.handler}</p>
            <div class="task__more-icon">
              <svg class="task__more-icon" width="16" height="5">
                <use xlink:href="#threedots"></use>
              </svg>
            </div>
          </div>
        </div>
      `;
      document.querySelector('.task__items').appendChild(div.firstElementChild);
    });
  }
  
sidebarToggler.addEventListener('click', () => {
    document.querySelector('.task').classList.toggle('task--sidebar-open');
    
});