document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('expForm');
    form.addEventListener('submit', addExpense);
});

function addExpense(e) {
    e.preventDefault();
    const type = document.getElementById('type').value;
    const productName = document.getElementById('productName').value;
    const addedBy = document.getElementById('addedBy').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;

    const newExpense = {
        type,
        productName,
        addedBy,
        date,
        amount
    };

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(newExpense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}

function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.splice(index, 1);  // Remove the expense at the given index
    localStorage.setItem('expenses', JSON.stringify(expenses));  // Update localStorage
    displayExpenses();  // Refresh the displayed list of expenses
}


function displayExpenses() {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const tableBody = document.getElementById('expenseTable'); // Target the table body
    tableBody.innerHTML = ''; // Clear existing rows

    expenses.forEach((expense, index) => {
        const row = tableBody.insertRow(index); // Insert a new row at the end of the table
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.innerHTML = expense.type;
        cell2.innerHTML = expense.productName;
        cell3.innerHTML = expense.date;
        cell4.innerHTML = expense.amount;
        cell5.innerHTML = `<button onclick="deleteExpense(${index})">Delete</button>`; // For the "Options" column
    });
}
