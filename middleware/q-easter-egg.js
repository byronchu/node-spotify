function qEasterEgg(req, res, next) {
  const path = req.path;
  // if path includes letter 'q'
  if (path.indexOf('q') !== -1) {
    res.render('q-easter-egg');

  }
  else {
    // Continue as normal
    next();
  }
}

module.exports = qEasterEgg;
