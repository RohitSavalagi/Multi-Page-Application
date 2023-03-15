import { sidebarToggler, sidebarToggle } from './utils.mjs'


sidebarToggler.addEventListener('click', sidebarToggle);

let contracts = [
    {
        title: "Deutsche Bundespost. Apple products monthly discount",
        status: "signed",
        Company: "Deutsche Bundespost",
        Location: "Germany, Berlin, Rathausstraße 5",
        Contract: "Show conditions",
        Assignee: "Haydn Schäfer",
        handler: "Aldrich Vogel",
        avatar: "img/image 3.svg"
    },
    {
        title: "Deutsche Bundespost. Apple products monthly discount",
        status: "building",
        Company: "Deutsche Bundespost",
        Location: "Germany, Berlin, Rathausstraße 5",
        Contract: "Show conditions",
        Assignee: "Haydn Schäfer",
        handler: "Aldrich Vogel",
        avatar: "img/image 3.svg"
    },
    {
        title: "Deutsche Bundespost. Apple products monthly discount",
        status: "signed",
        Company: "Deutsche Bundespost",
        Location: "Germany, Berlin, Rathausstraße 5",
        Contract: "Show conditions",
        Assignee: "Haydn Schäfer",
        handler: "Aldrich Vogel",
        avatar: "img/image 3.svg"
    }
]

console.warn(contracts)

add(contracts)
function add(contracts) {
    const container = document.querySelector('.contracts__wrapper');
    contracts.forEach(contract => {
      const contractDiv = document.createElement('div');
      contractDiv.classList.add('product__contract');
      
      contractDiv.innerHTML = `
        <div class="contract__header">
          <h3 class="contract__title">${contract.title}</h3>
          <p class="contract__status contract__status--${contract.status}">${contract.status}</p>
        </div>
        <div class="contract__details">
          <div class="contract__item">
            <label class="contract__label">Company</label>
            <p class="contract__company">${contract.Company}</p>
          </div>
          <div class="contract__item">
            <label class="contract__label">Location</label>
            <p class="contract__company">${contract.Location}</p>
          </div>
          <div class="contract__item">
            <label class="contract__label">Contract</label>
            <a href="${'#'}" class="contract__company contract__link contract__link--${contract.status}">${contract.Contract}</a>
          </div>
          <div class="contract__item">
            <label class="contract__label">Assignee</label>
            <a href="${'#'}" class="contract__company contract__link contract__link--${contract.status}">${contract.Assignee}</a>
          </div>
          <div class="contract__footer">
            <img class="contract__handler" src="${contract.avatar}">
            <p class="contract__company contract__link">${contract.handler}</p>
            <div class="contract__more-icon">
              <svg class="task__more-icon" width="16" height="5">
                <use xlink:href="#threedots"></use>
              </svg>
            </div>
          </div>
        </div>
      `;
      
      container.appendChild(contractDiv);
    });
  }
  
  document.querySelector("#add-contract").addEventListener('click', () => {
    document.querySelector('.popup').classList.add('popup--active');
    console.log(document.querySelector('.popup').classList)
    document.querySelector('.form').classList.add('form--active');
  });
  
  document.querySelector('.btn__cancel').addEventListener('click', () => {
    console.log("asdfasdfadsfasdf");
    document.querySelector('.popup').classList.remove('popup--active');
    document.querySelector('.form').classList.remove('form--active');
  });


  
  document.querySelector('#more').addEventListener('click', () => {
    document.querySelector('.product__contracts').classList.toggle('product__contracts--sigle-line');
  });


  sidebarToggler.addEventListener('click', () => {
    document.querySelector('.contracts__wrapper').classList.toggle('contracts__wrapper--sidebar-open');
    document.querySelector('.contract__action-icons').classList.toggle('contract__action-icons--sidebar-open');
    
});