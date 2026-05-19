const destinations = [
    {
        id: 1,
        name: "Saipan Beach",
        category: "beach",
        badge: "Beach Alternative",
        location: "San Jose",
        description: "Clear river waters perfect for picnics.",
        fee: "₱50",
        hours: "8am-5pm",
        image: "images/saipan.jpg"
    },
    {
        id: 2,
        name: "Nambalan River",
        category: "beach",
        badge: "Beach Alternative",
        location: "Mayantoc",
        description: "Relaxing river escape away from city stress.",
        fee: "₱30",
        hours: "7am-6pm",
        image: "images/nambalan.jpg"
    },
    {
        id: 3,
        name: "Bulsa River",
        category: "beach",
        badge: "Beach Alternative",
        location: "San Jose",
        description: "Pebble-lined shore with stunning scenic horizons.",
        fee: "Free",
        hours: "24/7",
        image: "images/bulsa.jpg"
    },
    {
        id: 4,
        name: "Lumina Resort",
        category: "beach",
        badge: "Beach Alternative",
        location: "Capas",
        description: "Riverside swimming setup for weekend gatherings.",
        fee: "₱100",
        hours: "8am-5pm",
        image: "images/lumina.jpg"
    },
    {
        id: 5,
        name: "River Park",
        category: "beach",
        badge: "Beach Alternative",
        location: "San Jose",
        description: "Local favorite river swimming spot with family huts.",
        fee: "₱20",
        hours: "6am-6pm",
        image: "images/sanjose.jpg"
    },
    {
        id: 6,
        name: "Monasterio de Tarlac",
        category: "mountain",
        badge: "Mountain",
        location: "San Jose",
        description: "Features the iconic colossal Risen Christ statue.",
        fee: "₱100",
        hours: "7am-7pm",
        image: "images/monasterio.jpg"
    },
    {
        id: 7,
        name: "Mt. Damas",
        category: "mountain",
        badge: "Mountain",
        location: "Camiling",
        description: "Challenging hike rewarding paths with sea of clouds.",
        fee: "₱200",
        hours: "Daytime",
        image: "images/damas.jpg"
    },
    {
        id: 8,
        name: "Mt. Telakawa",
        category: "mountain",
        badge: "Mountain",
        location: "Capas",
        description: "Scenic hiking trails defined by old volcanic terrain.",
        fee: "₱150",
        hours: "Daytime",
        image: "images/telakawa.jpg"
    },
    {
        id: 9,
        name: "Mt. Pinatubo",
        category: "mountain",
        badge: "Mountain",
        location: "Capas",
        description: "World-famous spectacular volcanic crater lake trek.",
        fee: "₱3000 (pkg)",
        hours: "5am-3pm",
        image: "images/pinatubo.jpg"
    },
    {
        id: 10,
        name: "Tarlac Eco-Park",
        category: "mountain",
        badge: "Mountain",
        location: "San Jose",
        description: "Lush highland greenery and fresh forest breezes.",
        fee: "₱50",
        hours: "8am-5pm",
        image: "images/ecopark.jpg"
    },
    {
        id: 11,
        name: "Canding Falls",
        category: "waterfall",
        badge: "Waterfall",
        location: "San Clemente",
        description: "Hidden natural pools built for refreshing cliff diving.",
        fee: "₱20",
        hours: "8am-4pm",
        image: "images/canding.jpg"
    },
    {
        id: 12,
        name: "Ubod Falls",
        category: "waterfall",
        badge: "Waterfall",
        location: "Camiling",
        description: "Majestic high cascade deep along mountain tracks.",
        fee: "₱50",
        hours: "Daytime",
        image: "images/ubod.jpg"
    },
    {
        id: 13,
        name: "Timangguyob",
        category: "waterfall",
        badge: "Waterfall",
        location: "San Clemente",
        description: "Unique bowl-shaped natural rock pool systems.",
        fee: "₱30",
        hours: "8am-4pm",
        image: "images/timang.jpg"
    },
    {
        id: 14,
        name: "Anzap Falls",
        category: "waterfall",
        badge: "Waterfall",
        location: "San Clemente",
        description: "Lush twin falls ecosystem located deep inside thick woods.",
        fee: "₱40",
        hours: "Daytime",
        image: "images/anzap.jpg"
    },
    {
        id: 15,
        name: "Tara Falls",
        category: "waterfall",
        badge: "Waterfall",
        location: "Mayantoc",
        description: "Quiet and completely secluded eco-escape sanctuary.",
        fee: "₱30",
        hours: "Daytime",
        image: "images/tara.jpg"
    },
    {
        id: 16,
        name: "Capas Shrine",
        category: "historical",
        badge: "Historical Site",
        location: "Capas",
        description: "Solemn memorial honoring historic WWII heroes.",
        fee: "Free",
        hours: "8am-5pm",
        image: "images/capas.jpg"
    },
    {
        id: 17,
        name: "Aquino Museum",
        category: "historical",
        badge: "Historical Site",
        location: "Tarlac City",
        description: "Preserving artifacts documenting Philippine democracy.",
        fee: "₱50",
        hours: "9am-4pm",
        image: "images/aquino.jpg"
    },
    {
        id: 18,
        name: "Bamban Museum",
        category: "historical",
        badge: "Historical Site",
        location: "Bamban",
        description: "Repository showcasing WWII relics and bunker tunnels.",
        fee: "₱100",
        hours: "9am-5pm",
        image: "images/bamban.jpg"
    },
    {
        id: 19,
        name: "Provincial Capitol",
        category: "historical",
        badge: "Historical Site",
        location: "Tarlac City",
        description: "Iconic hillside seat of local provincial heritage governance.",
        fee: "Free",
        hours: "Office Hrs",
        image: "images/capitol.jpg"
    },
    {
        id: 20,
        name: "St. Sebastian",
        category: "historical",
        badge: "Historical Site",
        location: "Tarlac City",
        description: "A beautiful historic Spanish-era architectural landmark.",
        fee: "Free",
        hours: "Daily",
        image: "images/church.jpg"
    },
    {
        id: 21,
        name: "Isdaan Village",
        category: "island",
        badge: "Island Environment",
        location: "Gerona",
        description: "Huge culture-themed floating restaurant and park layout.",
        fee: "Free (Entry)",
        hours: "10am-9pm",
        image: "images/isdaan.jpg"
    },
    {
        id: 22,
        name: "TRP Eco-Lake",
        category: "island",
        badge: "Island Environment",
        location: "San Jose",
        description: "Inland lake ecosystem ideal for family kayaking rentals.",
        fee: "₱50",
        hours: "8am-5pm",
        image: "images/trp-lake.jpg"
    },
    {
        id: 23,
        name: "Goshen Water Resort",
        category: "island",
        badge: "Island Environment",
        location: "Bamban",
        description: "Stunning Romanesque themed structural pools in the hills.",
        fee: "₱150",
        hours: "11am-8pm",
        image: "images/goshen.jpg"
    },
    {
        id: 24,
        name: "Market Hub",
        category: "food",
        badge: "Food Destination",
        location: "Camiling",
        description: "Home to the famous local crispy Chicharon Camiling.",
        fee: "Free",
        hours: "6am-6pm",
        image: "images/camiling.jpg"
    },
    {
        id: 25,
        name: "Anao Hub",
        category: "food",
        badge: "Food Destination",
        location: "Anao",
        description: "Unique farm spots serving regional Ylang-ylang treats.",
        fee: "Free",
        hours: "8am-5pm",
        image: "images/anao.jpg"
    },
    {
        id: 26,
        name: "Food Strip",
        category: "food",
        badge: "Food Destination",
        location: "Tarlac City",
        description: "Vibrant spaces offering authentic local treats.",
        fee: "Free",
        hours: "Evening",
        image: "images/citystrip.jpg"
    },
    {
        id: 27,
        name: "Victoria Hub",
        category: "food",
        badge: "Food Destination",
        location: "Victoria",
        description: "Farms side stalls selling native desserts and fresh buko pies.",
        fee: "Free",
        hours: "7am-6pm",
        image: "images/victoria-bukid.jpg"
    },
    {
        id: 28,
        name: "Kart City",
        category: "adventure",
        badge: "Adventure",
        location: "Tarlac City",
        description: "High-octane outdoor go-kart racing action.",
        fee: "₱400",
        hours: "1pm-10pm",
        image: "images/kart.jpg"
    },
    {
        id: 29,
        name: "Bulsa Kayak",
        category: "adventure",
        badge: "Adventure",
        location: "San Jose",
        description: "Thrilling white-water river kayaking courses.",
        fee: "₱500",
        hours: "8am-4pm",
        image: "images/kayak.jpg"
    },
    {
        id: 30,
        name: "Rec Park",
        category: "adventure",
        badge: "Adventure",
        location: "San Jose",
        description: "Expansive 78-hectare complex for extreme ATV trail drives.",
        fee: "₱600",
        hours: "8am-5pm",
        image: "images/recpark.jpg"
    },
    {
        id: 31,
        name: "Capas ATV",
        category: "adventure",
        badge: "Adventure",
        location: "Capas",
        description: "Rugged 4x4 volcanic off-road paths around Pinatubo trails.",
        fee: "₱1500",
        hours: "7am-3pm",
        image: "images/atv.jpg"
    },
    {
        id: 32,
        name: "Zipline",
        category: "adventure",
        badge: "Adventure",
        location: "Camp Aquino",
        description: "Exhilarating high aerial views across valley trails.",
        fee: "₱200",
        hours: "9am-4pm",
        image: "images/zip.jpg"
    }
];

