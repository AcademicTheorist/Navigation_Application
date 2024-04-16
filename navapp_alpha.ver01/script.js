const locations = {
    classrooms: ["Classroom A", "Classroom B", "Classroom C"],
    facilities: ["Cafeteria", "Library", "Office"],
    offices: ["Director", "Principal", "Information"]
};

const locationSelect = document.getElementById("locationSelect");
for (const category in locations) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = category.charAt(0).toUpperCase() + category.slice(1);
    locations[category].forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        optgroup.appendChild(option);
    });
    locationSelect.appendChild(optgroup);
}
//For categorization in menu

locationSelect.addEventListener("change", function() {
    const selectedLocation = this.value;
    const frame = document.createElement("div");
    frame.style.position = "fixed";
    frame.style.top = "50%";
    frame.style.left = "50%";
    frame.style.transform = "translate(-50%, -50%)";
    frame.style.backgroundImage = `url('path_to_image_for_${selectedLocation}.jpg')`;
    frame.style.width = "80%";
    frame.style.height = "80%";
    frame.style.backgroundSize = "cover";
    frame.style.filter = "blur(10px)";
    document.body.appendChild(frame);
});
//For display frame with image

locationSelect.addEventListener("change", function() {
    const selectedLocation = this.value;
    const legendsSection = document.createElement("div");
    legendsSection.innerHTML = `<h2>Legends and Notes for ${selectedLocation}</h2>
    <!-- Add legends and notes dynamically -->
    `;
    document.body.appendChild(legendsSection);
});
//Legends and notes display