document.querySelector('.login__btn').addEventListener('click', () => {
    let url = window.location.href;
    url = url.substring(0, url.lastIndexOf('/')+1)
    console.log(url)
    window.location.replace(url+"dashboard.html");
})

// submitBtn=document.querySelector("#submit-button");
// submitBtn.addEventListener('click',()=>{
//     let url = window.location.href;
//     url = url.substring(0, url.lastIndexOf('/')+1)
//     console.log(url)
//     window.location.replace(url+"dashboard.html");
// })