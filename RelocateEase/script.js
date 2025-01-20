// Smooth Scrolling for Navbar Links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelectorAll('.learn-more-btn').forEach(button => {
  button.addEventListener('click', event => {
    const targetId = event.target.dataset.target; // Get the target section ID
    const targetSection = document.getElementById(targetId);

    // Ensure only the clicked section is shown
    document.querySelectorAll('.details-section').forEach(section => {
      if (section !== targetSection) {
        section.style.display = 'none'; // Hide others
      }
    });

    // Show the selected section
    targetSection.style.display = 'block';

    // Scroll to the expanded section
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});


// Contact Form Handling
  document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("bDD9Bs-d_KntBXRt_"); // Initialize EmailJS with your public key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        // EmailJS form submission
        emailjs.send("service_k1f6xcb", "template_i65xssp", formData)
            .then(function () {
                alert("Your message has been sent successfully!");
                document.getElementById("contact-form").reset(); // Clear the form after successful submission
            })
            .catch(function (error) {
                console.error("Failed to send the message: ", error);
                alert("Failed to send the message. Please try again later.");
            });
    });
});


// Experience Booking Form Submission
document.getElementById('experience-booking-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const experience = document.getElementById('experience').value;
  const date = document.getElementById('date').value;
  const email = document.getElementById('email').value;

  alert(`Thank you for booking a ${experience}. We’ll contact you at ${email} to confirm your booking for ${date}.`);
  document.getElementById('experience-booking-form').reset();
});




// Google Maps Initialization
function initMap() {
  const capeTown = { lat: -33.9249, lng: 18.4241 };
  const map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom: 12,
      center: capeTown,
  });

  const locations = [
      { position: { lat: -33.918861, lng: 18.4233 }, title: "Coworking Space 1" },
      { position: { lat: -33.912345, lng: 18.429123 }, title: "Tourist Attraction" },
  ];

  locations.forEach(location => {
      new google.maps.Marker({
          position: location.position,
          map,
          title: location.title,
      });
  });
}

// Referral Form Submission
document.getElementById('referral-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = event.target.querySelector('input').value;
  alert(`Thank you for referring ${email}!`);
  event.target.reset();
});

// Select Service and Fill Booking Form
function selectService(serviceName, servicePrice) {
  document.getElementById('service').value = serviceName;
  document.getElementById('price').value = `$${servicePrice}`;
}

// Booking Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Collect form data
  const formData = {
      service: document.getElementById('service').value,
      price: document.getElementById('price').value,
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      date: document.getElementById('date').value,
  };

  // Log form data
  console.log("Booking Details:", formData);

  // Process booking form data
  alert("Thank you for your booking! We will contact you soon.");
  document.getElementById('bookingForm').reset();
});
// src/script.js

// Example validation for booking form
document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm"); // assuming you have a booking form with this ID

  if (bookingForm) {
      bookingForm.addEventListener("submit", function (e) {
          e.preventDefault();
          const fullName = document.getElementById("fullName").value;
          const email = document.getElementById("email").value;

          if (!fullName || !email) {
              alert("Please fill in all required fields.");
              return;
          }

          alert("Booking successfully submitted!");
          bookingForm.reset();
      });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const sectionId = urlParams.get('section');

  if (sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      // Hide other sections
      document.querySelectorAll('.details-section').forEach(section => {
        section.style.display = 'none';
      });

      // Show the target section
      targetSection.style.display = 'block';

      // Scroll to the section
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
// Smooth scroll to the hash section when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  }
});
