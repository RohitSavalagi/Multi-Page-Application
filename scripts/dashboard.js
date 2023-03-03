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
    taskInsert(tasks, 3);
  });

function taskInsert(tasks, load) {
  let html = "";
  for (let i = 0; i < load && i < tasks.length; i++) {
    const task = tasks[i];
    html += `
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
  taskElement.innerHTML = html;
}

let load = 3;
document.querySelector('.btn').addEventListener('click' ,() => {
  const remainingTasks = tasks.length - load;
  if (remainingTasks >= 3) {
    load += 3;
    taskInsert(tasks, load);
  } else {
    taskInsert(tasks, tasks.length);
    document.querySelector('.btn').remove();
  }
});
