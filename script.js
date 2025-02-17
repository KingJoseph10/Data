document.addEventListener("DOMContentLoaded", function() {
    // Public Opinion Chart
    const ctx1 = document.getElementById("spideyChart").getContext("2d");
    new Chart(ctx1, {
        type: "pie",
        data: {
            labels: ["Love Spider-Man", "Neutral", "Think He's a Menace"],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: ["LightSteelBlue", "gray", "LightSlateGray"]
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Villains Chart
    const ctx2 = document.getElementById("villainChart").getContext("2d");
    new Chart(ctx2, {
        type: "pie",
        data: {
            labels: ["Green Goblin", "Doctor Octopus", "Venom", "Sandman", "Lizard"],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: ["LightSteelBlue", "gray", "LightSlateGray", "Silver", "SlateGray"]
                
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Spider-Man Abilities Chart
    const ctx3 = document.getElementById("abilitiesChart").getContext("2d");
    new Chart(ctx3, {
        type: "pie",
        data: {
            labels: ["Super Strength", "Spider-Sense", "Wall-Crawling", "Web-Swinging", "Agility"],
            datasets: [{
                data: [30, 25, 20, 15, 10],
                backgroundColor: ["LightSteelBlue", "gray", "LightSlateGray", "Silver", "SlateGray"]
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Spider-Man Best Rescues Chart
    const ctx4 = document.getElementById("rescueChart").getContext("2d");
    new Chart(ctx4, {
        type: "pie",
        data: {
            labels: ["Stopping Robberies", "Saving People from Falling", "Stopping Car Accidents", "Rescuing Hostages", "Preventing Train Derailments"],
            datasets: [{
                data: [35, 20, 15, 15, 15],
                backgroundColor: ["LightSteelBlue", "gray", "LightSlateGray", "Silver", "SlateGray"]
            }]
        },
        options: {
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
});
