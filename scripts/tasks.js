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

const sidebarToggler = document.querySelector('.sidebar__svg--toggle');

sidebarToggler.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('sidebar--active');
    
    const rightArrow = document.querySelector('.sidebar__rotate')
    rightArrow.classList.toggle('sidebar__svg--active');
    
    const sidebarText = document.querySelectorAll('.sidebar__text');
    sidebarText.forEach((ele) => {
        ele.classList.toggle('sidebar__text--active')
    })

    const headerText = document.querySelectorAll(".header__logo");
    headerText.forEach((ele) => {
    if(ele.innerText == "FT"){
        ele.innerText = "Feature Tester"
    }
    else{
        ele.innerText = "FT"
    }
});
})

document.querySelector(".task__items")

addTask(tasks)

function addTask(tasks){
    tasks.forEach((ele) => {
        const div = document.createElement('div');
        const taskHeader = document.createElement('div');
        const taskHeading = document.createElement('h1');
        const taskStatus = document.createElement('p');
        const taskDueDateWrapper = document.createElement('div');
        const taskDueDateLabel = document.createElement('h1');
        const taskDueDateDate = document.createElement('p');
        const taskItemWrapper = document.createElement('div');
        const taskItem = document.createElement('ul');
        const taskItemLabel = document.createElement('h1');
        const taskLocationWrapper = document.createElement('div');
        const taskLocationLabel = document.createElement('h1');
        const taskLocation = document.createElement('p');
        const taskfooter = document.createElement('div');
        const taskHandlerImg = document.createElement('img');
        const taskHandlerName = document.createElement('p');
        const taskMore = document.createElement('div');
        
        div.classList.add('task__item');
        taskHeader.classList.add('task__header');
        taskHeading.classList.add('task__heading');
        taskStatus.classList.add('task__status', `task__status--${ele.status}`);
        taskDueDateWrapper.classList.add('task__due-date-wrapper');
        taskDueDateLabel.classList.add('task__due-date-label');
        taskDueDateDate.classList.add('task__due-date-date');
        taskItemWrapper.classList.add('task__item-wrapper');
        taskItemLabel.classList.add('task__item-label');
        taskLocationWrapper.classList.add('task__location-wrapper');
        taskLocationLabel.classList.add('task__location-label');
        taskLocation.classList.add('task__location-of-item');
        taskfooter.classList.add("task__footer-wrapper");
        taskHandlerImg.classList.add("task__footer-img");
        taskHandlerName.classList.add("task__handler");
        taskMore.classList.add("task__more-icon");
        
        taskHeading.textContent = ele.title;
        taskStatus.textContent = ele.status;
        taskStatus.classList.add(`task__status--${ele.status}`);
        taskStatus.setAttribute('title', `${ele.status}`)
        taskDueDateLabel.textContent = 'Due Date';
        taskDueDateDate.textContent = ele.duedate;
        taskItemLabel.textContent = 'Items';
        taskLocationLabel.textContent = 'Location';
        taskLocation.textContent = ele.Location;
        taskHandlerImg.src = ele.avatar;
        taskHandlerName.textContent = ele.handler;
        taskMore.innerHTML = `
        <svg class="task__more-icon" width="16" height="5">
                    <use xlink:href="#threedots"></use>
        </svg>`;

        
        ele.Items.forEach((item) => {
            const taskLocation = document.createElement('li');
            taskLocation.classList.add('tasks__list-itmes');
            taskLocation.textContent = item;
            taskItem.appendChild(taskLocation);
        });
        
        taskHeader.appendChild(taskHeading);
        taskHeader.appendChild(taskStatus);
        taskDueDateWrapper.appendChild(taskDueDateLabel);
        taskDueDateWrapper.appendChild(taskDueDateDate);
        taskItemWrapper.appendChild(taskItemLabel);
        taskItemWrapper.appendChild(taskItem);
        taskLocationWrapper.appendChild(taskLocationLabel);
        taskLocationWrapper.appendChild(taskLocation);
        taskfooter.appendChild(taskHandlerImg);
        taskfooter.appendChild(taskHandlerName);
        taskfooter.appendChild(taskMore);

        
        div.appendChild(taskHeader);
        div.appendChild(taskDueDateWrapper);
        div.appendChild(taskItemWrapper);
        div.appendChild(taskLocationWrapper);
        div.appendChild(taskfooter)
        
        document.querySelector('.task__items').appendChild(div);
    });
}
