const ensureAuthenticated = (req, res, next) => {
    // ⚠️ WARNING: This function now allows ALL requests to proceed
    // without checking for a JWT token or user authentication.

    // Calling next() immediately tells Express to move to the 
    // next middleware or the final route handler.
    next(); 
}

module.exports = ensureAuthenticated;