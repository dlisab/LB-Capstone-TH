<script>
document.addEventListener('DOMContentLoaded', function() {
  const openFormBtn = document.getElementById('openFormBtn');
  const contactForm = document.getElementById('contactForm');

  // Toggle dropdown on button click
  openFormBtn.addEventListener('click', function() {
    contactForm.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(event) {
    if (!contactForm.contains(event.target) && !openFormBtn.contains(event.target)) {
      contactForm.classList.remove('show');
    }
  });

  // Handle form submission
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const email = document.getElementById('exampleDropdownFormEmail2').value;
    const designType = document.querySelector('input[name="designType"]:checked');
    const message = document.getElementById('message').value;

    // Validate form
    if (!email || !designType || !message) {
      alert('Please fill out all fields');
      return;
    }

    // Send the form data to a server
    console.log('Form submitted:', {
      email: email,
      designType: designType.id,
      message: message
    });

    // Clear form and close dropdown
    contactForm.reset();
    contactForm.classList.remove('show');
    alert('Thank you for your message!');
  });
});
</script>