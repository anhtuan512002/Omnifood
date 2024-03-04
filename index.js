// let a=0
// document.getElementById("plus").onclick = function(){
//     a=a+1;
//     document.getElementById("count").innerHTML=a;
// }
// document.getElementById("minus").onclick = function(){
//     a=a-1;
//     document.getElementById("count").innerHTML=a;
// }
// document.getElementById("double").onclick = function(){
//     a=a*2;
//     document.getElementById("count").innerHTML=a;
// }
// document.getElementById("random").onclick = function(){
//     a=Math.floor(Math.random()*100);
//     document.getElementById("count").innerHTML=a;
// }
// document.getElementById("checkplus").onclick = function() {
//     if (document.getElementById("checkboxs").checked) {
//         console.log("checked");
//     } else {
//         console.log("unchecked");
//     }
// }
// let checkraido1=document.getElementById("radio");
// let checkraido2=document.getElementById("radio1");
// let checkraido3=document.getElementById("radio2");
// document.getElementById("radiocheckplus").onclick = function() {
//     if (checkraido1.checked ) {
//         console.log("cả 3 cái đều đã check");}
// }
// let e = 3;
// let f = 1;
// let g = 2;

// function sumnumber(...numbers) {
//     if (numbers.length === 0) {
//         return 0;
//     }
//     return Number(numbers[0]) + sumnumber(...numbers.slice(1));
// }

// console.log(sumnumber(e, f, g));
// class car{
//     constructor(power){
//         this._gas=25;
//         this._power=power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas}lit`;
//     }
// }
// let asd=new car(100);
// console.log(asd.power);
// try{
//     let x=window.prompt("nhập số");
//     x=Number(x);
//     if(isNaN(x)){
//         throw new Error("nhập sai");
//     }
//     if(x==""){
//         throw new Error("nhập sai");
//     }
//     console.log(`${x} là số`);
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("kết thúc");
// }
setTimeout(firstMessage, 3000)
setTimeout(secondMessage, 6000)
setTimeout(thirdMessage, 9000)
function firstMessage(){
    alert(`buy this course to get more 1`)
}
function secondMessage(){
    alert(`buy this course to get more 2`)
}
function thirdMessage(){
    alert(`buy this course to get more 2`)
}
