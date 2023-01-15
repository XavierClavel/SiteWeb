var sidebarToggled = false;

function toggleSidebar() {
    if (sidebarToggled) {
        console.log("opening sidebar");
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("sidebar").style.maxWidth = "0px";
        document.getElementById("menuButton").src = "images/nav-menu.png"
        sidebarToggled = false;
    }
    else {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("sidebar").style.maxWidth = "250px";
        document.getElementById("menuButton").src = "images/nav-back.png"
        sidebarToggled = true;
    }

}

function alertLog() {
    console.log("alerte");
}
