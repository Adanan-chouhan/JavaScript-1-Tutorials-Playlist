function persion(name,age){
    this.name = name;
    this.age = age;
}

var adnan = new persion("Adnan chouhan",20);
var arbaaz = new persion("Arbaaz",17)


document.write(adnan.name + "<br>");
document.write(adnan.age + "<br>");

document.write(arbaaz.name + "<br>");
document.write(arbaaz.age);