// app.js

// Main application initialization for Cocorná Escape Room

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware and route setups can be added here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
