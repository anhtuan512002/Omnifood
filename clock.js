const myLabel=document.getElementById('myLabel');
//update liên tục theo seconds
setInterval(update,1000);
function update(){
    let date=new Date();
    myLabel.innerHTML=date;
    function formatTime(){
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        return `${hours}:${minutes}:${seconds}`
    }
}