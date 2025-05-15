function generateTicketNumber() {
  // Simple version using timestamp or counter
  const timestamp = Date.now(); // ensures uniqueness
  return 'MC' + timestamp.toString().slice(-6); // e.g., MC123456
}

function submitBooking() {
  const selectedService = document.getElementById("service-selected").value;
  const selectedTime = document.getElementById("time-selected").value;
  const transportType = document.getElementById("transport-type").value;

  if (!selectedService || !selectedTime || !transportType) {
    alert("Please select service, transport type, and time.");
    return;
  }

  const ticketNumber = generateTicketNumber();

  localStorage.setItem("selectedService", selectedService);
  localStorage.setItem("selectedTime", selectedTime);
  localStorage.setItem("transportType", transportType);
  localStorage.setItem("ticketNumber", ticketNumber); // ✅ store ticket

  window.location.href = "confirmation.html";
}
