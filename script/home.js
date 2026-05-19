document.addEventListener("DOMContentLoaded", () => {
    const filterContainer = document.getElementById("spotCategories");
    const cards = document.querySelectorAll("#spotsContainer > div[data-category]");

    if (!filterContainer || cards.length === 0) return;

    filterContainer.addEventListener("click", (e) => {

        const clickedButton = e.target.closest(".nav-link");
        if (!clickedButton) return;

        filterContainer.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("active"));
        clickedButton.classList.add("active");

        const selectedCategory = clickedButton.getAttribute("data-category");

        cards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");

            if (selectedCategory === "all" || cardCategory === selectedCategory) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});