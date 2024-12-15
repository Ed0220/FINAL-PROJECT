const stockData = {
    "2024-12-01": 50,
    "2024-12-02": 30,
    "2024-12-03": 40,
    "2024-12-04": 20,
    "2024-12-05": 60,
};

let selectedDate = '';
const calendarGrid = document.getElementById('calendarGrid');
const monthYear = document.getElementById('monthYear');
const stockDisplay = document.getElementById('stockDisplay');
const orderSection = document.getElementById('orderSection');
const reviewSection = document.getElementById('reviewSection');
let currentDate = new Date();

// Render Calendar
function renderCalendar(date) {
    // Similar logic as before
}

// Show stock when date clicked
function displayStock(date) {
    // Similar logic as before
}

// Show order form
function showOrderSection() {
    // Similar logic as before
}

// Handle Review Button
document.getElementById('reviewButton').addEventListener('click', function() {
    // Similar logic as before
});

// Submit Order
document.getElementById('submitOrderButton').addEventListener('click', function() {
    const orderDetails = {
        date: selectedDate,
        quantity: document.getElementById('quantity').value,
        status: `Pending Delivery ${getDeliveryDate(selectedDate)}`,
    };

    localStorage.setItem("order", JSON.stringify(orderDetails));
    alert("Order submitted successfully!");
    window.location.href = "profile.html";
});

// Helper function to calculate delivery date
function getDeliveryDate(orderDate) {
    const date = new Date(orderDate);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split('T')[0];
}

// Initialize Calendar
renderCalendar(currentDate);
