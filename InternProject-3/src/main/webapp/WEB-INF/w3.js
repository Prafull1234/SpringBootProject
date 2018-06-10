 // Script to open and close left sidebar on small screen
 function openLeftMenu() {
    document.getElementById("leftSidebar").style.display = "block";
    document.getElementById("rightSidebar").style.display = "none";
    document.getElementById("openRightMenu").style.display = "block";
    document.getElementById("closeRightMenu").style.display = "none";
    // document.getElementById("leftSideOverlay").style.display = "block";
    document.getElementById("openLeftMenu").style.display = "none";
    document.getElementById("closeLeftMenu").style.display = "block";
}
function closeLeftMenu() {
    document.getElementById("leftSidebar").style.display = "none";
    // document.getElementById("leftSideOverlay").style.display = "none";
    document.getElementById("closeLeftMenu").style.display = "none";
    document.getElementById("openLeftMenu").style.display = "block";
}
// Script to open and close right sidebar on small screen
function openRightMenu() {
    document.getElementById("rightSidebar").style.display = "block";
    document.getElementById("leftSidebar").style.display = "none";
    document.getElementById("openLeftMenu").style.display = "block";
    document.getElementById("closeLeftMenu").style.display = "none";
    // document.getElementById("rightSideOverlay").style.display = "block";
    document.getElementById("openRightMenu").style.display = "none";
    document.getElementById("closeRightMenu").style.display = "block";
}
function closeRightMenu() {
    document.getElementById("rightSidebar").style.display = "none";
    // document.getElementById("rightSideOverlay").style.display = "none";
    document.getElementById("closeRightMenu").style.display = "none";
    document.getElementById("openRightMenu").style.display = "block";
}
// Script to open and close left sidebar on large/medium screen
function openSidebar() {
    document.getElementById("mainSidebar").style.display = "block";
    document.getElementById("openSidebar").style.display = "none";
    document.getElementById("closeSidebar").style.display = "block";
    document.getElementById("closeSidebar").style = "margin-left:20%";
    document.getElementById("largeFooter").style = "bottom:0;position:fixed;margin-left:20%;width:80%";
     document.getElementById("largeContent").style = "margin-left:20%";
    document.getElementById("mediumContent").style = "margin-left:20%";
}
function closeSidebar() {
    document.getElementById("mainSidebar").style.display = "none";
    document.getElementById("openSidebar").style.display = "block";
    document.getElementById("closeSidebar").style.display = "none";
    document.getElementById("openSidebar").style = "margin-left:0%";
    document.getElementById("largeFooter").style = "bottom:0;position:fixed;margin-left:0%;width:100%";
    document.getElementById("largeContent").style = "margin-left:0%";
    document.getElementById("mediumContent").style = "margin-left:0%";    
}