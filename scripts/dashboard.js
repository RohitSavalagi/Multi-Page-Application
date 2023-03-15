import { sidebarToggler, sidebarToggle } from './utils.mjs'


sidebarToggler.addEventListener('click', sidebarToggle);


const weekPopup = document.querySelector('.progess__week');
const headerPopup = document.querySelector('.dashboard__graphic-link');

weekPopup.addEventListener('click', () => {
    document.querySelector('.progess__week-pop-up').classList.toggle('progess__week-pop-up--active');
})
headerPopup.addEventListener('click', () => {
  document.querySelector('.dashboard__pop-up').classList.toggle('dashboard__pop-up--active');
})

const taskElement = document.querySelector(".dashboard__items");
let tasks;
fetch("Json/dashboard_tasks.json")
  .then(res => res.json())
  .then(data => {
    tasks = data;
    setProgressValue(data);
    taskInsert(tasks, 2);
  });

function taskInsert(tasks, load) {
  let html = "";
  for (let i = 0; i < load && i < tasks.length; i++) {
    const task = tasks[i];
    taskElement.innerHTML += `
    <div class="dashboard__item">
      <div class="dashboard__title">
        <h1 class="dashboard__title-text">${task.task} ( ${task.items} items)</h1>
        <p class="dashboard__status dashboard__status--${task.status}">${task.status}</p>
      </div>
      <p class="dashboard__location">Location: ${task.location}</p>
      <div class="dashboard__footer">
        <img class="dashboard__handler-photo" src="${task.photo}" alt="">
        <p class="dashboard__person">${task.name}</p>
        <svg class="dashboard__more-logo" width="16" height="4">
          <use xlink:href="#threedots"></use>
        </svg>
      </div>
    </div>`;
  }
  
}

function setProgressValue(tasks){
  let progress = 0;
  tasks.forEach(element => {
    if(element.status === 'completed'){
      progress++;
    }
  });
  const progressInPcentage = (progress / tasks.length) * 100;
  let progressBar = document.querySelector('progess');
  if (progressBar) {
    progressBar.max = tasks.length + '';
    progressBar.value = progressInPcentage;
  }
  document.querySelector('.progess__completed').innerText = progress;
  document.querySelector('.progess__total').innerText = tasks.length;


}

let load = 2;
document.querySelector('.btn').addEventListener('click' ,() => {
  taskInsert(tasks, tasks.length)
  document.querySelector('.btn').remove();
});



sidebarToggler.addEventListener('click', () => {
    document.querySelector('.dashboard').classList.toggle('dashboard--sidebar-open');
    
});
