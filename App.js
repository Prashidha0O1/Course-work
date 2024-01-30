// Get button element 
function subscribeAlert() {
    alert("Thank you for subscribing!"); 
  }
function toggleContent() {
    var additionalContent = document.getElementById("additional-content");
    var readMoreButton = document.getElementById("read-more");

    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
        readMoreButton.innerHTML = "Read less";
    } else {
        additionalContent.style.display = "none";
        readMoreButton.innerHTML = "Read more";
    }
}

function subscribeAlert() {
    alert("Thank you for subscribing!"); 
    } 