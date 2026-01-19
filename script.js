const ctx = document.getElementById('fraudChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['CASH-IN', 'CASH-OUT', 'DEBIT', 'PAYMENT', 'TRANSFER'],
        datasets: [{
            label: 'Fraud Count',
            data: [0, 4116, 0, 0, 4097],
            backgroundColor: '#4f46e5'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
