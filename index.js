const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json()); // Parse JSON payloads

// Ingest API Route
app.post('/ingest', (req, res) => {
    console.log('Received Data:', req.body);

    // Save data to a log file (optional)
    fs.appendFileSync('data.log', JSON.stringify(req.body) + '\n');

    res.status(200).json({ message: 'Data received successfully!' });
});

// Start HTTP Server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`✅ HTTP API running on http://localhost:${PORT}/ingest`);
});
