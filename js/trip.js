document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-trip").forEach(button => {
    button.addEventListener("click", () => {

      const item = {
        name: button.dataset.name,
        type: button.dataset.type,
        image: button.dataset.image
      };

      let trip = JSON.parse(localStorage.getItem("tripPlan")) || [];

      if (!trip.some(t => t.name === item.name)) {
        trip.push(item);
        localStorage.setItem("tripPlan", JSON.stringify(trip));
        alert("Added to Trip ✨");
      }
    });
  });
});