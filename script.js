document.getElementById("preferenceForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const data = {
    preferences: {
      green_space: parseInt(this.green_space.value),
      nightlife: parseInt(this.nightlife.value),
      family_friendly: parseInt(this.family_friendly.value)
    },
    weights: {
      green_space: parseInt(this.green_space.value),
      nightlife: parseInt(this.nightlife.value),
      family_friendly: parseInt(this.family_friendly.value)
    }
  };

  const res = await fetch("http://localhost:5000/match", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  document.getElementById("result").innerText = "Best Match: " + result.name;

  document.getElementById("map-container").innerHTML = `
    <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=${result.lon - 0.01},${result.lat - 0.01},${result.lon + 0.01},${result.lat + 0.01}&layer=mapnik&marker=${result.lat},${result.lon}" allowfullscreen></iframe>
  `;
});
