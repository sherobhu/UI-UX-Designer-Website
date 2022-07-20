
let f = 0;

function controll(x){
    f = f + x ;
    updateAns(f);
    // console.log(flag);
}

updateAns(f);

function updateAns(num){
    let clientSlide = document.getElementsByClassName("each-client");
    if(num >= clientSlide.length){
        f = 0 ;
        num = 0;
    }
    if(num < 0){
        f = clientSlide.length - 1 ;
        num = clientSlide.length - 1 ;
    }

    for(let y of clientSlide){
        y.style.display = "none"
    }
    clientSlide[num].style.display="block";
    clientSlide[num+1].style.display="block"
}