const router = require('express').Router();

const apiRoutes = require('./api/api-routes.js');
const homeroutes = require('./home-routes.js')

console.log("index.js hit");

router.use('/api', apiRoutes);
router.use('/', homeroutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

module.exports = router;