const translate = document.querySelectorAll(".translate");

window.addEventListener('scroll', ()=>{
    let scroll = window.pageYOffset;
    console.log(scroll);
    translate.forEach(element =>{
        let speed = element.dataset.speed;
        console.log(speed);
        element.style.transform = `translateX(${scroll*speed}px)`;
    });
});

