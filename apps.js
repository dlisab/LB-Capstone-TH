
// global variables
gridContainer.addEventListener('click', e => {
    // make sure the click is not on the gridContainer itself
    if (e.target !== gridContainer) {
    // select the card element based on its proximity to actual element clicked
    const card = e.target.closest(".card");
    const index = card.getAttribute('data-index');
    displayModal(index);
    }
    });

    modalClose.addEventListener('click', () => {
        overlay.classList.add("hidden");
        });
//Include Bootstrap CSS (optional)
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
        
/* Include Bootstrap CSS (optional)*/
    
          document.addEventListener('DOMContentLoaded', function() {
            // Initialize Bootstrap dropdowns
            var dropdownToggleList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
            var dropdownList = dropdownToggleList.map(function (dropdownToggleEl) {
              return new bootstrap.Dropdown(dropdownToggleEl);
            });
          });
      

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});