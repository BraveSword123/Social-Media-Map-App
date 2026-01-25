
// Once the HTML is loaded and built in the page run this code 
document.addEventListener("DOMContentLoaded", () => {
// A variable that holds the container of all the nav bar buttons 
const group = document.querySelector("#navbarContainer"); 
// A container of all buttons in nav bar 
const buttons = group.querySelectorAll(".navbarElement"); 
// Loop through each button that has class navbarElement
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Remove active from all buttons
        buttons.forEach(b => b.classList.remove("active")); 
        // Add active to the button that we clicked 
        btn.classList.add("active"); 
        }); 
    }); 
}); 

function showPosts(){
    document.getElementById("postContainer").style.display = 'flex'; 
    document.getElementById("badgeContainer").style.display = 'none'; 
    document.getElementById("profileContainer").style.display = 'none'; 
    document.getElementById("locationsContainer").style.display = 'none'; 
}

function showBadges(){
    document.getElementById("badgeContainer").style.display = 'block'; 
    document.getElementById("postContainer").style.display = 'none';
    document.getElementById("profileContainer").style.display = 'none';  
    document.getElementById("locationsContainer").style.display = 'none';
}

function showProfile(){
    document.getElementById("profileContainer").style.display = 'block'; 
    document.getElementById("postContainer").style.display = 'none'; 
    document.getElementById("badgeContainer").style.display = 'none'
    document.getElementById("locationsContainer").style.display = 'none';
}

function showLocations(){
    document.getElementById("locationsContainer").style.display = 'block'; 
    document.getElementById("badgeContainer").style.display = 'none'; 
    document.getElementById("profileContainer").style.display = 'none'; 
    document.getElementById("postContainer").style.display = 'none'; 
}