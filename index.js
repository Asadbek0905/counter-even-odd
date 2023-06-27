
let h1 = document.querySelector("h1")
let btn = document.querySelector(".btn")
let btn1 = document.querySelector(".btn1")
let p = document.querySelector(".p")

btn.onclick = () => {
    function totalnum(a) {
        let value = parseInt(h1.innerText) + a;
        h1.innerText = value;
        console.log(value);
        if(value % 2 == 0){
            console.log("juft");
            p.innerText = value + " juft"

        }else{
            console.log("toq");
            p.innerText = value + " toq"
        }
    }
    totalnum(1)
}

btn1.onclick = () => {
    function totalnum(a) {
        let value = parseInt(h1.innerText) - 1;
        h1.innerText = value;
        console.log(value);
        if(value % 2 == 0){
            console.log("juft");
            p.innerText = value + " juft"

        }else{
            console.log("toq");
            p.innerText = value + " toq"
        }
    }
    totalnum()
}





