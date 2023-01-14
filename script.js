var mini = true;

function toggleSidebar() {
    console.log("function called");
    console.log("opening sidebar");
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";

}

function exitSidebar() {
    console.log("closing sidebar");
    document.getElementById("sidebar").style.width = "85px";
    document.getElementById("main").style.marginRight = "85px";
}

function alertLog() {
    console.log("alerte");
}
