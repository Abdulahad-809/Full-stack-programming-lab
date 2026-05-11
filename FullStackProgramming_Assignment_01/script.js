const yearTarget = document.querySelector("[data-year]");

if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-search-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const query = form.querySelector("input")?.value.trim() || "";
        window.alert(query ? `Search requested for: ${query}` : "Enter a search term.");
    });
});

document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput = form.querySelector("input[type='email']");
        if (!emailInput || !emailInput.value.trim()) {
            window.alert("Please enter an email address.");
            return;
        }

        window.alert(`Subscribed: ${emailInput.value.trim()}`);
        form.reset();
    });
});

document.querySelectorAll("[data-contact-form], [data-address-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.reportValidity()) {
            return;
        }

        const message = form.matches("[data-contact-form]")
            ? "Your message has been submitted."
            : "Address updated successfully.";

        window.alert(message);
    });
});

const track = document.querySelector("[data-carousel-track]");
let rotation = 0;

document.querySelectorAll("[data-carousel]").forEach((button) => {
    button.addEventListener("click", () => {
        if (!track) {
            return;
        }

        rotation += button.dataset.carousel === "next" ? -1 : 1;
        track.style.transform = `translateX(${rotation * 8}px)`;
    });
});
