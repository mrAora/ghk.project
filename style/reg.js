(function(){
    emailjs.init("YOUR_PUBLIC_KEY"); // သင့် emailjs public key
  })();

  document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function(response) {
        alert("Registration sent successfully!");
        document.getElementById("registerForm").reset();
      }, function(error) {
        alert("Failed to send registration: " + error.text);
      });
  });

  // navbar scroll background
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});


function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const successMessage = document.getElementById("success-message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission to server
  
      // Collecting form data
      const name = document.getElementById("name").value.trim();
      const jobTitle = document.getElementById("job-title").value.trim();
      const company = document.getElementById("company").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const description = document.getElementById("description").value.trim();
  
      // Simple validation for empty fields
      if (name && jobTitle && company && email && phone && description) {
        // Show success message
        successMessage.classList.remove("hidden");
        form.reset(); // Reset form fields
  
        // You could send the data to a server or save it locally here (e.g., using localStorage or an API).
      } else {
        alert("Please fill out all fields!");
      }
    });
  });