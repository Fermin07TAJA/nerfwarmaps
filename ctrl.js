document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-images');

    if (toggleButton) {
        // For controls.html
        toggleButton.addEventListener('click', async () => {
            const response = await fetch('/toggle', { method: 'POST' });
            const result = await response.json();
            alert(`Images toggled. New state: ${result.state}`);
        });
    }

    // For map.html
    const imageA = document.getElementById('image-a');
    const imageB = document.getElementById('image-b');
    const imageC = document.getElementById('image-c');

    if (imageA && imageB && imageC) {
        fetch('/state')
            .then(response => response.json())
            .then(data => {
                if (data.state === 'alternate') {
                    imageA.src = 'img/d.jpg';
                    imageB.src = 'img/e.jpg';
                    imageC.src = 'img/f.jpg';
                }
            });
    }
});
