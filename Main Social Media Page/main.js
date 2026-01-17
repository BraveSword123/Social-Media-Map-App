function showPosts(){
    document.getElementById("postContainer").style.display = 'flex'; 
    document.getElementById("badgeContainer").style.display = 'none'; 
    // Hide all of the other containers 
}

function showBadges(){
    document.getElementById("badgeContainer").style.display = 'block'; 
    document.getElementById("postContainer").style.display = 'none'; 
}