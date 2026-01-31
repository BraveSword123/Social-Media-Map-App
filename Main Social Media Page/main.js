// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Navbar button active state
    const group = document.querySelector("#navbarContainer"); 
    const buttons = group.querySelectorAll(".navbarElement"); 

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active")); 
            btn.classList.add("active"); 
        }); 
    });

    // Show/hide sections
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
        document.getElementById("badgeContainer").style.display = 'none';
        document.getElementById("locationsContainer").style.display = 'none';
    }

    function showLocations(){
        document.getElementById("locationsContainer").style.display = 'block'; 
        document.getElementById("badgeContainer").style.display = 'none'; 
        document.getElementById("profileContainer").style.display = 'none'; 
        document.getElementById("postContainer").style.display = 'none'; 
    }

    // Expose these functions to global so onclick in HTML works
    window.showPosts = showPosts;
    window.showBadges = showBadges;
    window.showProfile = showProfile;
    window.showLocations = showLocations;

    // Badge popup logic
    const popup = document.getElementById("badgePopup");
    const popupImg = document.getElementById("popupBadgeImage");
    const popupText = document.getElementById("popupBadgeText");

    function showBadgePopup(badgeTitle, badgeImageSrc) {
        popupImg.src = badgeImageSrc;
        popupText.textContent = `You earned the "${badgeTitle}" badge!`;
        popup.classList.add("show");

        // Hide after 3 seconds
        const timeout = setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);

        // Click to hide immediately
        popup.addEventListener("click", () => {
            clearTimeout(timeout);
            popup.classList.remove("show");
        }, { once: true });
    }

    // Earn badge in the badge container
    function earnBadge(badgeIndex) {
        const badges = document.querySelectorAll("#badgeContainer .badge");
        if (badges[badgeIndex]) {
            badges[badgeIndex].classList.add("earned");
        }
    }

    // Expose functions globally for testing / future triggers
    window.showBadgePopup = showBadgePopup;
    window.earnBadge = earnBadge;

    // Example: Clicking Create Post triggers first badge
    const createPostButton = document.getElementById("createPostButton");
    if (createPostButton) {
        createPostButton.addEventListener("click", () => {
            showBadgePopup("Animal Rescuer", "./Images/bunny_placeholder.png");
            earnBadge(0); // first badge
        });
    }

});
