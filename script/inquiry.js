const availableLocations = [
    { name: "Saipan Beach", location: "San Jose" },
    { name: "Nambalan River", location: "Mayantoc" },
    { name: "Bulsa River", location: "San Jose" },
    { name: "Lumina Resort", location: "Capas" },
    { name: "River Park", location: "San Jose" },
    { name: "Monasterio de Tarlac", location: "San Jose" },
    { name: "Mt. Damas", location: "Camiling" },
    { name: "Mt. Telakawa", location: "Capas" },
    { name: "Mt. Pinatubo", location: "Capas" },
    { name: "Tarlac Eco-Park", location: "San Jose" },
    { name: "Canding Falls", location: "San Clemente" },
    { name: "Ubod Falls", location: "Camiling" },
    { name: "Timangguyob", location: "San Clemente" },
    { name: "Anzap Falls", location: "San Clemente" },
    { name: "Tara Falls", location: "Mayantoc" },
    { name: "Capas Shrine", location: "Capas" },
    { name: "Aquino Museum", location: "Tarlac City" },
    { name: "Bamban Museum", location: "Bamban" },
    { name: "Provincial Capitol", location: "Tarlac City" },
    { name: "St. Sebastian", location: "Tarlac City" },
    { name: "Isdaan Village", location: "Gerona" },
    { name: "TRP Eco-Lake", location: "San Jose" },
    { name: "Goshen Water Resort", location: "Bamban" },
    { name: "Market Hub", location: "Camiling" },
    { name: "Anao Hub", location: "Anao" },
    { name: "Food Strip", location: "Tarlac City" },
    { name: "Victoria Hub", location: "Victoria" },
    { name: "Kart City", location: "Tarlac City" },
    { name: "Bulsa Kayak", location: "San Jose" },
    { name: "Rec Park", location: "San Jose" },
    { name: "Capas ATV", location: "Capas" },
    { name: "Zipline", location: "Camp Aquino" }
];

function populateDropdownOptions() {
    const selectDestinationDropdown = document.getElementById("formDestination");
    if (!selectDestinationDropdown) return;
    
    availableLocations.forEach(spot => {
        const option = document.createElement("option");
        option.value = spot.name;
        option.textContent = `${spot.name} (${spot.location})`;
        selectDestinationDropdown.appendChild(option);
    });
}

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        let isFormValid = true;
        const nameEl = document.getElementById("formName");
        const emailEl = document.getElementById("formEmail");
        const contactEl = document.getElementById("formContact");
        const destEl = document.getElementById("formDestination");
        const dateEl = document.getElementById("formDate");
        const visitorsEl = document.getElementById("formVisitors");
        const msgEl = document.getElementById("formMessage");

        [nameEl, emailEl, contactEl, destEl, dateEl, visitorsEl, msgEl].forEach(item => {
            if (item) item.classList.remove("is-invalid", "is-valid");
        });

        if (nameEl && nameEl.value.trim() === "") { nameEl.classList.add("is-invalid"); isFormValid = false; } 
        else if (nameEl) { nameEl.classList.add("is-valid"); }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailEl && !emailRegex.test(emailEl.value.trim())) { emailEl.classList.add("is-invalid"); isFormValid = false; } 
        else if (emailEl) { emailEl.classList.add("is-valid"); }

        const numbersOnlyRegex = /^\d+$/;
        if (contactEl && !numbersOnlyRegex.test(contactEl.value.trim())) { contactEl.classList.add("is-invalid"); isFormValid = false; } 
        else if (contactEl) { contactEl.classList.add("is-valid"); }

        if (destEl && destEl.value === "") { destEl.classList.add("is-invalid"); isFormValid = false; } 
        else if (destEl) { destEl.classList.add("is-valid"); }

        if (dateEl && dateEl.value === "") { dateEl.classList.add("is-invalid"); isFormValid = false; } 
        else if (dateEl) { dateEl.classList.add("is-valid"); }

        if (visitorsEl && (parseInt(visitorsEl.value) < 1 || visitorsEl.value === "")) { visitorsEl.classList.add("is-invalid"); isFormValid = false; } 
        else if (visitorsEl) { visitorsEl.classList.add("is-valid"); }

        if (msgEl && msgEl.value.trim() === "") { msgEl.classList.add("is-invalid"); isFormValid = false; } 
        else if (msgEl) { msgEl.classList.add("is-valid"); }

        if (isFormValid) {
            alert(`Success! Thank you ${nameEl.value}. Your booking request for ${destEl.value} has been logged.`);
            this.reset();
            [nameEl, emailEl, contactEl, destEl, dateEl, visitorsEl, msgEl].forEach(item => {
                if (item) item.classList.remove("is-valid");
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    populateDropdownOptions();
});