


$(function () {
  $('[data-toggle="popover"]').popover()
})

//Include Bootstrap JS 
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

// Add this script after the Bootstrap JS -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(function(dropdown) {
      new bootstrap.Dropdown(dropdown);
    });
  });
</script>