let currentFilteredList = [...destinations];
let activeLightboxIndex = 0;
let selectedCategory = "all";
let searchString = "";

// Element Selectors
const spotsContainer = document.getElementById("spotsContainer");
const destinationSearch = document.getElementById("destinationSearch");
const categoryFilters = document.getElementById("categoryFilters");

const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

function renderDestinations() {
    if (!spotsContainer) return; 
    spotsContainer.innerHTML = "";
    
    if (currentFilteredList.length === 0) {
        spotsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-circle text-muted fs-1"></i>
                <p class="text-muted mt-2 fs-5">No destinations found matching your search variables.</p>
            </div>`;
        return;
    }

    currentFilteredList.forEach((spot) => {
        const cardCol = document.createElement("div");
        cardCol.className = "col-lg-4 col-md-6 col-sm-12 mb-4";
        cardCol.innerHTML = `
            <div class="card h-100 shadow-sm spot-card border-0">
                <img src="${spot.image}" class="card-img-top" alt="${spot.name}" data-id="${spot.id}" style="cursor:pointer;">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-primary text-capitalize px-3 py-1">${spot.category}</span>
                        <small class="text-muted fw-semibold"><i class="bi bi-geo-alt-fill text-danger"></i> ${spot.location}</small>
                    </div>
                    <h5 class="card-title fw-bold text-tarlac-blue mb-2">${spot.name}</h5>
                    <p class="card-text text-muted small flex-grow-1">${spot.description.substring(0, 110)}...</p>
                    <ul class="list-unstyled small border-top pt-2 text-muted mb-3">
                        <li><strong>Entrance Fee:</strong> ${spot.fee}</li>
                        <li><strong>Hours:</strong> ${spot.hours}</li>
                    </ul>
                    <button class="btn btn-primary w-100 bg-tarlac-blue border-0 rounded-pill py-2 view-details-btn" data-id="${spot.id}">
                        View Details
                    </button>
                </div>
            </div>`;
        spotsContainer.appendChild(cardCol);
    });

    attachCardListeners();
}

function executeCombinedFilters() {
    currentFilteredList = destinations.filter(spot => {
        const matchesCategory = (selectedCategory === "all" || spot.category === selectedCategory);
        const cleanQuery = searchString.toLowerCase().trim();
        const matchesSearch = (
            spot.name.toLowerCase().includes(cleanQuery) ||
            spot.location.toLowerCase().includes(cleanQuery) ||
            spot.category.toLowerCase().includes(cleanQuery)
        );
        return matchesCategory && matchesSearch;
    });
    renderDestinations();
}

if (destinationSearch) {
    destinationSearch.addEventListener("input", (e) => {
        searchString = e.target.value;
        executeCombinedFilters();
    });
}

if (categoryFilters) {
    categoryFilters.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav-link")) {
            categoryFilters.querySelectorAll(".nav-link").forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            selectedCategory = e.target.getAttribute("data-category");
            executeCombinedFilters();
        }
    });
}

function openDetailsModal(id) {
    const spot = destinations.find(d => d.id === parseInt(id));
    if (!spot) return;

    document.getElementById("modalTitle").innerText = spot.name;
    
    const bodyContainer = document.getElementById("modalBody");
    bodyContainer.innerHTML = `
        <img src="${spot.image}" class="img-fluid rounded w-100 mb-3 shadow-sm" style="max-height:350px; object-fit:cover;" alt="${spot.name}">
        <div class="row g-3">
            <div class="col-12">
                <p class="lead text-muted">${spot.description}</p>
            </div>
            <div class="col-md-6">
                <h6 class="fw-bold text-tarlac-blue mb-1"><i class="bi bi-geo-alt-fill"></i> Location:</h6>
                <p class="small text-secondary">${spot.location}</p>
            </div>
            <div class="col-md-6">
                <h6 class="fw-bold text-tarlac-blue mb-1"><i class="bi bi-activity"></i> Core Activities:</h6>
                <p class="small text-secondary">${spot.activities || 'Sightseeing, Exploring'}</p>
            </div>
            <div class="col-md-4">
                <h6 class="fw-bold text-tarlac-blue mb-1"><i class="bi bi-calendar-check"></i> Best Time to Visit:</h6>
                <p class="small text-secondary">${spot.bestTime || 'Daytime'}</p>
            </div>
            <div class="col-md-4">
                <h6 class="fw-bold text-tarlac-blue mb-1"><i class="bi bi-wallet2"></i> Entrance Fee Structure:</h6>
                <p class="small text-secondary">${spot.fee}</p>
            </div>
            <div class="col-md-4">
                <h6 class="fw-bold text-tarlac-blue mb-1"><i class="bi bi-clock"></i> Operating Hours:</h6>
                <p class="small text-secondary">${spot.hours}</p>
            </div>
            <div class="col-12 border-top pt-2">
                <h6 class="fw-bold text-warning-emphasis mb-1"><i class="bi bi-lightbulb-fill"></i> Essential Local Travel Tips:</h6>
                <p class="small text-secondary mb-0">${spot.tips || 'Respect local rules and clean up after yourself.'}</p>
            </div>
        </div>`;

    const targetModalElement = document.getElementById('destinationModal');
    if (targetModalElement) {
        const dynamicBootstrapInstance = new bootstrap.Modal(targetModalElement);
        dynamicBootstrapInstance.show();
    }
}

function activateLightbox(id) {
    activeLightboxIndex = currentFilteredList.findIndex(d => d.id === parseInt(id));
    if (activeLightboxIndex === -1) return;
    updateLightboxUI();
    if (lightboxOverlay) lightboxOverlay.style.display = "flex";
}

function updateLightboxUI() {
    if (!lightboxImg || !lightboxCaption) return;
    const activeTargetData = currentFilteredList[activeLightboxIndex];
    lightboxImg.src = activeTargetData.image;
    lightboxCaption.innerHTML = `<strong>${activeTargetData.name}</strong> - ${activeTargetData.location} (${activeTargetData.category.toUpperCase()})`;
}

if (lightboxClose) lightboxClose.addEventListener("click", () => lightboxOverlay.style.display = "none");
if (lightboxNext) {
    lightboxNext.addEventListener("click", () => {
        if (currentFilteredList.length === 0) return;
        activeLightboxIndex = (activeLightboxIndex + 1) % currentFilteredList.length;
        updateLightboxUI();
    });
}
if (lightboxPrev) {
    lightboxPrev.addEventListener("click", () => {
        if (currentFilteredList.length === 0) return;
        activeLightboxIndex = (activeLightboxIndex - 1 + currentFilteredList.length) % currentFilteredList.length;
        updateLightboxUI();
    });
}

function attachCardListeners() {
    document.querySelectorAll(".view-details-btn").forEach(btn => {
        btn.addEventListener("click", (e) => openDetailsModal(e.target.getAttribute("data-id")));
    });
    document.querySelectorAll(".spot-card img").forEach(img => {
        img.addEventListener("click", (e) => activateLightbox(e.target.getAttribute("data-id")));
    });
}

// Initialize on execution load
document.addEventListener("DOMContentLoaded", () => {
    renderDestinations();
});