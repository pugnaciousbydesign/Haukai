// CONTACT FORM
// Show message function
function showMessage() {
    alert('We have received your message and will be in contact shortly!');
    // Clear the form after showing the message
    document.getElementById('feedback-form').reset();
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Get all the navigation links
    var navLinks = document.querySelectorAll('nav ul li a');

    // Iterate over each link and check if it matches the current page URL
    for (var i = 0; i < navLinks.length; i++) {
        var linkUrl = navLinks[i].getAttribute('href');

        // Add the active class if the link URL matches the current page URL
        if (currentPageUrl.includes(linkUrl)) {
            navLinks[i].classList.add('active');
            break; // Exit the loop after adding the active class
        }
    }

    // Get the feedback form
    var feedbackForm = document.getElementById('feedback-form');

    // Add a submit event listener to the form
    feedbackForm.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Call the showMessage function
        showMessage();
    });
});

// RESERVATIONS FORM
// Updated showReservationMessage function
function showReservationMessage() {
    alert('Your reservation has been booked! We look forward to welcoming you.');
    // You can add additional logic here, such as clearing the form or redirecting to a thank-you page.
}

// Updated form submission function
function submitReservationForm() {
    // Validate date and time here
    var selectedDate = document.getElementById('date').value;
    var selectedTime = document.getElementById('time').value;

    // Validate day (Wednesday to Sunday) and time (4:00 PM to 10:00 PM)
    var selectedDateTime = new Date(selectedDate + ' ' + selectedTime);
    var selectedDay = selectedDateTime.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
    var selectedHours = selectedDateTime.getHours();

    if (selectedDay >= 3 && selectedDay <= 6 && selectedHours >= 16 && selectedHours <= 22) {
        // Date and time are within the allowed range, proceed with form submission
        showReservationMessage();
        // You can add additional logic here, such as clearing the form or submitting to the server.
    } else {
        alert('Please select a valid date and time for reservations (Wednesday to Sunday, 4:00 PM to 10:00 PM).');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Get the date input element
    var dateInput = document.getElementById('date');

    // Set the minimum date to today
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    dateInput.setAttribute('min', today);

    // Set the maximum date
    dateInput.setAttribute('max', '2024-12-31');

    // Add an event listener for when the date changes
    dateInput.addEventListener('input', function () {
        // Get the selected date
        var selectedDate = new Date(dateInput.value);

        // Check if the selected day is Wednesday to Sunday (days 3 to 6)
        if (selectedDate.getDay() < 3 || selectedDate.getDay() > 6) {
            // If not, display an alert and clear the input value
            alert('Please select a date between Wednesday and Sunday.');
            dateInput.value = '';
        }
    });

// Get the date input element
var dateInput = document.getElementById('date');

// Set the minimum date to today
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
dateInput.setAttribute('min', today);

// Updated event listener for date input
dateInput.addEventListener('input', function () {
    // Get the selected date
    var selectedDate = new Date(dateInput.value);

    // Check if the selected day is Wednesday to Sunday (days 3 to 6)
    if (selectedDate.getDay() < 3 || selectedDate.getDay() > 6) {
        // If not, display an alert and clear the input value
        alert('Please select a date between Wednesday and Sunday.');
        dateInput.value = '';
        return; // Exit the function to prevent further validation
    }

    // Get the time input element
    var timeInput = document.getElementById('time');

    // Reset the time input value when the date changes
    timeInput.value = '';
});

});
