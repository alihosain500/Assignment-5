document.addEventListener("DOMContentLoaded", function() {
  const seats = document.querySelectorAll(".seat-btn");
  const selectedSeats = new Set();
  const totalPriceElement = document.getElementById("total-price");
  const availableSeatsElement = document.getElementById("available-seats");
  const passengerNameInput = document.getElementById("passenger-name");
  const phoneNumberInput = document.getElementById("phone-number");
  const emailInput = document.getElementById("email");
  const nextButton = document.getElementById("next-btn");
  const successModal = document.getElementById("success-modal");
  const closeModalButton = document.getElementById("close-modal");
  const couponCodeInput = document.getElementById("coupon-code");
  const applyCouponButton = document.getElementById("apply-coupon-btn");

  let totalPrice = 0;
  let availableSeats = 8;
  let couponApplied = false;

  seats.forEach(seat => {
    seat.addEventListener("click", function() {
      const seatNumber = seat.dataset.seat;
      if (selectedSeats.has(seatNumber)) {
        selectedSeats.delete(seatNumber);
        totalPrice -= 550;
        availableSeats++;
      } else if (selectedSeats.size < 4) {
        selectedSeats.add(seatNumber);
        totalPrice += 550;
        availableSeats--;
      }
      if (couponApplied) {
        totalPrice = totalPrice * 0.8; // Apply 20% discount if coupon is applied
      }
      updateUI();
    });
  });

  nextButton.addEventListener("click", function() {
    if (selectedSeats.size > 0) {
      // You can perform validation here for input fields if needed
      successModal.classList.remove("hidden");
    }
  });

  closeModalButton.addEventListener("click", function() {
    successModal.classList.add("hidden");
    resetForm();
  });

  document.addEventListener("DOMContentLoaded", function() {
    const couponCodeInput = document.getElementById("coupon-code");
    const applyCouponButton = document.getElementById("apply-coupon-btn");

    applyCouponButton.addEventListener("click", function() {
        // Get the entered coupon code
        const enteredCouponCode = couponCodeInput.value.trim();
        
        // Define the valid coupon code
        const validCouponCode = "20OFF"; // Example coupon code
        
        // Check if the entered coupon code matches the valid coupon code
        if (enteredCouponCode === validCouponCode) {
            // Apply discount or perform any desired action
            applyDiscount(); // You can replace this function with your logic
        } else {
            // Display an error message or perform any other action for invalid coupon code
            alert("Invalid coupon code");
        }
    });

    // Function to apply discount or perform any desired action
    function applyDiscount() {
        // Your logic to apply discount
        console.log("Discount applied successfully");
    }
});


  function updateUI() {
    totalPriceElement.textContent = totalPrice.toFixed(2); // Displaying total price with two decimal places
    availableSeatsElement.textContent = availableSeats;
  }

  function resetForm() {
    selectedSeats.clear();
    totalPrice = 0;
    availableSeats = 8;
    couponApplied = false;
    updateUI();
    passengerNameInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
    couponCodeInput.value = "";
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const seats = document.querySelectorAll(".seat-btn");
  const maxSelections = 4; // Maximum number of selections allowed
  let selectedCount = 0;

  seats.forEach(seat => {
    seat.addEventListener("click", function() {
      if (!seat.classList.contains("selected") && selectedCount < maxSelections) {
        seat.classList.add("selected");
        selectedCount++;
      } else if (seat.classList.contains("selected")) {
        seat.classList.remove("selected");
        selectedCount--;
      }
    });
  });
});




