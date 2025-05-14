document.addEventListener("DOMContentLoaded", function () {
  // Book button functionality
  const bookButton = document.querySelector(".book-button");
  if (bookButton) {
    bookButton.addEventListener("click", function () {
      alert("Booking functionality will be implemented here");
      // This would typically redirect to a booking page or open a booking modal
    });
  }

  // You could add more functionality here as needed
  // For example, fetching service details from an API
  // or handling branch selection
});
