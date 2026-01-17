let currentLocationSetting = 'Off'; 

window.onload = function() {
document.getElementsByClassName("navbarElement").onmouseout = function() {
    document.getElementsByClassName("navbarElement").style.backgroundColor = 'rgb(255, 105, 160)'; 
    // document.getElementsByClassName("navbarElement").style.transition = "all 3s";  
}

document.getElementsByClassName("navbarElement").onmouseover = function() {
    document.getElementsByClassName("navbarElement").style.backgroundColor = 'rgb(251, 169, 199)'; 
    // document.getElementsByClassName("navbarElement").style.transition = "all 3s";  
}
}

function showPosts(){
    document.getElementById("postContainer").style.display = 'flex'; 
    document.getElementById("profileButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("badgesButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("postsButton").style.backgroundColor = 'rgb(251, 169, 199)'; 
    document.getElementById("locationsButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("badgeContainer").style.display = 'none'; 
    document.getElementById("profileContainer").style.display = 'none'; 
    document.getElementById("locationsContainer").style.display = 'none'; 
    // Hide all of the other containers 
}

function showBadges(){
    document.getElementById("badgeContainer").style.display = 'block'; 
    document.getElementById("profileButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("badgesButton").style.backgroundColor = 'rgb(251, 169, 199)'; 
    document.getElementById("postsButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("locationsButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("postContainer").style.display = 'none';
    document.getElementById("profileContainer").style.display = 'none';  
    document.getElementById("locationsContainer").style.display = 'none';
}

function showProfile(){
    document.getElementById("profileContainer").style.display = 'block';
    document.getElementById("profileButton").style.backgroundColor = 'rgb(251, 169, 199)'; 
    document.getElementById("badgesButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("postsButton").style.backgroundColor = 'rgb(255, 105, 160)';
    document.getElementById("locationsButton").style.backgroundColor = 'rgb(255, 105, 160)';  
    document.getElementById("postContainer").style.display = 'none'; 
    document.getElementById("badgeContainer").style.display = 'none'
    document.getElementById("locationsContainer").style.display = 'none';
}

function showLocations(){
    document.getElementById("locationsContainer").style.display = 'block'; 
    document.getElementById("locationsButton").style.backgroundColor = 'rgb(251, 169, 199)';
    document.getElementById("badgesButton").style.backgroundColor = 'rgb(255, 105, 160)'; 
    document.getElementById("postsButton").style.backgroundColor = 'rgb(255, 105, 160)';
    document.getElementById("profileButton").style.backgroundColor = 'rgb(255, 105, 160)';
    document.getElementById("badgeContainer").style.display = 'none'; 
    document.getElementById("profileContainer").style.display = 'none'; 
    document.getElementById("postContainer").style.display = 'none'; 
}