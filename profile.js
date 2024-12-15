// Function to handle logout
function logout() {
    // Clear session or localStorage (or cookies depending on how you store user data)
    localStorage.removeItem('userToken'); // or sessionStorage.clear() if using sessionStorage

    // Redirect to the login page
    window.location.href = 'login.html';
}

// Function to confirm and delete the account
function confirmDeleteAccount() {
    // Show a confirmation message before deletion
    const confirmation = confirm("Are you sure you want to delete your account? This action is irreversible.");

    if (confirmation) {
        deleteAccount();
    }
}

// Function to delete account (e.g., make an API call to the backend)
function deleteAccount() {
    // Make an API call to the backend to delete the user account (replace with your actual API endpoint)
    fetch('https://your-api.com/delete-account', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // Include any authentication token if needed (e.g., from localStorage or session)
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
        }
    })
    .then(response => {
        if (response.ok) {
            // On successful account deletion, redirect to login page
            alert("Your account has been deleted.");
            window.location.href = 'login.html';
        } else {
            // Handle any errors (e.g., if deletion fails)
            alert("Error deleting account. Please try again later.");
        }
    })
    .catch(error => {
        // Handle network or other errors
        console.error('Error:', error);
        alert("An error occurred. Please try again later.");
    });
}
