
// function dosomething(){
//     document.write("Adnan chouhan" + "<br>");
// }
// setInterval("dosomething()",1000);

function printTime(){
var now = new Date();
var hours =  now.getHours();
var mins = now.getMinutes();
var seconds = now.getMilliseconds();

document.write(hours + ":" + mins + ":" + seconds);
}

setInterval("printTime()",1000);

