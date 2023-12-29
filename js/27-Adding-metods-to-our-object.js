function pepale(name , age){
    this.name = name,
    this.age = age,
    this.expair = fa
}
function fa(){
    var a = 100 - this.age;
    return a;
}

var c = new pepale('Adnan chouhan' , 17);
var d = new pepale('Arbaaz' , 25);
document.write(c.expair() + "<br>");
document.write(d.expair());