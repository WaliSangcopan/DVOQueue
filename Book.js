function submitBooking() {
    const selectedService = document.getElementById("service-selected").value;
    const selectedTime = document.getElementById("time-selected").value;
    const transportType = document.getElementById("transport-type").value;

    if (!selectedService || !selectedTime || !transportType) {
        alert("Please select service, transport type, and time.");
        return;
    }

    // Save to localStorage
    localStorage.setItem("selectedService", selectedService);
    localStorage.setItem("selectedTime", selectedTime);
    localStorage.setItem("transportType", transportType);

    // Redirect to confirmation page
    window.location.href = "confirmation.html";
}