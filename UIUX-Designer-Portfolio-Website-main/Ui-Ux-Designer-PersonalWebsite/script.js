
let flag = 0;

function control(x){
    flag = flag + x ;
    update(flag);
    // console.log(flag);
}

update(flag);

function update(num){
    let slide = document.getElementsByClassName("caursel-item");
    if(num >= slide.length){
        flag = 0 ;
        num = 0;
    }
    if(num < 0){
        flag = slide.length - 1 ;
        num = slide.length - 1 ;
    }

    for(let y of slide){
        y.style.display = "none"
    }
    slide[num].style.display="block";
    slide[num+1].style.display="block"
    slide[num+2].style.display="block"

}