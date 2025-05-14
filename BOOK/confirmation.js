 document.getElementById("service-name").textContent = localStorage.getItem("selectedService") || "Not selected";
document.getElementById("booked-time").textContent = localStorage.getItem("selectedTime") || "Not selected";
document.getElementById("transport-type").textContent = localStorage.getItem("transportType") || "Not selected";
