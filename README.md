<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Visualization Microsite</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <!-- Burger Menu -->
    <nav class="burger-menu">
        <button id="menu-toggle">☰</button>
        <ul id="menu-items" class="hidden">
            <li><a href="#bar-chart">Bar Chart</a></li>
            <li><a href="#line-chart">Line Chart</a></li>
            <li><a href="#pie-chart">Pie Chart</a></li>
        </ul>
    </nav>

    <!-- Main Content -->
    <div class="container">
        <canvas id="bar-chart" width="400" height="200"></canvas>
        <canvas id="line-chart" width="400" height="200"></canvas>
        <canvas id="pie-chart" width="400" height="200"></canvas>
    </div>

    <!-- Background -->
    <div class="background"></div>

    <!-- JavaScript -->
    <script>
        // Burger Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const menuItems = document.getElementById('menu-items');
        menuToggle.addEventListener('click', () => {
            menuItems.classList.toggle('hidden');
        });

        // Bar Chart
        new Chart(document.getElementById('bar-chart'), {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                }
            }
        });

        // Line Chart
        new Chart(document.getElementById('line-chart'), {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Sales',
                    data: [65, 59, 80, 81, 56, 55],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
            }
        });

        // Pie Chart
        new Chart(document.getElementById('pie-chart'), {
            type: 'pie',
            data: {
                labels: ['Red', 'Blue', 'Yellow'],
                datasets: [{
                    label: 'Population',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
            }
        });
    </script>
</body>
</html>
