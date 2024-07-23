document.addEventListener('mousemove', function(event) {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    
    const r = Math.round(x * 255);
    const g = Math.round(y * 255);
    const b = Math.round((x + y) / 2 * 255);
    
    const color = `rgb(${37}, ${150}, ${190})`;
    document.getElementById('jumbotron').style.backgroundColor = color;
});