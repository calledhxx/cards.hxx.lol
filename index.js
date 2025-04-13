let isHolding = false;

function tranCard(a){
    let dx = Math.floor((a/5));

    let x = dx%360;
    let db = Math.floor((x+90)/180)%2;

    if(!db){
        document.getElementsByClassName("Card")[0].children[0].style.opacity = "1";
        document.getElementsByClassName("Card")[0].children[1].style.opacity = "0";
    }else{
        document.getElementsByClassName("Card")[0].children[0].style.opacity = "0";
        document.getElementsByClassName("Card")[0].children[1].style.opacity = "1";
    }

    if(a){
        document.getElementsByClassName("Card")[0].style.transition = ``;
    }else{
        document.getElementsByClassName("Card")[0].style.transition = `all 110ms ease-in-out`;
    }

    document.getElementsByClassName("Card")[0].children[2].style.top = String((90+dx)%180)+"%";
    document.getElementsByClassName("Card")[0].style.transform = `translate(-50%,-50%) rotateY(${String(dx)}deg)`;
    document.getElementsByClassName("Card")[0].children[3].style.opacity = String(0.1*(1.3-2*Math.abs(Math.abs((x%180)/180)-0.5)));
}
let LastX  = 0;
let StartX  = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (m) => {
        if(isHolding) tranCard(m.clientX + LastX - StartX);
    })

    tranCard(0);


})

document.addEventListener("mousedown", (m) => {
    isHolding = true;
    StartX = m.clientX;
})

document.addEventListener("mouseup", (m) => {
    isHolding = false;
    LastX = m.clientX + LastX - StartX;
})