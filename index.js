// Import required modules
const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session'); // For owner-only access

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy credentials for the owner
const OWNER_USERNAME = 'owner';
const OWNER_PASSWORD = 'securepassword';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To handle form submissions
app.use(express.static(path.join(__dirname, 'public')));

// Session setup for owner authentication
app.use(
    session({
        secret: 'your-secret-key', // Change this to a secure key
        resave: false,
        saveUninitialized: true,
    })
);

// Routes

// Homepage Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Products API Route (Example)
app.get('/Become-A-Supplier', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Become-A-Supplier.html'));
});

// Customer Service Route
app.get('/customer-service', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'customer-service.html'));
});

// Payment Methods Route
app.get('/payment-methods', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'payment-methods.html'));
});

// Information Route
app.get('/information', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'information.html'));
});

// Login Route (renders login page)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle Login Form Submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === OWNER_USERNAME && password === OWNER_PASSWORD) {
        req.session.isOwner = true; // Mark the session as owner-authenticated
        res.redirect('/owner-page');
    } else {
        res.status(401).send('<h1>Unauthorized</h1><a href="/login">Try Again</a>');
    }
});

// Middleware to protect the owner-only route
function checkOwner(req, res, next) {
    if (req.session.isOwner) {
        next();
    } else {
        res.status(403).send('<h1>Access Denied</h1><a href="/login">Go to Login</a>');
    }
}

// Owner-only Route
app.get('/owner-page', checkOwner, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'owner-page.html'));
});

// Logout Route
app.get('/logout', (req, res) => {
    req.session.destroy(); // Destroy the session
    res.redirect('/'); // Redirect to homepage
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
