function fa() {
    document.write("Adnan");
}
function fa1() {
    document.write("Chouhan");
}
function fa2() {
    fa();
    fa1();
}
fa2();


function dofirst() {
    document.write(" first! ");
    dosecond();
}
function dosecond() {
    document.write(" second! ");
    dofirst();
}
dofirst()