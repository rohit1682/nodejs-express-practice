function validateItem(req, res, next) {
  const { name, description } = req.body || {};

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      error: 'Field \"name\" is required and must be a non-empty string',
    });
  }

  if (description !== undefined && typeof description !== 'string') {
    return res.status(400).json({
      error: 'Field \"description\" must be a string if provided',
    });
  }

  next();
}

module.exports = validateItem;

