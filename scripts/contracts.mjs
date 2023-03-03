

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
function add(contracts){
    const container = document.querySelector('.contracts__wrapper');
    contracts.forEach(contract => {
        const contractDiv = document.createElement('div');
        contractDiv.classList.add('product__contract');
        
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('contract__header');
        
        const titleH3 = document.createElement('h3');
        titleH3.classList.add('contract__title');
        titleH3.textContent = contract.title;
        
        const statusP = document.createElement('p');
        statusP.classList.add('contract__status', `contract__status--${contract.status}`);
        statusP.textContent = contract.status;
        
        headerDiv.appendChild(titleH3);
        headerDiv.appendChild(statusP);
        
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('contract__details');
        
        const companyDiv = document.createElement('div');
        companyDiv.classList.add('contract__item');
        
        const companyLabel = document.createElement('label');
        companyLabel.classList.add('contract__label');
        companyLabel.textContent = 'Company';
        
        const companyP = document.createElement('p');
        companyP.classList.add('contract__company');
        companyP.textContent = contract.Company;
        
        companyDiv.appendChild(companyLabel);
        companyDiv.appendChild(companyP);
        
        const locationDiv = document.createElement('div');
        locationDiv.classList.add('contract__item');
        
        const locationLabel = document.createElement('label');
        locationLabel.classList.add('contract__label');
        locationLabel.textContent = 'Location';
        
        const locationP = document.createElement('p');
        locationP.classList.add('contract__company');
        locationP.textContent = contract.Location;
        
        locationDiv.appendChild(locationLabel);
        locationDiv.appendChild(locationP);
        
        const contractDiv2 = document.createElement('div');
        contractDiv2.classList.add('contract__item');
        
        const contractLabel = document.createElement('label');
        contractLabel.classList.add('contract__label');
        contractLabel.textContent = 'Contract';
        
        const contractP = document.createElement('a');
        contractP.setAttribute('href', '{'  + '#' + '}' )
        contractP.classList.add('contract__company', 'contract__link', `contract__link--${contract.status}`);
        contractP.textContent = contract.Contract;
        
        contractDiv2.appendChild(contractLabel);
        contractDiv2.appendChild(contractP);
        
        const assigneeDiv = document.createElement('div');
        assigneeDiv.classList.add('contract__item');
        
        const assigneeLabel = document.createElement('label');
        assigneeLabel.classList.add('contract__label');
        assigneeLabel.textContent = 'Assignee';
        
        const assigneeP = document.createElement('a');
        assigneeP.setAttribute('href', '{'  + '#' + '}' );
        assigneeP.classList.add('contract__company', 'contract__link',  `contract__link--${contract.status}`);
        assigneeP.textContent = contract.Assignee;
        
        assigneeDiv.appendChild(assigneeLabel);
        assigneeDiv.appendChild(assigneeP);
        
        const footerDiv = document.createElement('div');
        footerDiv.classList.add('contract__footer');
        
        const handlerImg = document.createElement('img');
        handlerImg.classList.add('contract__handler');
        handlerImg.src = contract.avatar;
        
        const handlerP = document.createElement('p');
        handlerP.classList.add('contract__company', 'contract__link');
        handlerP.textContent = contract.handler;

        const moreOption = document.createElement('div');
        moreOption.classList.add('contract__more-icon');
        moreOption.innerHTML = `
        <svg class="task__more-icon" width="16" height="5">
                    <use xlink:href="#threedots"></use>
        </svg>
        `;
        
        footerDiv.appendChild(handlerImg);
        footerDiv.appendChild(handlerP);
        footerDiv.appendChild(moreOption);
        
        detailsDiv.appendChild(companyDiv);
        detailsDiv.appendChild(locationDiv);
        detailsDiv.appendChild(contractDiv2);
        detailsDiv.appendChild(assigneeDiv);
        detailsDiv.appendChild(footerDiv);
        
        contractDiv.appendChild(headerDiv);
        contractDiv.appendChild(detailsDiv);
        
        container.appendChild(contractDiv);
    });
}


document.querySelector("#add-contract").addEventListener('click' , () => {
    document.querySelector('.popup').classList.add('popup--active');
})

document.querySelector('.btn__cancel').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('popup--active');
})


document.querySelector('#more').addEventListener('click', () => {
    document.querySelector('.product__contracts').classList.toggle('product__contracts--sigle-line');
})


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