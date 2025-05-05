// Function to initialize modal functionality
function initializeModal() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");
    const closeModal = document.querySelector(".close");

    // Check if modal elements exist
    if (!modal || !modalImage || !modalCaption || !closeModal) {
        console.error("Modal elements not found in the DOM.");
        return;
    }

    document.querySelectorAll(".openModal").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the image source and caption
            const imgSrc = this.querySelector("img").src;
            const caption = this.querySelector("p").textContent;

            // Set modal content
            modalImage.src = imgSrc;
            modalCaption.textContent = caption;

            // Show the modal
            modal.style.display = "block";
        });
    });

    // Close the modal when the close button (X) is clicked
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close the modal when the Esc key is pressed
    window.addEventListener("keydown", event => {
        if (event.key === "Escape" || event.key === "Esc") { // Support older browsers with "Esc"
            modal.style.display = "none";
        }
    });
}


// Initialize modal functionality on the first page load
initializeModal();