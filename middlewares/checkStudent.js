module.exports = (req, res, next) => {
    if (req.headers.role !== 'student') {
        return res.status(401).json({ error: 'Access denied' });
    }
    next();
  };