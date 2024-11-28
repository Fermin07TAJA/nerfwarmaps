const express = require('express');
const app = express();
const path = require('path');

// Global toggle state
let imageState = 'default'; // 'default' or 'alternate'

// Serve static files
app.use(express.static(path.join(__dirname)));

// API endpoint to toggle state
app.post('/toggle', (req, res) => {
    imageState = imageState === 'default' ? 'alternate' : 'default';
    res.json({ state: imageState });
});

// API endpoint to get current state
app.get('/state', (req, res) => {
    res.json({ state: imageState });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
