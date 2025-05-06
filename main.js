function initializeModal() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");
    const modalDescription = document.createElement("p"); // Create a new paragraph for the description
    const closeModal = document.querySelector(".close"); 
    modalCaption.insertAdjacentElement("afterend", modalDescription); // Add it below the caption

    document.querySelectorAll(".openModal").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the image source, caption, and description
            const imgSrc = this.querySelector("img").src;
            const caption = this.querySelector("p").textContent;
            const description = this.getAttribute("data-description");

            // Set modal content
            modalImage.src = imgSrc;
            modalCaption.textContent = caption;
            modalDescription.textContent = description; // Add the description

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