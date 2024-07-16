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
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function () {
        var popoverContent = `
            <div class="list-group">
                <a href="file:///Users/lisabridges-new/Sites/TH-%20Project%208-Employee%20Directory/index.html" class="list-group-item list-group-item-action">Employee Directory</a>
                <a href="file:///Users/lisabridges-new/Sites/Sites/Web%20App%20Dashboard/index.html" class="list-group-item list-group-item-action">Web-App Dashboard</a>
                <a href="file:///Users/lisabridges-new/Sites/Sites/TH-game-show-app/index.html" class="list-group-item list-group-item-action">Gameshow App</a>
            </div>
        `;

        var popover = new bootstrap.Popover(document.getElementById('projectsPopover'), {
            content: popoverContent,
            html: true
        });
    });
</script>
