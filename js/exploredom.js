
// This function will execute AFTER the entire page is loaded.
window.onload = function() {

    let myHeader = document.querySelector(".ouch");

    // Listen for an event. Listen for clicks on the myHeader element.
    myHeader.addEventListener("click", function() {
        alert("You're already on this page!");
    })

}
