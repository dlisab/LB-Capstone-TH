document.addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    
    const r = Math.round(x * 255);
    const g = Math.round(y * 255);
    const b = Math.round((x + y) / 2 * 255);
    
    const color = `rgb(${r}, ${g}, ${b})`;
    document.getElementById('background').style.backgroundColor = color;
});