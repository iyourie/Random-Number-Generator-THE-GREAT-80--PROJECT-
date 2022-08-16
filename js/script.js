let min = document.querySelectorAll("input")[0];
let max = document.querySelectorAll("input")[1];
let generate = document.querySelector("button");
let h1 = document.querySelector("h1");
let NMin 
let nMax 

generate.onclick = () => {
    
 NMin = Number(min.value);
 nMax = Number(max.value);

    if (min.value.length == 0 || max.value.length == 0) {
        alert("enter a number");
        min.value = ''
        max.value = ''

    } else if (NMin > nMax) {
        alert("min value should be smaller than max value");
        min.value = ''
        max.value = ''
    }else if(NMin == nMax){
        alert("you can't enter two equal numbers")
        min.value = ''
        max.value = ''
    } else {
        let randomArr = [];
        for (let i = NMin; i < nMax; i++) {
            randomArr.push(i);
        }
        let random = Math.floor(Math.random() * randomArr.length);
        h1.innerHTML = randomArr[random];
    }
};
