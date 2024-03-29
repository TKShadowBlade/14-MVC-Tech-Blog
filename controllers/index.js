const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes');
const dashRoutes = require('./dash-routes');
router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/dashboard', dashRoutes);
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;