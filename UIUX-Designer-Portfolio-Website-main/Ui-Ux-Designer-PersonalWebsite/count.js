const counters = document.querySelectorAll(".number");
const speed =400;
counters.forEach((counter)=>{
    function updateCount(){
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerHTML;

        const inc = target/ speed;
        if (count<target){
            counter.innerHTML = Math.ceil(count+inc);
            setTimeout(updateCount , 1);            
        }else{
            count.innerHTML =target;
        }
    }
    updateCount();
});