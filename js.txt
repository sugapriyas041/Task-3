// Example JavaScript for handling form submission via AJAX
document.getElementById('addItemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(this);

    // Use AJAX to send data to the server
    // Implement this based on your backend architecture (e.g., using fetch or jQuery.ajax)
    // ...

    // Update the UI or show a success message
    // ...
});
// Example JavaScript for updating the table
function updateTable(data) {
    var tableBody = document.querySelector('.table tbody');
    tableBody.innerHTML = '';

    data.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + item.name + '</td><td>' + item.quantity + '</td>';
        tableBody.appendChild(row);
    });
}

// Example data (replace this with actual data from your server)
var inventoryData = [
    { name: 'Item 1', quantity: 10 },
    { name: 'Item 2', quantity: 5 },
    // Add more items as needed
];

// Initial table update
updateTable(inventoryData);
