const priceSlider = document.getElementById("priceSlider");
const minPriceLabel = document.querySelector(".slider-container p:first-child");
const maxPriceLabel = document.querySelector(".slider-container p:last-child");
const cards = document.querySelectorAll(".card");

priceSlider.addEventListener("input", function() {
    const selectedPrice = parseInt(this.value);
    minPriceLabel.textContent = `Minimum: $0`;
    maxPriceLabel.textContent = `Maximum: $${selectedPrice}`;

    cards.forEach(card => {
        const cardPrice = parseInt(card.dataset.price);

        if (cardPrice <= selectedPrice) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
