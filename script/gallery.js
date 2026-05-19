document.addEventListener("DOMContentLoaded", () => {

    const galleryImages = Array.from(document.querySelectorAll(".spot-card .card-img-top"));
    
    // DOM Element Maps for Lightbox Interface
    const lightbox = document.getElementById("galleryLightbox");
    const mainImg = document.getElementById("lightboxMainImage");
    const captionBox = document.getElementById("lightboxCaptionBox");
    const closeBtn = document.getElementById("lightboxCloseBtn");
    const prevBtn = document.getElementById("lightboxPrevBtn");
    const nextBtn = document.getElementById("lightboxNextBtn");

    let currentTrackIndex = 0;

    function syncLightboxStage(index) {
        const targetImg = galleryImages[index];
        const cardBody = targetImg.closest(".card").querySelector(".card-body");
        
        const category = cardBody.querySelector(".badge-category").textContent;
        const title = cardBody.querySelector(".card-title").textContent;
        const description = cardBody.querySelector(".card-text").textContent;

        mainImg.src = targetImg.src;
        mainImg.alt = targetImg.alt;

        captionBox.innerHTML = `
            <h5 class="fw-bold text-warning mb-1">${title}</h5>
            <div class="mb-2">
                <span class="badge bg-tarlac-blue text-uppercase px-2 py-1" style="font-size: 0.7rem !important;">
                    ${category}
                </span>
            </div>
            <p class="text-light small mb-0">${description}</p>
        `;
    }

    function openLightbox(index) {
        currentTrackIndex = index;
        syncLightboxStage(currentTrackIndex);
        lightbox.classList.remove("d-none");
        lightbox.classList.add("d-flex");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("d-flex");
        lightbox.classList.add("d-none");
        document.body.style.overflow = ""; 
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index));
    });

    closeBtn.addEventListener("click", closeLightbox);
    
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentTrackIndex = (currentTrackIndex + 1) % galleryImages.length;
        syncLightboxStage(currentTrackIndex);
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentTrackIndex = (currentTrackIndex - 1 + galleryImages.length) % galleryImages.length;
        syncLightboxStage(currentTrackIndex);
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("d-none")) {
            if (e.key === "ArrowRight") nextBtn.click();
            if (e.key === "ArrowLeft") prevBtn.click();
            if (e.key === "Escape") closeLightbox();
        }
    });
});