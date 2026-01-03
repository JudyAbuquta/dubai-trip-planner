document.addEventListener("DOMContentLoaded", () => {
  const tripBoard = document.getElementById("tripBoard");
  const emptyMsg = document.getElementById("emptyMsg");

  function renderTrip() {
    const trip = JSON.parse(localStorage.getItem("tripPlan")) || [];
    tripBoard.innerHTML = "";

    if (trip.length === 0) {
      emptyMsg.style.display = "block";
      return;
    } else {
      emptyMsg.style.display = "none";
    }

    trip.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("trip-card");

      // Random height for variety (Pinterest vibe)
      const randomHeight = 150 + Math.floor(Math.random() * 150); 
      card.style.height = randomHeight + "px";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-label label-${item.type}">${item.type}</div>
        <button class="delete-btn">X</button>
        <p>${item.name}</p>
      `;

      card.querySelector(".delete-btn").addEventListener("click", () => {
        trip.splice(index, 1);
        localStorage.setItem("tripPlan", JSON.stringify(trip));
        renderTrip();
      });

      tripBoard.appendChild(card);
    });
  }

  renderTrip();
});