let a=0
document.getElementById("plus").onclick = function(){
    a=a+1;
    document.getElementById("count").innerHTML=a;
}
document.getElementById("minus").onclick = function(){
    a=a-1;
    document.getElementById("count").innerHTML=a;
}
document.getElementById("double").onclick = function(){
    a=a*2;
    document.getElementById("count").innerHTML=a;
}
document.getElementById("random").onclick = function(){
    a=Math.floor(Math.random()*100);
    document.getElementById("count").innerHTML=a;
}
document.getElementById("checkplus").onclick = function() {
    if (document.getElementById("checkboxs").checked) {
        console.log("checked");
    } else {
        console.log("unchecked");
    }
}
let checkraido1=document.getElementById("radio");
let checkraido2=document.getElementById("radio1");
let checkraido3=document.getElementById("radio2");
document.getElementById("radiocheckplus").onclick = function() {
    if (checkraido1.checked ) {
        console.log("cả 3 cái đều đã check");}
}
let e = 3;
let f = 1;
let g = 2;

function sumnumber(...numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return Number(numbers[0]) + sumnumber(...numbers.slice(1));
}

console.log(sumnumber(e, f, g));